const unidades = [
  {
    nombre: 'ELANPET',
    clase: 'teal',
    estado: 'Operativo',
    dominio: 'pet.elankav.com',
    descripcion: 'Mascotas, productos, accesorios, veterinarias afiliadas, pedidos por QR y comisiones.',
    enlace: 'https://pet.elankav.com',
    accion: 'Entrar',
  },
  {
    nombre: 'ELANVISUAL',
    clase: 'blue',
    estado: 'Próxima unidad',
    dominio: 'visual.elankav.com',
    descripcion: 'Rotulación, impresión digital, fachadas, acrílicos, PVC, CNC, láser, displays y branding.',
    enlace: 'https://visual.elankav.com',
    accion: 'Próximamente',
  },
  {
    nombre: 'ELANCENTER',
    clase: 'purple',
    estado: 'Planificado',
    dominio: 'center.elankav.com',
    descripcion: 'Tecnología, formación, centro digital, servicios informáticos, diseño y capacitación.',
    enlace: 'https://center.elankav.com',
    accion: 'Planificado',
  },
  {
    nombre: 'ELANSOLAR',
    clase: 'orange',
    estado: 'Planificado',
    dominio: 'solar.elankav.com',
    descripcion: 'Energía solar, sistemas fotovoltaicos, eficiencia energética y soluciones eléctricas.',
    enlace: 'https://solar.elankav.com',
    accion: 'Planificado',
  },
  {
    nombre: 'ELANAI',
    clase: 'green',
    estado: 'Planificado',
    dominio: 'ai.elankav.com',
    descripcion: 'Inteligencia artificial, automatización, asistentes, procesos inteligentes y análisis operativo.',
    enlace: 'https://ai.elankav.com',
    accion: 'Planificado',
  },
]

const proyectos = [
  ['Fachadas comerciales', 'Rotulación corporativa, letras 3D, iluminación y revestimientos.'],
  ['Impresión y branding', 'Material publicitario, displays, vinil, lonas y comunicación visual.'],
  ['Tecnología aplicada', 'Plataformas, automatización, datos, procesos y operación digital.'],
  ['Energía y soluciones', 'Sistemas solares, eficiencia energética y proyectos especiales.'],
]

const capacidades = [
  'Diseño y estrategia visual',
  'Fabricación y producción',
  'Tecnología y plataformas',
  'Automatización operativa',
  'Energía y sostenibilidad',
  'Escalabilidad empresarial',
]

const sistemasInternos = [
  'Gestión comercial centralizada',
  'Control de pedidos y producción',
  'Inventario y materiales',
  'Cobros, cuentas y comisiones',
  'Leads y canales digitales',
  'Administración global',
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

export default function App() {
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
            <a href="#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
          </div>

          <a className="nav-cta" href="#contacto">Iniciar proyecto</a>
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
            <a className="btn-primary" href="#ecosistema">Explorar ecosistema</a>
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

      <section className="section" id="ecosistema">
        <div className="section-header compact">
          <span className="eyebrow">Arquitectura oficial</span>
          <h2>Unidades de negocio conectadas bajo ELANKAV.</h2>
          <p>
            Cada unidad tiene su dominio, color, función y etapa de desarrollo. La matriz funciona como portal corporativo y punto de entrada.
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
              <a
                className="unit-link"
                href={unidad.enlace}
                target="_blank"
                rel="noreferrer"
                aria-label={`${unidad.accion} a ${unidad.nombre}`}
              >
                {unidad.accion}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="capacidades">
        <div className="section-header">
          <span className="eyebrow">Capacidades</span>
          <h2>Producción, tecnología y operación en una misma estructura.</h2>
        </div>

        <div className="capability-grid">
          {capacidades.map((capacidad, index) => (
            <div className="capability-card" key={capacidad}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{capacidad}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section internal-section">
        <div className="internal-box">
          <div>
            <span className="eyebrow">Infraestructura empresarial</span>
            <h2>Sistemas internos preparados para escalar.</h2>
            <p>
              ELANKAV opera con una estructura centralizada para administrar clientes, pedidos,
              producción, cobros, inventario, leads y unidades de negocio desde una base común.
            </p>
          </div>
          <div className="internal-list">
            {sistemasInternos.map((sistema) => (
              <span key={sistema}>{sistema}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="proyectos">
        <div className="section-header">
          <span className="eyebrow">Proyectos y soluciones</span>
          <h2>Aplicaciones reales para marcas, negocios y operaciones.</h2>
        </div>

        <div className="projects-grid">
          {proyectos.map(([nombre, descripcion]) => (
            <article className="project-card" key={nombre}>
              <h3>{nombre}</h3>
              <p>{descripcion}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section vision-section">
        <div className="vision-card">
          <span className="eyebrow">Visión</span>
          <h2>Una visión. Múltiples soluciones.</h2>
          <p>
            ELANKAV nace para integrar servicios, producción, tecnología y sistemas inteligentes
            en una plataforma empresarial capaz de crecer por unidades, sin duplicar estructuras ni perder control operativo.
          </p>
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
