import './index.css'

const unidades = [
  {
    nombre: 'ELANPET',
    color: 'teal',
    descripcion: 'Mascotas, bienestar animal y soluciones funcionales.',
    enlace: 'https://pet.elankav.com',
  },
  {
    nombre: 'ELANVISUAL',
    color: 'blue',
    descripcion: 'Comunicación visual, producción, rotulación e impresión.',
    enlace: 'https://visual.elankav.com',
  },
  {
    nombre: 'ELANCENTER',
    color: 'purple',
    descripcion: 'Tecnología, formación y servicios digitales.',
    enlace: 'https://center.elankav.com',
  },
  {
    nombre: 'ELANSOLAR',
    color: 'orange',
    descripcion: 'Energía inteligente y soluciones solares.',
    enlace: 'https://solar.elankav.com',
  },
  {
    nombre: 'ELANAI',
    color: 'green',
    descripcion: 'CRM, automatización e inteligencia artificial.',
    enlace: 'https://ai.elankav.com',
  },
]

const capacidades = [
  'Diseño',
  'Producción',
  'Tecnología',
  'Automatización',
  'Energía',
  'Inteligencia Artificial',
]

const proyectos = ['COMEX', 'ORIFLAME', 'WALMART', 'FARMACIAS']

function App() {
  return (
    <main className="site">
      <header className="header">
        <a href="#inicio" className="brand">
          <span className="brand-mark">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>ELANKAV</span>
        </a>

        <nav className="nav">
          <a href="#ecosistema">Ecosistema</a>
          <a href="#capacidades">Capacidades</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#crm">CRM</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a href="#ecosistema" className="header-btn">
          Explorar
        </a>
      </header>

      <section id="inicio" className="hero section">
        <div className="hero-content">
          <p className="eyebrow">ECOSISTEMA EMPRESARIAL</p>
          <h1>ELANKAV</h1>
          <h2>Diseño. Tecnología. Producción. Automatización.</h2>
          <p className="hero-text">
            Un ecosistema empresarial creado para conectar marcas, procesos,
            clientes y soluciones inteligentes desde una sola plataforma.
          </p>

          <div className="hero-actions">
            <a href="#ecosistema" className="btn primary">
              Explorar ecosistema
            </a>
            <a href="#contacto" className="btn secondary">
              Contactar
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orb">
            <div className="elan-symbol">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </section>

      <section id="ecosistema" className="section">
        <div className="section-heading">
          <p className="eyebrow">UNIDADES</p>
          <h2>Un ecosistema. Múltiples soluciones.</h2>
          <p>
            Cada unidad opera con identidad propia, conectada a una visión
            central de crecimiento, tecnología y operación empresarial.
          </p>
        </div>

        <div className="unit-grid">
          {unidades.map((unidad) => (
            <article className={`unit-card ${unidad.color}`} key={unidad.nombre}>
              <div className="mini-mark">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3>{unidad.nombre}</h3>
              <p>{unidad.descripcion}</p>
              <a href={unidad.enlace}>Ingresar</a>
            </article>
          ))}
        </div>
      </section>

      <section id="capacidades" className="section split">
        <div>
          <p className="eyebrow">CAPACIDADES</p>
          <h2>Capacidades que se conectan.</h2>
          <p>
            ELANKAV no funciona como negocios aislados. Funciona como una
            plataforma donde diseño, fabricación, tecnología, energía e IA
            trabajan bajo una misma dirección.
          </p>
        </div>

        <div className="cap-grid">
          {capacidades.map((item) => (
            <div className="cap-card" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="crm" className="section crm-section">
        <div className="section-heading">
          <p className="eyebrow">SISTEMA CENTRAL</p>
          <h2>CRM CENTRAL ELANKAV</h2>
          <p>
            La operación completa del grupo conectada en una sola cadena:
            clientes, ventas, producción, cobros y comisiones.
          </p>
        </div>

        <div className="crm-flow">
          {[
            'Empresa',
            'Contacto',
            'Lead',
            'Cotización',
            'Pedido',
            'Orden de Trabajo',
            'Producción',
            'Cobro',
            'Comisión',
          ].map((item, index) => (
            <div className="flow-item" key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="proyectos" className="section">
        <div className="section-heading">
          <p className="eyebrow">PROYECTOS</p>
          <h2>Proyectos que generan resultados.</h2>
        </div>

        <div className="project-grid">
          {proyectos.map((proyecto) => (
            <div className="project-card" key={proyecto}>
              <span>Proyecto destacado</span>
              <h3>{proyecto}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section vision">
        <p className="eyebrow">VISIÓN</p>
        <h2>Construyendo una plataforma empresarial para el futuro.</h2>
        <p>
          ELANKAV evoluciona hacia un ecosistema digital donde cada unidad opera
          conectada a sistemas centrales de CRM, ERP, inventario, producción,
          ventas, WhatsApp e inteligencia artificial.
        </p>
      </section>

      <section id="contacto" className="section contact">
        <h2>Hablemos de tu próximo proyecto.</h2>
        <p>Diseño, tecnología, producción y automatización bajo una sola visión.</p>
        <a className="btn primary" href="https://wa.me/50585228183">
          Contactar por WhatsApp
        </a>
      </section>

      <footer className="footer">
        <div className="brand footer-brand">
          <span className="brand-mark">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>ELANKAV</span>
        </div>

        <p>© ELANKAV. Ecosistema empresarial.</p>
      </footer>
    </main>
  )
}

export default App