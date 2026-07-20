import { ecosystemPlatforms } from "../data/ecosystemPlatforms"

export default function Units() {
  return (
    <section className="units">
      <span>NUESTRAS UNIDADES</span>

      <h2>
        Una visión.
        <br />
        Múltiples soluciones.
      </h2>

      <div className="units-list">
        {ecosystemPlatforms.map((platform) => {
          const label = (
            <>
              <strong>{platform.name}</strong>
              <span>{platform.domain || "ELANKAV"}</span>
            </>
          )

          return platform.href ? (
            <a
              key={platform.id}
              href={platform.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visitar ${platform.name}`}
            >
              {label}
            </a>
          ) : (
            <div key={platform.id}>{label}</div>
          )
        })}
      </div>
    </section>
  )
}
