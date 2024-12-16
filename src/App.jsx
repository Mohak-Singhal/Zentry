import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Features from './components/Features'

const App = () => {
  return (
    <main className='relative  min-h-screen w-screen overflow-x-hidden'>
  <Navbar/>
   <Home/>
   <About/>
   <Features/>
    </main>
  )
}

export default App