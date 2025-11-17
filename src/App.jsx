import { useState } from 'react';
import './App.css';
import Header from "./components/Header.jsx";
import Sidenav from './components/Sidenav.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

function App() {
  const [page, setPage] = useState('home');  

  return (
    <ThemeProvider initial="light">
      <div className="layout">
        <Header onNavigate={setPage} /> 
        <Sidenav />
        <main className="main">
          {page === 'home' && <Home />}
          {page === 'about' && <About />}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
