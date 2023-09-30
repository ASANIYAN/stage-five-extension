import { useState } from 'react'
import './App.css'
import ComponentBeforeFooter from './components/component-before-footer/component-before-footer'
import Footer from './components/footer/footer'
import Hero from './components/hero/hero'
import Navbar from './components/navbar/navbar'
import Modal from './components/modal/modal'

function App() {
  const [modal, setModal] = useState(true);

  const handleModalOpen = () => {
    setModal(true);
  }

  const handleModalClose = () => {
    setModal(false);
  }

  return (
    <>
        <section className={`${modal ? "w-full" : "w-0"} bg-color21 h-full top-0 left-0 z-30 transition-all fixed overflow-hidden`} />
        <Modal />
        <header>
          <Navbar />
        </header>
        <main>
          <Hero />
          <ComponentBeforeFooter />
        </main>
        <Footer />
    </>
  )
}

export default App
