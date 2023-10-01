/* eslint-disable react/prop-types */
import { useState } from "react";
import ComponentBeforeFooter from "../components/component-before-footer/component-before-footer";
import Footer from "../components/footer/footer";
import Hero from "../components/hero/hero";
import Modal from "../components/modal/modal";
import Navbar from "../components/navbar/navbar";

const Record = () => {
    const [modal, setModal] = useState(false);
  
    const handleModalOpen = () => {
      setModal(true);
    }
  
    const handleModalClose = () => {
      setModal(false);
    }
  
    return (     
    <>
        <section className={`${modal ? "w-full" : "w-0"} bg-color21 h-full top-0 left-0 z-30 transition-all fixed overflow-hidden`} />
        <Modal modal={modal} handleModalClose={handleModalClose} />
        <header>
          <Navbar />
        </header>
        <main>
          <Hero handleModalOpen={handleModalOpen} />
          <ComponentBeforeFooter />
        </main>
        <Footer />
    </>
    );
}
 
export default Record;