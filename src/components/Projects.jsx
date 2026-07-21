import { ecosystemPlatforms } from "../data/ecosystemPlatforms"
import "./Ecosystem.css"

export default function Projects() {
  return (
    <section className="projects" id="ecosistema">
      <div className="section-title">
        <span>ECOSISTEMA ELANKAV</span>

        <h2>
          Unidades que convierten
          <br />
          ideas en soluciones.
        </h2>
      </div>

      <div className="projects-grid projects-grid-active">
        {ecosystemPlatforms.map((platform, index) => (
          <a
            key={platform.id}
            href={platform.href}
            target="_blank"
            rel="noreferrer"
            className="platform-card platform-card-link platform-card-live"
            aria-label={`Visitar ${platform.name}`}
          >
            <div className="platform-preview" aria-hidden="true">
              <iframe
                src={platform.previewUrl}
                title={`Vista previa de ${platform.name}`}
                loading="lazy"
                tabIndex="-1"
              />
            </div>

            <div className="platform-card-shade" aria-hidden="true" />

            <div className="platform-card-topline">
              <span className="platform-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="platform-status">UNIDAD ACTIVA</span>
            </div>

            <div className="platform-card-content">
              <h3>{platform.name}</h3>
              <p>{platform.description}</p>
              <span className="platform-domain">
                {platform.domain}
                <span className="platform-arrow" aria-hidden="true">↗</span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
