import './index.css'

const unidades = [
  {
    nombre: 'ELANPET',
    etiqueta: 'Mascotas',
    descripcion: 'Bienestar animal, muebles y accesorios funcionales.',
    enlace: 'https://pet.elankav.com',
    color: 'teal',
  },
  {
    nombre: 'ELANVISUAL',
    etiqueta: 'Producción visual',
    descripcion: 'Rotulación, impresión, CNC, láser, acrílicos, PVC y branding.',
    enlace: 'https://visual.elankav.com',
    color: 'blue',
  },
  {
    nombre: 'ELANCENTER',
    etiqueta: 'Tecnología',
    descripcion: 'Centro digital, soporte, formación y servicios tecnológicos.',
    enlace: 'https://center.elankav.com',
    color: 'purple',
  },
  {
    nombre: 'ELANSOLAR',
    etiqueta: 'Energía',
    descripcion: 'Soluciones solares, eficiencia energética y sistemas eléctricos.',
    enlace: 'https://solar.elankav.com',
    color: 'orange',
  },
  {
    nombre: 'ELANAI',
    etiqueta: 'Automatización',
    descripcion: 'CRM, inteligencia artificial, asistentes y sistemas inteligentes.',
    enlace: 'https://ai.elankav.com',
    color: 'green',
  },
]

const capacidades = [
  {
    titulo: 'Diseño',
    texto: 'Identidad visual, branding, comunicación y dirección gráfica.',
  },
  {
    titulo: 'Producción',
    texto: 'Fabricación física, rotulación, acrílicos, PVC, displays y estructuras.',
  },
  {
    titulo: 'Tecnología',
    texto: 'Plataformas web, centros digitales, soporte y sistemas de operación.',
  },
  {
    titulo: 'Automatización',
    texto: 'Flujos, procesos, CRM, leads, seguimiento y control comercial.',
  },
  {
    titulo: 'Energía',
    texto: 'Soluciones solares, eficiencia eléctrica y proyectos energéticos.',
  },
  {
    titulo: 'Inteligencia Artificial',
    texto: 'Asistentes, análisis, automatización y sistemas inteligentes.',
  },
]

const crmFlujo = [
  'Empresa',
  'Contacto',
  'Lead',
  'Cotización',
  'Pedido',
  'Orden de Trabajo',
  'Producción',
  'Cobro',
  'Comisión',
]

const proyectos = ['COMEX', 'ORIFLAME', 'WALMART', 'FARMACIAS']

function Mark({ className = '' }) {
  return (
    <span className={`elan-mark ${className}`} aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
    </span>
  )
}

function App() {
  return (
    <main className="site">
      <header className="header">
        <a href="#inicio" className="brand" aria-label="ELANKAV inicio">
          <Mark />
          <strong>ELANKAV</strong>
        </a>

        <nav className="nav" aria-label="Navegación principal">
          <a href="#ecosistema">Ecosistema</a>
          <a href="#capacidades">Capacidades</a>
          <a href="#crm">CRM</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a className="header-action" href="#ecosistema">
          Explorar
        </a>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">ECOSISTEMA EMPRESARIAL</p>
          <h1>ELANKAV</h1>
          <h2>Diseño. Tecnología. Producción. Automatización.</h2>
          <p className="hero-text">
            Una plataforma empresarial creada para conectar marcas, procesos,
            clientes y soluciones inteligentes bajo una misma visión operativa.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#ecosistema">
              Explorar ecosistema
            </a>
            <a className="btn btn-secondary" href="https://wa.me/50585228183">
              Contactar
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>5</strong>
              <span>Unidades</span>
            </div>
            <div>
              <strong>1</strong>
              <span>Ecosistema</span>
            </div>
            <div>
              <strong>CRM</strong>
              <span>Central</span>
            </div>
          </div>
        </div>

        <div className="hero-system">
          <div className="network-card">
            <div className="network-orbit orbit-one"></div>
            <div className="network-orbit orbit-two"></div>
            <div className="network-center">
              <Mark className="mark-large" />
            </div>

            <span className="node node-pet">PET</span>
            <span className="node node-visual">VISUAL</span>
            <span className="node node-center">CENTER</span>
            <span className="node node-solar">SOLAR</span>
            <span className="node node-ai">AI</span>
          </div>
        </div>
      </section>

      <section id="ecosistema" className="section ecosystem-section">
        <div className="section-head">
          <p className="eyebrow">UNIDADES</p>
          <h2>Un ecosistema. Múltiples soluciones.</h2>
          <p>
            Cada unidad tiene identidad propia, pero todas se conectan a la
            misma visión central: diseño, producción, tecnología y operación.
          </p>
        </div>

        <div className="units-grid">
          {unidades.map((unidad) => (
            <article className={`unit-card ${unidad.color}`} key={unidad.nombre}>
              <div className="unit-top">
                <Mark className="mark-small" />
                <span>{unidad.etiqueta}</span>
              </div>

              <h3>{unidad.nombre}</h3>
              <p>{unidad.descripcion}</p>

              <a href={unidad.enlace} target="_blank" rel="noreferrer">
                Ingresar
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="capacidades" className="section capabilities-section">
        <div className="section-head compact">
          <p className="eyebrow">CAPACIDADES</p>
          <h2>Capacidades que se conectan.</h2>
        </div>

        <div className="capabilities-grid">
          {capacidades.map((capacidad) => (
            <article className="capability-card" key={capacidad.titulo}>
              <span></span>
              <h3>{capacidad.titulo}</h3>
              <p>{capacidad.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="crm" className="section crm-section">
        <div className="crm-layout">
          <div>
            <p className="eyebrow">SISTEMA CENTRAL</p>
            <h2>CRM CENTRAL ELANKAV</h2>
            <p>
              El núcleo operativo que conecta clientes, leads, cotizaciones,
              pedidos, producción, cobros y comisiones de todas las unidades.
            </p>
            <a className="btn btn-secondary" href="#contacto">
              Plataforma en desarrollo
            </a>
          </div>

          <div className="crm-flow">
            {crmFlujo.map((item, index) => (
              <div className="flow-item" key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proyectos" className="section projects-section">
        <div className="section-head">
          <p className="eyebrow">PRUEBA OPERATIVA</p>
          <h2>Proyectos que respaldan la visión.</h2>
          <p>
            ELANKAV nace desde la producción real, la comunicación visual y la
            ejecución técnica. La tecnología se construye sobre operación real.
          </p>
        </div>

        <div className="projects-grid">
          {proyectos.map((proyecto) => (
            <article className="project-card" key={proyecto}>
              <span>Proyecto destacado</span>
              <h3>{proyecto}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section vision-section">
        <div className="vision-card">
          <p className="eyebrow">VISIÓN 2030</p>
          <h2>Una plataforma empresarial preparada para crecer.</h2>
          <p>
            ELANKAV evoluciona hacia un ecosistema digital donde cada unidad
            opera conectada a CRM, ERP, inventario, producción, ventas,
            WhatsApp Center e inteligencia artificial.
          </p>

          <div className="vision-track">
            <span>ELANPET</span>
            <span>ELANVISUAL</span>
            <span>ELANCENTER</span>
            <span>ELANSOLAR</span>
            <span>ELANAI</span>
            <span>CRM</span>
            <span>ERP</span>
          </div>
        </div>
      </section>

      <section id="contacto" className="section contact-section">
        <div>
          <p className="eyebrow">CONTACTO</p>
          <h2>Hablemos de tu próximo proyecto.</h2>
          <p>
            Diseño, tecnología, producción y automatización bajo una sola visión
            empresarial.
          </p>
        </div>

        <a className="btn btn-primary" href="https://wa.me/50585228183">
          Contactar por WhatsApp
        </a>
      </section>

      <footer className="footer">
        <div>
          <div className="brand footer-brand">
            <Mark />
            <strong>ELANKAV</strong>
          </div>
          <p>Ecosistema empresarial.</p>
        </div>

        <div className="footer-links">
          <a href="https://pet.elankav.com">pet.elankav.com</a>
          <a href="https://visual.elankav.com">visual.elankav.com</a>
          <a href="https://center.elankav.com">center.elankav.com</a>
          <a href="https://solar.elankav.com">solar.elankav.com</a>
          <a href="https://ai.elankav.com">ai.elankav.com</a>
        </div>
      </footer>
    </main>
  )
}

export default App