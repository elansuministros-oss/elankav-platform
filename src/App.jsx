const unidades = [
  {
    nombre: 'ELANPET',
    etiqueta: 'Mascotas',
    color: 'teal',
    dominio: 'pet.elankav.com',
    estado: 'Operativo',
    descripcion:
      'Mascotas, muebles funcionales, accesorios, veterinarias afiliadas, QR por veterinaria y comisiones.',
    enlace: 'https://pet.elankav.com',
  },
  {
    nombre: 'ELANVISUAL',
    etiqueta: 'Producción visual',
    color: 'blue',
    dominio: 'visual.elankav.com',
    estado: 'Prioridad alta',
    descripcion:
      'Rotulación, impresión digital, fachadas, acrílicos, PVC, CNC, láser, displays, branding y señalización.',
    enlace: 'https://visual.elankav.com',
  },
  {
    nombre: 'ELANCENTER',
    etiqueta: 'Centro tecnológico',
    color: 'purple',
    dominio: 'center.elankav.com',
    estado: 'Planificado',
    descripcion:
      'Tecnología, centro de cómputo, formación, servicios digitales, diseño, soporte y capacitación.',
    enlace: 'https://center.elankav.com',
  },
  {
    nombre: 'ELANSOLAR',
    etiqueta: 'Energía solar',
    color: 'orange',
    dominio: 'solar.elankav.com',
    estado: 'Planificado',
    descripcion:
      'Sistemas fotovoltaicos, eficiencia energética, ingeniería, instalaciones y soluciones eléctricas.',
    enlace: 'https://solar.elankav.com',
  },
  {
    nombre: 'ELANAI',
    etiqueta: 'IA y automatización',
    color: 'green',
    dominio: 'ai.elankav.com',
    estado: 'Planificado',
    descripcion:
      'Inteligencia artificial, automatización, asistentes, CRM, ERP, procesos inteligentes y análisis.',
    enlace: 'https://ai.elankav.com',
  },
]

const capacidades = [
  {
    titulo: 'Producción visual',
    texto: 'Rotulación, impresión, fachadas, acrílicos, PVC, CNC, láser, displays y comunicación visual.',
  },
  {
    titulo: 'Tecnología operativa',
    texto: 'Plataformas web, centros digitales, paneles administrativos y sistemas conectados por unidad.',
  },
  {
    titulo: 'Automatización comercial',
    texto: 'Leads, WhatsApp, seguimiento, cotizaciones, pedidos, producción, cobros y comisiones.',
  },
  {
    titulo: 'Energía y eficiencia',
    texto: 'Soluciones solares, sistemas eléctricos, proyectos técnicos y eficiencia energética empresarial.',
  },
  {
    titulo: 'CRM y ERP',
    texto: 'Base maestra para clientes, materiales, inventario, compras, finanzas y control operativo.',
  },
  {
    titulo: 'Inteligencia Artificial',
    texto: 'Asistentes, clasificación de mensajes, respuestas, análisis de datos y procesos inteligentes.',
  },
]

const flujoCRM = [
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

const sistemas = [
  { nombre: 'CRM Central', dominio: 'crm.elankav.com', estado: 'Creado' },
  { nombre: 'ERP Central', dominio: 'erp.elankav.com', estado: 'Futuro' },
  { nombre: 'WhatsApp Center', dominio: 'whatsapp.elankav.com', estado: 'Prioridad 4' },
  { nombre: 'Leads Center', dominio: 'leads.elankav.com', estado: 'Futuro' },
  { nombre: 'Admin Central', dominio: 'admin.elankav.com', estado: 'Futuro' },
  { nombre: 'ELAN AI', dominio: 'ai.elankav.com', estado: 'Futuro' },
]

const proyectos = [
  {
    nombre: 'ELANPET',
    tipo: 'Plataforma operativa',
    descripcion: 'Pedidos, catálogo, veterinarias afiliadas, comisiones y subdominio propio en producción.',
  },
  {
    nombre: 'CRM CENTRAL',
    tipo: 'Sistema empresarial',
    descripcion: 'Cadena comercial y operativa para empresas, contactos, leads, cotizaciones y producción.',
  },
  {
    nombre: 'ELANVISUAL',
    tipo: 'Unidad prioritaria',
    descripcion: 'Siguiente unidad oficial para rotulación, impresión, fachadas, branding y producción visual.',
  },
]

function App() {
  return (
    <div className="elankav-page">
      <header className="elankav-header">
        <div className="elankav-nav">
          <a className="brand-lockup" href="#inicio" aria-label="Ir al inicio">
            <div className="brand-symbol" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="brand-text">
              <strong>ELANKAV</strong>
              <span>One Vision · Multiple Solutions</span>
            </div>
          </a>

          <nav className="nav-links" aria-label="Navegación principal">
            <a href="#ecosistema">Ecosistema</a>
            <a href="#capacidades">Capacidades</a>
            <a href="#crm">CRM Central</a>
            <a href="#sistemas">Sistemas</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <a className="nav-cta" href="#contacto">
            Iniciar proyecto
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Ecosistema empresarial</span>
            <h1>
              <span className="gradient-text">ELANKAV</span>
            </h1>
            <div className="hero-slogan">ONE VISION · MULTIPLE SOLUTIONS</div>
            <p>
              Plataforma empresarial que integra diseño, producción, tecnología,
              energía e inteligencia artificial bajo una sola visión operativa.
            </p>

            <div className="hero-actions">
              <a className="btn-primary" href="#ecosistema">
                Explorar ecosistema
              </a>
              <a className="btn-secondary" href="#crm">
                Ver CRM Central
              </a>
            </div>

            <div className="hero-metrics" aria-label="Indicadores principales ELANKAV">
              <div>
                <strong>5</strong>
                <span>Unidades</span>
              </div>
              <div>
                <strong>1</strong>
                <span>CRM Central</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Cloud</span>
              </div>
              <div>
                <strong>∞</strong>
                <span>Escalable</span>
              </div>
            </div>
          </div>

          <div className="hero-panel" aria-label="Mapa visual del ecosistema ELANKAV">
            <div className="orbit orbit-main"></div>
            <div className="orbit orbit-inner"></div>
            <div className="core-card">
              <div className="core-bars" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <strong>ELANKAV</strong>
              <span>Centro operativo</span>
            </div>
            <div className="unit-chip chip-1 unit-teal">ELANPET</div>
            <div className="unit-chip chip-2 unit-blue">ELANVISUAL</div>
            <div className="unit-chip chip-3 unit-purple">ELANCENTER</div>
            <div className="unit-chip chip-4 unit-orange">ELANSOLAR</div>
            <div className="unit-chip chip-5 unit-green">ELANAI</div>
          </div>
        </section>

        <section id="ecosistema" className="section">
          <div className="section-header">
            <span className="eyebrow">Unidades oficiales</span>
            <h2>Una matriz. Cinco unidades. Un solo sistema.</h2>
            <p>
              Cada unidad opera con identidad propia, subdominio propio y enfoque
              comercial específico, pero todas se conectan a la arquitectura central
              de ELANKAV.
            </p>
          </div>

          <div className="unit-grid">
            {unidades.map((unidad) => (
              <article className={`unit-card accent-${unidad.color}`} key={unidad.nombre}>
                <div className="unit-topline">
                  <span>{unidad.etiqueta}</span>
                  <small>{unidad.estado}</small>
                </div>
                <div className="unit-logo-row">
                  <div className="mini-symbol" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <h3>{unidad.nombre}</h3>
                </div>
                <p>{unidad.descripcion}</p>
                <div className="unit-footer">
                  <span>{unidad.dominio}</span>
                  <a href={unidad.enlace} target="_blank" rel="noreferrer">
                    Abrir
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="capacidades" className="section">
          <div className="section-header">
            <span className="eyebrow">Capacidades</span>
            <h2>Tecnología, producción y operación conectadas.</h2>
            <p>
              ELANKAV no se construye como negocios aislados. Se construye como
              una red empresarial con procesos, datos, unidades y sistemas centrales.
            </p>
          </div>

          <div className="grid grid-3">
            {capacidades.map((capacidad, index) => (
              <article className="card capability-card" key={capacidad.titulo}>
                <div className="icon-box">{String(index + 1).padStart(2, '0')}</div>
                <h3>{capacidad.titulo}</h3>
                <p>{capacidad.texto}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="crm" className="section">
          <div className="crm-box">
            <div className="crm-copy">
              <span className="eyebrow">Sistema central</span>
              <h2>CRM CENTRAL ELANKAV</h2>
              <p>
                La cadena operativa conecta clientes, oportunidades, cotizaciones,
                pedidos, órdenes de trabajo, producción, cobros y comisiones. Es el
                núcleo comercial que luego alimentará ERP, WhatsApp Center y ELAN AI.
              </p>
              <a className="btn-secondary" href="https://crm.elankav.com" target="_blank" rel="noreferrer">
                Preparado para crm.elankav.com
              </a>
            </div>

            <div className="crm-flow" aria-label="Cadena oficial CRM Central ELANKAV">
              {flujoCRM.map((item, index) => (
                <div className="flow-pill" key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="sistemas" className="section digital-section">
          <div className="section-header">
            <span className="eyebrow">Ecosistema digital</span>
            <h2>Sistemas centrales preparados para crecer.</h2>
            <p>
              La matriz ELANKAV.COM no es el CRM ni el ERP. Es la puerta de entrada.
              Los sistemas centrales viven en subdominios preparados para escalar.
            </p>
          </div>

          <div className="system-grid">
            {sistemas.map((sistema) => (
              <article className="system-card" key={sistema.nombre}>
                <strong>{sistema.nombre}</strong>
                <span>{sistema.dominio}</span>
                <small>{sistema.estado}</small>
              </article>
            ))}
          </div>
        </section>

        <section id="proyectos" className="section">
          <div className="section-header">
            <span className="eyebrow">Proyectos</span>
            <h2>Construcción progresiva del ecosistema.</h2>
            <p>
              La prioridad actual es consolidar la matriz corporativa, conectar ELANPET
              al CRM Central y preparar ELANVISUAL como la siguiente unidad oficial.
            </p>
          </div>

          <div className="grid grid-3">
            {proyectos.map((proyecto) => (
              <article className="card project-card" key={proyecto.nombre}>
                <span className="project-tag">{proyecto.tipo}</span>
                <h3>{proyecto.nombre}</h3>
                <p>{proyecto.descripcion}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section vision-section">
          <div className="vision-box">
            <span className="eyebrow">Visión</span>
            <h2>Una visión. Múltiples soluciones.</h2>
            <p>
              Construir un ecosistema empresarial capaz de integrar operaciones,
              tecnología, producción e inteligencia artificial en una sola plataforma
              escalable, administrable y preparada para múltiples líneas de negocio.
            </p>
          </div>
        </section>

        <section id="contacto" className="section">
          <div className="contact-box">
            <div>
              <span className="eyebrow">Contacto</span>
              <h2>Conversemos sobre el siguiente proyecto.</h2>
              <p>
                ELANKAV.COM es la matriz corporativa. Desde aquí se conecta la visión,
                las unidades, los sistemas y los próximos proyectos del ecosistema.
              </p>
            </div>

            <div className="contact-actions">
              <a className="contact-link" href="mailto:elansuministros@gmail.com">
                elansuministros@gmail.com
              </a>
              <a className="contact-link" href="https://elankav.com" target="_blank" rel="noreferrer">
                elankav.com
              </a>
              <span className="contact-note">Managua, Nicaragua · Infraestructura Cloud</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <strong>ELANKAV</strong>
            <span>One Vision · Multiple Solutions</span>
          </div>
          <div className="footer-links">
            <a href="https://pet.elankav.com" target="_blank" rel="noreferrer">ELANPET</a>
            <a href="https://visual.elankav.com" target="_blank" rel="noreferrer">ELANVISUAL</a>
            <a href="https://center.elankav.com" target="_blank" rel="noreferrer">ELANCENTER</a>
            <a href="https://solar.elankav.com" target="_blank" rel="noreferrer">ELANSOLAR</a>
            <a href="https://ai.elankav.com" target="_blank" rel="noreferrer">ELANAI</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
