export default function Header() {
  return (
    <header className="header">
      <button className="menu-btn">
        ☰ MENÚ
      </button>

      <div className="logo">
        ELANKAV.
      </div>

      <div className="header-actions">
        <a
          href="https://go.elankav.com"
          target="_blank"
          rel="noreferrer"
          className="header-go-link"
        >
          ELAN GO ↗
        </a>

        <a href="#historia" className="header-link">
          CONOCE ELANKAV →
        </a>
      </div>
    </header>
  )
}
