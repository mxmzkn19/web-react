import { useState } from 'react';
import './App.css';
import ContactFormBasic from './sections/ContactFormBasic.jsx';
import Header from "./components/Header.jsx";
import Sidenav from './components/Sidenav.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contacts from './pages/Contacts.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

function App() {
  const [page, setPage] = useState('home');  

  return (
    <ThemeProvider initial="light">
      <div className="layout">
        <Header onNavigate={setPage} /> 
        <Sidenav onNavigate={setPage} />
        <main className="main">
          {page === 'home' && <Home />}
          {page === 'about' && <About />}
          {page === 'contacts' && <Contacts />}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
