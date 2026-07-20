import { ecosystemPlatforms } from "../data/ecosystemPlatforms"
import "./Ecosystem.css"

export default function Projects() {
  const featuredPlatforms = ecosystemPlatforms.filter(
    (platform) => platform.id !== "kavtore",
  )

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

      <div className="projects-grid">
        {featuredPlatforms.map((platform, index) => {
          const content = (
            <>
              <div className="platform-card-topline">
                <span className="platform-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="platform-status">
                  {platform.status === "active" ? "UNIDAD ACTIVA" : "ECOSISTEMA"}
                </span>
              </div>

              <div className="platform-card-content">
                <h3>{platform.name}</h3>
                <p>{platform.description}</p>
                <span className="platform-domain">
                  {platform.domain || "ELANKAV.COM"}
                </span>
              </div>
            </>
          )

          if (!platform.href) {
            return (
              <article key={platform.id} className="platform-card platform-card-static">
                {content}
              </article>
            )
          }

          return (
            <a
              key={platform.id}
              href={platform.href}
              target="_blank"
              rel="noreferrer"
              className="platform-card platform-card-link"
              aria-label={`Visitar ${platform.name}`}
            >
              {content}
            </a>
          )
        })}
      </div>
    </section>
  )
}
