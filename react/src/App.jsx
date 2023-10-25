import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/parts-website/Header'
import { Banner } from './components/parts-website/Banner'
import { Line } from './components/parts-website/Line'
import { Recent } from './components/parts-website/Recent'
import { About } from './components/parts-website/About'
import { Products } from './components/parts-website/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Banner/> 
     <Line/> 
     <About/> 
     <Recent/>
     <Line/> 
     <Products/> 
    </>
  )
}

export default App
