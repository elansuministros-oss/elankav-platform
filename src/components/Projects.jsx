export default function Projects() {
  const platforms = [
    {
      name: "ELANVISUAL",
      description: "Description for ELANVISUAL",
      domain: "visual.elan.com",
      href: "https://visual.elan.com",
      logoMono: "Placeholder for logoMono",
      logoColor: "Placeholder for logoColor"
    },
    {
      name: "ELANCENTER",
      description: "Description for ELANCENTER",
      domain: "center.elan.com",
      href: "https://center.elan.com",
      logoMono: "Placeholder for logoMono",
      logoColor: "Placeholder for logoColor"
    },
    {
      name: "ELANPET",
      description: "Description for ELANPET",
      domain: "pet.elan.com",
      href: "https://pet.elan.com",
      logoMono: "Placeholder for logoMono",
      logoColor: "Placeholder for logoColor"
    },
    {
      name: "ELAN AI",
      description: "Description for ELAN AI",
      domain: "ai.elan.com",
      href: "https://ai.elan.com",
      logoMono: "Placeholder for logoMono",
      logoColor: "Placeholder for logoColor"
    },
    {
      name: "ELANHOME",
      description: "Description for ELANHOME",
      domain: "home.elan.com",
      href: "https://home.elan.com",
      logoMono: "Placeholder for logoMono",
      logoColor: "Placeholder for logoColor"
    }
  ];

  return (
    <section className="projects">

      <div className="section-title">
        <span>NUESTRAS HISTORIAS</span>

        <h2>
          Proyectos que cuentan
          lo que hacemos.
        </h2>
      </div>

      <div className="projects-grid">
        {platforms.map((platform, index) => (
          <a key={index} href={platform.href} target="_blank" rel="noreferrer" className="platform-card">
            <div className="platform-logo">
              <div className="platform-logo-mono">{platform.logoMono}</div>
              <div className="platform-logo-color">{platform.logoColor}</div>
            </div>
            <h3>{platform.name}</h3>
            <p>{platform.description}</p>
            <span className="platform-domain">{platform.domain}</span>
          </a>
        ))}
      </div>

    </section>
  );
}
