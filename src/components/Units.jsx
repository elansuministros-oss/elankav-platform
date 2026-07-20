import { useEffect, useState } from "react"
import { platformDirectoryService } from "../services/platformDirectoryService"
import "./Units.css"

export default function Units() {
  const [units, setUnits] = useState([])

  useEffect(() => {
    let active = true

    platformDirectoryService.getPublicPlatforms().then((platforms) => {
      if (active) setUnits(platforms)
    })

    return () => {
      active = false
    }
  }, [])

  return (
    <section className="units" id="unidades">
      <span>NUESTRAS UNIDADES</span>

      <h2>
        Una visión.
        <br />
        Múltiples soluciones.
      </h2>

      <div className="units-list">
        {units.map((unit) => (
          <article className="unit-entry" key={unit.id || unit.slug}>
            <div className="unit-identity">
              <div className="unit-logo-frame">
                {unit.logoUrl ? (
                  <img src={unit.logoUrl} alt={`Logo ${unit.name}`} loading="lazy" />
                ) : (
                  <strong>{unit.name}</strong>
                )}
              </div>

              <div className="unit-copy">
                <h3>{unit.name}</h3>
                <p>{unit.description}</p>
              </div>
            </div>

            {unit.routeUrl && (
              <a href={unit.routeUrl} aria-label={`Explorar ${unit.name}`}>
                Explorar plataforma →
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
