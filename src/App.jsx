const unidades = [
  {
    nombre: 'ELANPET',
    etiqueta: 'Mascotas',
    descripcion: 'Bienestar animal, muebles, accesorios y soluciones funcionales para mascotas.',
    enlace: 'https://pet.elankav.com',
  },
  {
    nombre: 'ELANVISUAL',
    etiqueta: 'Producción visual',
    descripcion: 'Rotulación, impresión digital, UV, DTF UV, CNC, láser, acrílicos, PVC y fachadas.',
    enlace: 'https://visual.elankav.com',
  },
  {
    nombre: 'ELANCENTER',
    etiqueta: 'Tecnología',
    descripcion: 'Centro digital, formación, soporte, servicios tecnológicos y operación comercial.',
    enlace: 'https://center.elankav.com',
  },
  {
    nombre: 'ELANSOLAR',
    etiqueta: 'Energía',
    descripcion: 'Soluciones solares, eficiencia energética, sistemas eléctricos y proyectos técnicos.',
    enlace: 'https://solar.elankav.com',
  },
  {
    nombre: 'ELANAI',
    etiqueta: 'Automatización',
    descripcion: 'CRM, asistentes inteligentes, leads, WhatsApp, análisis y automatización empresarial.',
    enlace: 'https://ai.elankav.com',
  },
]

const capacidades = [
  {
    titulo: 'Diseño',
    texto: 'Identidad visual, branding, comunicación, interfaces y dirección gráfica para cada unidad.',
  },
  {
    titulo: 'Producción',
    texto: 'Fabricación física, rotulación, impresión, acrílicos, PVC, displays y estructuras comerciales.',
  },
  {
    titulo: 'Tecnología',
    texto: 'Plataformas web, centros digitales, soporte, administración y sistemas conectados.',
  },
  {
    titulo: 'Automatización',
    texto: 'Flujos comerciales, CRM, leads, seguimiento, órdenes de trabajo y control operativo.',
  },
  {
    titulo: 'Energía',
    texto: 'Soluciones solares, eficiencia eléctrica, proyectos energéticos y soporte técnico.',
  },
  {
    titulo: 'Inteligencia Artificial',
    texto: 'Asistentes, análisis, respuestas automatizadas, clasificación de clientes y sistemas inteligentes.',
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

const proyectos = [
  {
    nombre: 'COMEX',
    tipo: 'Arquitectura comercial',
    descripcion: 'Producción visual, fachada, rotulación, instalación y gestión técnica de proyecto.',
  },
  {
    nombre: 'ORIFLAME',
    tipo: 'Comunicación visual',
    descripcion: 'Impresión, rotulación, ambientación interior y soporte visual para operación comercial.',
  },
  {
    nombre: 'ELANPET',
    tipo: 'Plataforma digital',
    descripcion: 'Catálogo, pedidos, veterinarias afiliadas, comisiones y operación con subdominio propio.',
  },
]

function App() {
  return (
    <div className="elankav-page">
      <header className="elankav-header">
        <div className="elankav-nav">
          <a className="brand-lockup" href="#inicio" aria-label="Ir al inicio">
            <div className="brand-mark">E</div>
            <div className="brand-text">
              <strong>ELANKAV</strong>
              <span>Matriz Corporativa</span>
            </div>
          </a>

          <nav className="nav-links" aria-label="Navegación principal">
            <a href="#ecosistema">Ecosistema</a>
            <a href="#capacidades">Capacidades</a>
            <a href="#crm">CRM Central</a>
            <a href="#proyectos">Proyectos</a>
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
            <p>
              Matriz corporativa para conectar diseño, producción, tecnología,
              energía, inteligencia artificial y operación comercial bajo una sola
              plataforma empresarial.
            </p>
            <div className="hero-actions">
              <a className="btn-primary" href="#ecosistema">
                Ver ecosistema
              </a>
              <a className="btn-secondary" href="#crm">
                Ver CRM Central
              </a>
            </div>
          </div>

          <div className="hero-panel" aria-label="Mapa visual del ecosistema ELANKAV">
            <div className="orbit"></div>
            <div className="core-card">
              <strong>ELANKAV</strong>
              <span>Centro operativo</span>
            </div>
            <div className="unit-chip chip-1">ELANPET</div>
            <div className="unit-chip chip-2">ELANVISUAL</div>
            <div className="unit-chip chip-3">ELANCENTER</div>
            <div className="unit-chip chip-4">ELANSOLAR</div>
            <div className="unit-chip chip-5">ELANAI</div>
          </div>
        </section>

        <section id="ecosistema" className="section">
          <div className="section-header">
            <span className="eyebrow">Unidades oficiales</span>
            <h2>Un ecosistema. Múltiples líneas de negocio.</h2>
            <p>
              Cada unidad puede operar con identidad propia, pero todas deben
              conectarse a la misma base corporativa, comercial y operativa.
            </p>
          </div>

          <div className="grid grid-3">
            {unidades.map((unidad) => (
              <article className="card ecosystem-card" key={unidad.nombre}>
                <div>
                  <div className="icon-box">{unidad.nombre.replace('ELAN', '') || 'E'}</div>
                  <small>{unidad.etiqueta}</small>
                  <h3>{unidad.nombre}</h3>
                  <p>{unidad.descripcion}</p>
                </div>
                <a className="contact-link" href={unidad.enlace} target="_blank" rel="noreferrer">
                  Abrir unidad
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="capacidades" className="section">
          <div className="section-header">
            <span className="eyebrow">Capacidades</span>
            <h2>La operación se diseña como sistema.</h2>
            <p>
              ELANKAV no funciona como negocios aislados. Funciona como una red
              de capacidades conectadas por procesos, datos y producción real.
            </p>
          </div>

          <div className="grid grid-3">
            {capacidades.map((capacidad, index) => (
              <article className="card" key={capacidad.titulo}>
                <div className="icon-box">{String(index + 1).padStart(2, '0')}</div>
                <h3>{capacidad.titulo}</h3>
                <p>{capacidad.texto}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="crm" className="section">
          <div className="crm-box">
            <div>
              <span className="eyebrow">Sistema central</span>
              <h2>CRM CENTRAL ELANKAV</h2>
              <p>
                La cadena operativa validada conecta empresas, contactos, leads,
                cotizaciones, pedidos, producción, cobros y comisiones. Este será
                el núcleo administrativo para las unidades del grupo.
              </p>
            </div>

            <div className="flow-list">
              {flujoCRM.map((item, index) => (
                <div className="flow-item" key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="proyectos" className="section">
          <div className="section-header">
            <span className="eyebrow">Proyectos</span>
            <h2>Producción, plataforma y ejecución conectadas.</h2>
            <p>
              La matriz corporativa debe mostrar capacidad real: proyectos físicos,
              plataformas digitales y operación empresarial escalable.
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

        <section id="vision" className="section">
          <div className="section-header">
            <span className="eyebrow">Visión</span>
            <h2>Una plataforma preparada para crecer sin improvisar.</h2>
            <p>
              ELANKAV se proyecta como una estructura modular con CRM, ERP,
              inventario, catálogo, cotizador, producción, WhatsApp, leads,
              administración, inteligencia artificial y futuras integraciones 3D.
            </p>
          </div>

          <div className="grid grid-2">
            <article className="card">
              <h3>Escalabilidad</h3>
              <p>
                Preparada para nuevas unidades, nuevos productos, subdominios,
                permisos, roles, proveedores, materiales y procesos internos.
              </p>
            </article>
            <article className="card">
              <h3>Administración visual</h3>
              <p>
                La meta es administrar contenido, productos, clientes, órdenes y
                datos desde interfaz, sin modificar código manualmente.
              </p>
            </article>
          </div>
        </section>

        <section id="contacto" className="section">
          <div className="contact-box">
            <div>
              <span className="eyebrow">Contacto</span>
              <h2>Hablemos de tu próximo proyecto.</h2>
              <p>
                Diseño, producción, tecnología y automatización integrados para
                convertir ideas en sistemas operativos y proyectos reales.
              </p>
            </div>

            <div className="contact-actions">
              <a className="contact-link" href="https://wa.me/50585228183" target="_blank" rel="noreferrer">
                WhatsApp principal
              </a>
              <a className="contact-link" href="https://pet.elankav.com" target="_blank" rel="noreferrer">
                Abrir ELANPET
              </a>
              <a className="contact-link" href="https://elankav.com">
                elankav.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <span>© ELANKAV. Matriz corporativa.</span>
          <span>Diseño · Producción · Tecnología · Energía · IA</span>
        </div>
      </footer>
    </div>
  )
}

export default App
