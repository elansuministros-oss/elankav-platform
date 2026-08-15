import { useEffect, useMemo, useState } from 'react'
import './PublicReceipt.css'

const CONNECT_BASE_URL = 'https://connect.elankav.com'
const ELANKAV_WEB = 'https://elankav.com'
const ELANKAV_PHONE_DISPLAY = '+505 7882 8089'
const ELANKAV_PHONE_LINK = 'tel:+50578828089'

function money(value) {
  return new Intl.NumberFormat('es-NI', { style: 'currency', currency: 'USD' }).format(Number(value || 0))
}

function paymentTypeLabel(value) {
  if (value === 'deposit') return 'Anticipo'
  if (value === 'balance') return 'Cancelación'
  if (value === 'refund') return 'Reembolso'
  return 'Pago'
}

function paymentMethodLabel(value) {
  if (value === 'bank_transfer' || value === 'transfer') return 'Transferencia bancaria'
  if (value === 'cash') return 'Efectivo'
  if (value === 'card') return 'Tarjeta'
  if (value === 'cheque' || value === 'other') return 'Cheque / Otro'
  return value || 'No especificado'
}

function Row({ label, value, strong = false }) {
  if (value === undefined || value === null || value === '') return null
  return <div><span>{label}</span><strong className={strong ? 'receipt-amount' : ''}>{value}</strong></div>
}

export default function PublicReceipt({ receiptNumber }) {
  const [receipt, setReceipt] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  const normalized = useMemo(() => String(receiptNumber || '').trim().toUpperCase(), [receiptNumber])

  useEffect(() => {
    let active = true
    async function load() {
      setLoading(true)
      setError('')
      try {
        const response = await fetch(`${CONNECT_BASE_URL}/api/v1/business/vqs/public/receipts/${encodeURIComponent(normalized)}`)
        const payload = await response.json().catch(() => ({}))
        if (!response.ok) throw new Error(payload?.error?.message || 'No fue posible consultar el recibo.')
        if (active) setReceipt(payload?.data || null)
      } catch (cause) {
        if (active) setError(cause?.message || 'No fue posible consultar el recibo.')
      } finally {
        if (active) setLoading(false)
      }
    }
    if (normalized) void load()
    return () => { active = false }
  }, [normalized])

  if (loading) return <main className="public-receipt-shell"><div className="receipt-status">Cargando recibo…</div></main>
  if (error || !receipt) return <main className="public-receipt-shell"><div className="receipt-status receipt-error"><strong>Recibo no disponible</strong><span>{error || 'No encontramos este recibo.'}</span></div></main>

  const isPaid = Number(receipt.pendingBalanceUsd || 0) <= 0.009 && Number(receipt.quotationTotalUsd || 0) > 0

  return (
    <main className="public-receipt-shell">
      <section className="public-receipt-card" id="receipt-print-area">
        <header className="receipt-head">
          <div className="receipt-brand">ELANKAV</div>
          <span>RECIBO OFICIAL</span>
          <h1>{receipt.receiptNumber}</h1>
        </header>

        <div className="receipt-body">
          <div className="receipt-project">
            <small>PROYECTO</small>
            <strong>{receipt.projectName || 'Proyecto ELANKAV'}</strong>
          </div>

          <h2 className="receipt-section-title">Datos del documento</h2>
          <div className="receipt-grid">
            <Row label="Tipo de pago" value={paymentTypeLabel(receipt.paymentType)} />
            <Row label="Cotización" value={receipt.quotationNumber} />
            <Row label="Fecha de pago" value={new Date(receipt.paidAt).toLocaleString('es-NI')} />
            <Row label="Cliente" value={receipt.customerName} />
            <Row label="Empresa" value={receipt.companyName} />
            <Row label="Ejecutivo" value={receipt.executiveName} />
          </div>

          <h2 className="receipt-section-title">Detalle del pago</h2>
          <div className="receipt-grid">
            <Row label="Forma de pago" value={paymentMethodLabel(receipt.paymentMethod)} />
            <Row label="Banco" value={receipt.bankName} />
            <Row label="Monto recibido" value={money(receipt.amountUsd)} strong />
          </div>

          <h2 className="receipt-section-title">Resumen financiero</h2>
          <div className="receipt-grid receipt-financial">
            <Row label="Total de la cotización" value={money(receipt.quotationTotalUsd)} />
            <Row label="Total pagado" value={money(receipt.totalPaidUsd)} />
            <Row label="Saldo pendiente" value={money(receipt.pendingBalanceUsd)} strong />
          </div>

          {receipt.notes ? <div className="receipt-notes"><small>OBSERVACIONES</small><p>{receipt.notes}</p></div> : null}

          <div className={`receipt-paid ${isPaid ? 'is-paid' : ''}`}>
            {isPaid ? 'PAGADO' : 'PAGO REGISTRADO'}
          </div>
        </div>

        <footer className="receipt-footer">
          <strong>ELANKAV</strong>
          <span>Documento oficial de recepción de pago</span>
          <div className="receipt-contact">
            <a href={ELANKAV_WEB}>elankav.com</a>
            <span>•</span>
            <a href={ELANKAV_PHONE_LINK}>{ELANKAV_PHONE_DISPLAY}</a>
          </div>
        </footer>
      </section>

      <div className="receipt-actions">
        <button type="button" onClick={() => window.print()}>Descargar PDF</button>
        <a href={ELANKAV_WEB}>Ir a ELANKAV</a>
      </div>
    </main>
  )
}
