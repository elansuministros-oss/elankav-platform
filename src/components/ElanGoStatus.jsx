import { useEffect, useState } from "react"

const STATUS_URL =
  "https://connect.elankav.com/api/v1/marketplace/public/control-status"

function formatDate(value) {
  if (!value) return "Sin ejecución"

  try {
    return new Intl.DateTimeFormat("es-NI", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(value))
  } catch {
    return "No disponible"
  }
}

export default function ElanGoStatus() {
  const [status, setStatus] = useState(null)
  const [unavailable, setUnavailable] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const response = await fetch(STATUS_URL, {
          cache: "no-store",
        })

        if (!response.ok) throw new Error("STATUS_UNAVAILABLE")

        const data = await response.json()

        if (!cancelled) {
          setStatus(data)
          setUnavailable(false)
        }
      } catch {
        if (!cancelled) {
          setUnavailable(true)
        }
      }
    }

    load()
    const timer = window.setInterval(load, 30000)

    return () => {
      cancelled = true
      window.clearInterval(timer)
    }
  }, [])

  const enabled = status?.enabled === true

  return (
    <section className="elan-go-status" id="elan-go">
      <div className="elan-go-status-copy">
        <span>ELAN GO · INTERMEDIACIÓN AUTÓNOMA</span>
        <h2>ELAN sale a buscar oportunidades.</h2>
        <p>
          Busca ofertas y compradores, conecta ambas partes y trabaja bajo
          la autoridad comercial única de CONNECT.
        </p>
      </div>

      <div className="elan-go-status-panel">
        <div className="elan-go-status-line">
          <i className={enabled ? "is-on" : ""} />
          <strong>
            {unavailable
              ? "ESTADO NO DISPONIBLE"
              : enabled
                ? "ENCENDIDO"
                : "APAGADO"}
          </strong>
        </div>

        <dl>
          <div>
            <dt>Búsqueda / gasto</dt>
            <dd>{status?.spendEnabled ? "PERMITIDO" : "BLOQUEADO"}</dd>
          </div>
          <div>
            <dt>Contacto comercial</dt>
            <dd>{status?.outreachEnabled ? "PERMITIDO" : "BLOQUEADO"}</dd>
          </div>
          <div>
            <dt>Último ciclo</dt>
            <dd>{formatDate(status?.lastCycleAt)}</dd>
          </div>
          <div>
            <dt>Pago</dt>
            <dd>{status?.paymentConfigured ? "CONFIGURADO" : "NO CONFIGURADO"}</dd>
          </div>
        </dl>

        <div className="elan-go-owner-note">
          <strong>Control Owner por WhatsApp</strong>
          <span>“ELAN, enciende ELAN GO”</span>
          <span>“ELAN, apaga ELAN GO”</span>
          <span>“ELAN, estado ELAN GO”</span>
        </div>
      </div>
    </section>
  )
}
