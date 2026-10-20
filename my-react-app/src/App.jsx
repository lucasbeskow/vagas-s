import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import News from './components/News'
import Depoimentos from './components/Depoimentos'
import Vagas from './components/Vagas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    <Header></Header>
    <Hero></Hero>

    <main className="conteudo">
      <Vagas></Vagas>
    </main>

    <News></News>
    <Depoimentos></Depoimentos>
    <Footer></Footer>
    
    </>
  )
}

export default App
