import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header.jsx";
import Sidenav from './components/Sidenav.jsx';
import Footer from './components/Footer.jsx';
import Card from './components/Card.jsx';
import Toggle from './components/Toggle.jsx';
import Home from './pages/Home.jsx';

function App() {

  return (
    <div className="layout">
      <Header />
      <Sidenav />
      <main className='main'>
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
