import { useEffect, useState } from "react"
import "./App.css"

const ADMIN_KEY = "elankav_admin_session_v1"

const unidades = [
  {
    nombre: "ELANPET",
    clase: "teal",
    estado: "Operativo",
    dominio: "pet.elankav.com",
    descripcion: "Mascotas, productos, accesorios, veterinarias afiliadas, pedidos por QR y comisiones.",
    enlace: "https://pet.elankav.com",
    admin: "https://pet.elankav.com/admin",
    crm: "https://pet.elankav.com/admin/resultados",
    produccion: "https://pet.elankav.com/produccion",
  },
  {
    nombre: "ELANVISUAL",
    clase: "blue",
    estado: "Operativo",
    dominio: "visual.elankav.com",
    descripcion: "Rotulación, impresión digital, fachadas, acrílicos, PVC, CNC, láser, displays y branding.",
    enlace: "https://visual.elankav.com",
    admin: "https://visual.elankav.com/admin",
    crm: "https://visual.elankav.com/admin/resultados",
    produccion: "https://visual.elankav.com/produccion",
  },
  {
    nombre: "ELANCENTER",
    clase: "purple",
    estado: "Planificado",
    dominio: "center.elankav.com",
    descripcion: "Tecnología, formación, centro digital, servicios informáticos, diseño y capacitación.",
    enlace: "https://center.elankav.com",
    admin: "#",
    crm: "#",
    produccion: "#",
  },
  {
    nombre: "ELANHOME",
    clase: "orange",
    estado: "Planificado",
    dominio: "home.elankav.com",
    descripcion: "Soluciones para hogar, mobiliario, decoración, interiores y productos constructivos.",
    enlace: "https://home.elankav.com",
    admin: "#",
    crm: "#",
    produccion: "#",
  },
  {
    nombre: "KAVTORÉ",
    clase: "green",
    estado: "En desarrollo",
    dominio: "ai.elankav.com",
    descripcion: "Inteligencia artificial, automatización, asistentes, procesos inteligentes y análisis operativo.",
    enlace: "https://ai.elankav.com",
    admin: "https://elankav-core.vercel.app",
    crm: "https://elankav-core.vercel.app",
    produccion: "https://elankav-core.vercel.app",
  },
]

const modulosMaestros = [
  ["ELANKAV CORE", "https://elankav-core.vercel.app"],
  ["CRM CENTRAL", "https://elankav-core.vercel.app"],
  ["Finanzas", "https://elankav-core.vercel.app"],
  ["Inventario", "https://elankav-core.vercel.app"],
  ["Producción Global", "https://elankav-core.vercel.app"],
  ["KAVTORÉ", "https://elankav-core.vercel.app"],
]

function BrandSymbol() {
  return (
    <span className="elan-symbol" aria-hidden="true">
      <i></i>
      <i></i>
      <i></i>
    </span>
  )
}

function abrir(url) {
  if (!url || url === "#") return
  window.open(url, "_blank", "noopener,noreferrer")
}

export default function App() {
  const [adminActivo, setAdminActivo] = useState(false)
  const [clave, setClave] = useState("")

  useEffect(() => {
    setAdminActivo(localStorage.getItem(ADMIN_KEY) === "activo")
  }, [])

  const loginAdmin = (event) => {
    event.preventDefault()

    if (clave.trim() !== "ELANKAV-ROOT") {
      alert("Clave administrativa incorrecta")
      return
    }

    localStorage.setItem(ADMIN_KEY, "activo")
    setAdminActivo(true)
    setClave("")
  }

  const cerrarAdmin = () => {
    localStorage.removeItem(ADMIN_KEY)
    setAdminActivo(false)
  }

  return (
    <main className="elankav-page">
      <header className="site-header">
        <nav className="site-nav">
          <a className="brand" href="#inicio" aria-label="ELANKAV inicio">
            <BrandSymbol />
            <div>
              <strong>ELANKAV</strong>
              <span>One Vision · Multiple Solutions</span>
            </div>
          </a>

          <div className="nav-links">
            <a href="#ecosistema">Ecosistema</a>
            <a href="#unidades">Unidades</a>
            <a href="#capacidades">Capacidades</a>
            <a href="#contacto">Contacto</a>
          </div>

          <a className="nav-cta" href="#portal">
            {adminActivo ? "Portal Maestro" : "Acceso admin"}
          </a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <span className="eyebrow">Ecosistema empresarial</span>
          <h1>ELANKAV</h1>
          <h2>ONE VISION · MULTIPLE SOLUTIONS</h2>
          <p>
            Un ecosistema empresarial que conecta producción visual, tecnología, energía,
            inteligencia artificial y servicios especializados bajo una sola visión.
          </p>

          <div className="hero-actions">
            <a className="btn-primary" href="#portal">Entrar al ecosistema</a>
            <a className="btn-secondary" href="#unidades">Conocer unidades</a>
          </div>

          <div className="hero-stats" aria-label="Indicadores ELANKAV">
            <div><strong>5</strong><span>Unidades</span></div>
            <div><strong>1</strong><span>Ecosistema</span></div>
            <div><strong>100%</strong><span>Cloud</span></div>
            <div><strong>∞</strong><span>Escalable</span></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Identidad ELANKAV">
          <div className="symbol-stage">
            <BrandSymbol />
            <div className="symbol-glow"></div>
          </div>
          <div className="hero-points">
            <div><b>Un solo aliado</b><span>Múltiples soluciones</span></div>
            <div><b>Calidad garantizada</b><span>Procesos profesionales</span></div>
            <div><b>Soluciones integrales</b><span>De principio a fin</span></div>
            <div><b>Innovación constante</b><span>Tecnología y creatividad</span></div>
          </div>
        </div>
      </section>

      <section className="section" id="portal">
        {!adminActivo ? (
          <div className="admin-login-card">
            <span className="eyebrow">Acceso administrativo</span>
            <h2>Portal Maestro ELANKAV</h2>
            <p>
              Ingresá como administrador para acceder al CORE, CRM CENTRAL,
              unidades operativas, producción, finanzas e inventario.
            </p>

            <form onSubmit={loginAdmin} className="admin-login-form">
              <input
                type="password"
                value={clave}
                onChange={(event) => setClave(event.target.value)}
                placeholder="Clave administrativa"
              />
              <button type="submit">Entrar como administrador</button>
            </form>
          </div>
        ) : (
          <div className="master-portal">
            <div className="portal-header">
              <div>
                <span className="eyebrow">Administrador activo</span>
                <h2>Portal Maestro ELANKAV</h2>
                <p>Acceso unificado inicial al ecosistema completo.</p>
              </div>
              <button onClick={cerrarAdmin}>Cerrar sesión</button>
            </div>

            <div className="master-modules-grid">
              {modulosMaestros.map(([nombre, url]) => (
                <button key={nombre} onClick={() => abrir(url)}>
                  <span>{nombre}</span>
                  <small>Abrir módulo</small>
                </button>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="section" id="ecosistema">
        <div className="section-header compact">
          <span className="eyebrow">Arquitectura oficial</span>
          <h2>Unidades de negocio conectadas bajo ELANKAV.</h2>
          <p>
            Cada unidad tiene su dominio, color, función y etapa de desarrollo.
            La matriz funciona como portal corporativo y punto de entrada.
          </p>
        </div>

        <div className="units-grid" id="unidades">
          {unidades.map((unidad) => (
            <article className={`unit-card ${unidad.clase}`} key={unidad.nombre}>
              <div className="unit-top">
                <BrandSymbol />
                <span>{unidad.estado}</span>
              </div>
              <h3>{unidad.nombre}</h3>
              <small>{unidad.dominio}</small>
              <p>{unidad.descripcion}</p>

              {!adminActivo ? (
                <a
                  className="unit-link"
                  href={unidad.enlace}
                  target="_blank"
                  rel="noreferrer"
                >
                  Entrar
                </a>
              ) : (
                <div className="admin-unit-actions">
                  <button onClick={() => abrir(unidad.enlace)}>Plataforma</button>
                  <button onClick={() => abrir(unidad.admin)}>Admin</button>
                  <button onClick={() => abrir(unidad.crm)}>CRM</button>
                  <button onClick={() => abrir(unidad.produccion)}>Producción</button>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="capacidades">
        <div className="section-header">
          <span className="eyebrow">Capacidades</span>
          <h2>Producción, tecnología y operación en una misma estructura.</h2>
        </div>
      </section>

      <section className="section" id="contacto">
        <div className="contact-card">
          <div>
            <span className="eyebrow">Contacto</span>
            <h2>Iniciar un proyecto con ELANKAV.</h2>
            <p>Conectemos tu necesidad con la unidad correcta del ecosistema.</p>
          </div>
          <div className="contact-actions">
            <a href="https://wa.me/50585228183" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="mailto:elansuministros@gmail.com">Correo</a>
            <a href="https://pet.elankav.com" target="_blank" rel="noreferrer">Entrar a ELANPET</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="brand footer-brand">
            <BrandSymbol />
            <div>
              <strong>ELANKAV</strong>
              <span>One Vision · Multiple Solutions</span>
            </div>
          </div>
          <p>© {new Date().getFullYear()} ELANKAV · Managua, Nicaragua</p>
        </div>
      </footer>
    </main>
  )
}
