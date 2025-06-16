
import './App.css'
import Accessible from './components/Accessible'
import BuyBitcoin from './components/BuyBitcoin'
import Card from './components/Card'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Hero from './components/Hero'
import MobileTrade from './components/MobileTrade'
import Navbar from './components/Navbar'
import PaymentMethods from './components/PaymentMethods'
import TrackPortfolio from './components/TrackPortfolio'
import Visa from './components/Visa'

function App() {
 

  return (
    <>
    <Navbar/>
    <Hero/>
    <Visa/>
    <BuyBitcoin/>
    <PaymentMethods/>
    <Card/>
    <TrackPortfolio/>
    <Accessible/>
    <Feature/>
    <MobileTrade/>
    <Footer/>
    </>
  )
}

export default App
