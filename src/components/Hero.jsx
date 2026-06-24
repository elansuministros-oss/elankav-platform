import heroImage from "../assets/hero-erick.png"

export default function Hero() {
  return (
    <section className="hero">
      <img
        src={heroImage}
        alt="ELANKAV"
        className="hero-image"
      />

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          Construimos
          <br />
          ideas que terminan
          <br />
          convirtiéndose en
          <br />
          algo real.
        </h1>

        <a href="#historia">
          CONOCE ELANKAV →
        </a>
      </div>
    </section>
  )
}