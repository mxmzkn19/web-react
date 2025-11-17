import { useState } from 'react';
import './App.css';
import Header from "./components/Header.jsx";
import Sidenav from './components/Sidenav.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

function App() {
  return (
    <ThemeProvider initial="light">
      <div className="layout">
        <Header />
        <Sidenav />
        <main className='main'>
          <Home />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App;
