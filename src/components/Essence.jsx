import bosqueImage from "../assets/erick-bosque.png"

export default function Essence() {
  return (
    <section className="essence" id="historia">

      <div className="essence-image">
        <img src={bosqueImage} alt="Historia ELANKAV" />
      </div>

      <div className="essence-content">

        <span>NUESTRA HISTORIA</span>

        <h2>
          Toda visión
          comienza con
          un paso.
        </h2>

        <p>
          ELANKAV nació construyendo proyectos reales,
          aprendiendo en el camino y transformando ideas
          en resultados.
        </p>

      </div>

    </section>
  )
}