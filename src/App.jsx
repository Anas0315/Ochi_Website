import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/Landing Page/LandingPage'
import Marquee from './components/Marquee/Marquee'
import About from './components/About/About'
import Eyes from './components/Eyes/Eyes'
import Featured from './components/Featured/Featured'
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
  <>
  <div  className='w-full h-screen bg-[#F1F1F1]'  >
  <Navbar/>
  <LandingPage/>
  <Marquee/>
  <About/>
  <Eyes/>
  <Featured/>
  <Card/>
  <Footer/>
  </div>
  </>
  )
}

export default App