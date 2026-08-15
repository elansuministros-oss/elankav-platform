import { useEffect, useMemo, useState } from 'react'
import './PublicReceipt.css'

const CONNECT_BASE_URL = 'https://connect.elankav.com'

function money(value) {
  return new Intl.NumberFormat('es-NI', { style: 'currency', currency: 'USD' }).format(Number(value || 0))
}

function paymentTypeLabel(value) {
  if (value === 'deposit') return 'Anticipo'
  if (value === 'balance') return 'Cancelación'
  if (value === 'refund') return 'Reembolso'
  return 'Pago'
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

          <div className="receipt-grid">
            <div><span>Tipo de pago</span><strong>{paymentTypeLabel(receipt.paymentType)}</strong></div>
            {receipt.quotationNumber ? <div><span>Cotización</span><strong>{receipt.quotationNumber}</strong></div> : null}
            <div><span>Fecha de pago</span><strong>{new Date(receipt.paidAt).toLocaleString('es-NI')}</strong></div>
            <div><span>Monto recibido</span><strong className="receipt-amount">{money(receipt.amountUsd)}</strong></div>
          </div>

          <div className="receipt-paid">PAGO REGISTRADO</div>
        </div>

        <footer className="receipt-footer">
          <strong>ELANKAV</strong>
          <span>Documento oficial de recepción de pago</span>
        </footer>
      </section>

      <div className="receipt-actions">
        <button type="button" onClick={() => window.print()}>Descargar PDF</button>
        <a href="https://elankav.com">Ir a ELANKAV</a>
      </div>
    </main>
  )
}
