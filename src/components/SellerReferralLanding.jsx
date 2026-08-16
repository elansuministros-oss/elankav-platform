import { useEffect, useMemo, useState } from "react"
import { ecosystemPlatforms } from "../data/ecosystemPlatforms"
import "./SellerReferralLanding.css"

const CONNECT_BASE = "https://connect.elankav.com/console/api/sellers"

export default function SellerReferralLanding({ sellerCode }) {
  const [seller, setSeller] = useState(null)
  const [error, setError] = useState("")

  const code = useMemo(() => String(sellerCode || "").trim().toUpperCase(), [sellerCode])

  useEffect(() => {
    let active = true
    fetch(`${CONNECT_BASE}/ref/${encodeURIComponent(code)}`, { headers: { Accept: "application/json" } })
      .then(async (response) => {
        const payload = await response.json().catch(() => ({}))
        if (!response.ok) throw new Error(payload?.error?.message || "Código de vendedor no disponible.")
        return payload?.data || null
      })
      .then((data) => { if (active) setSeller(data) })
      .catch((cause) => { if (active) setError(cause.message || "No fue posible validar el código.") })
    return () => { active = false }
  }, [code])

  async function openPlatform(platform) {
    const platformName = platform.name.toUpperCase()
    try {
      await fetch(`${CONNECT_BASE}/ref/${encodeURIComponent(code)}/landing`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          platform: platformName,
          metadata: {
            source: "SELLER_QR",
            landing: "www.elankav.com",
          },
        }),
      })
    } catch {
      // El registro no debe bloquear la navegación del cliente.
    }

    const destination = new URL(platform.href)
    destination.searchParams.set("seller", code)
    destination.searchParams.set("source", "seller_qr")
    window.location.assign(destination.toString())
  }

  return (
    <main className="seller-referral-page">
      <section className="seller-referral-shell">
        <div className="seller-referral-brand">ELANKAV</div>
        <p className="seller-referral-kicker">ECOSISTEMA</p>
        <h1>¿Qué solución estás buscando?</h1>
        <p className="seller-referral-copy">
          Elegí la unidad de ELANKAV que necesitás. Todas están disponibles desde este acceso.
        </p>

        {seller ? (
          <div className="seller-referral-origin">
            Referido por <strong>{seller.display_name}</strong>
          </div>
        ) : null}

        {error ? <div className="seller-referral-warning">{error}</div> : null}

        <div className="seller-referral-grid">
          {ecosystemPlatforms.map((platform) => (
            <button
              key={platform.id}
              type="button"
              className="seller-referral-card"
              onClick={() => openPlatform(platform)}
            >
              <span className="seller-referral-card-name">{platform.name}</span>
              <span className="seller-referral-card-description">{platform.description}</span>
              <span className="seller-referral-card-domain">{platform.domain} →</span>
            </button>
          ))}
        </div>

        <p className="seller-referral-footnote">
          El acceso registra el origen de la referencia para trazabilidad comercial dentro de ELANKAV.
        </p>
      </section>
    </main>
  )
}
