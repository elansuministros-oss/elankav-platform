import "./App.css"

import Header from "./components/Header"
import Hero from "./components/Hero"
import Essence from "./components/Essence"
import Projects from "./components/Projects"
import Units from "./components/Units"
import Footer from "./components/Footer"
import AdminApp from "./admin/AdminApp"

function isAdminRoute() {
  const pathname = window.location.pathname.replace(/\/$/, "")
  return pathname === "/admin"
}

export default function App() {
  if (isAdminRoute()) return <AdminApp />

  return (
    <>
      <Header />
      <Hero />
      <Essence />
      <Projects />
      <Units />
      <Footer />
    </>
  )
}
