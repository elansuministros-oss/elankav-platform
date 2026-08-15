import "./App.css"

import Header from "./components/Header"
import Hero from "./components/Hero"
import Essence from "./components/Essence"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import PublicReceipt from "./components/PublicReceipt"

function receiptNumberFromPath(pathname = '') {
  const value = String(pathname || '').replace(/^\/+|\/+$/g, '').toUpperCase()
  return /^ELK-REC-\d{4}-\d{6}$/.test(value) ? value : ''
}

export default function App() {
  const receiptNumber = receiptNumberFromPath(window.location.pathname)

  if (receiptNumber) {
    return <PublicReceipt receiptNumber={receiptNumber} />
  }

  return (
    <>
      <Header />
      <Hero />
      <Essence />
      <Projects />
      <Footer />
    </>
  )
}
