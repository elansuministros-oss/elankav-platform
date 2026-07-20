const units = [
  {
    name: "ELANVISUAL",
    href: "https://visual.elankav.com/",
    label: "Abrir ELANVISUAL",
  },
  { name: "ELANCENTER" },
  {
    name: "ELANPET",
    href: "https://pet.elankav.com/",
    label: "Abrir ELANPET",
  },
  { name: "ELANHOME" },
  { name: "KAVTORÉ" },
]

export default function Units() {
  return (
    <section className="units" id="unidades">
      <span>NUESTRAS UNIDADES</span>

      <h2>
        Una visión.
        <br />
        Múltiples soluciones.
      </h2>

      <div className="units-list">
        {units.map((unit) =>
          unit.href ? (
            <a key={unit.name} href={unit.href} aria-label={unit.label}>
              <div>{unit.name}</div>
            </a>
          ) : (
            <div key={unit.name}>{unit.name}</div>
          ),
        )}
      </div>
    </section>
  )
}
