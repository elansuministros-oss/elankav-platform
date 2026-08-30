import "./App.css"

import Header from "./components/Header"
import Hero from "./components/Hero"
import Essence from "./components/Essence"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import ElanGoStatus from "./components/ElanGoStatus"
import PublicReceipt from "./components/PublicReceipt"
import SellerReferralLanding from "./components/SellerReferralLanding"

function receiptNumberFromPath(pathname = '') {
  const value = String(pathname || '').replace(/^\/+|\/+$/g, '').toUpperCase()
  return /^ELK-REC-\d{4}-\d{6}$/.test(value) ? value : ''
}

function sellerCodeFromPath(pathname = '') {
  const match = String(pathname || '').match(/^\/r\/([A-Za-z0-9-]+)\/?$/)
  return match?.[1] ? match[1].toUpperCase() : ''
}

export default function App() {
  const receiptNumber = receiptNumberFromPath(window.location.pathname)
  const sellerCode = sellerCodeFromPath(window.location.pathname)

  if (receiptNumber) {
    return <PublicReceipt receiptNumber={receiptNumber} />
  }

  if (sellerCode) {
    return <SellerReferralLanding sellerCode={sellerCode} />
  }

  return (
    <>
      <Header />
      <Hero />
      <Essence />
      <Projects />
      <ElanGoStatus />
      <Footer />
    </>
  )
}
