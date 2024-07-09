import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/icon.svg';
import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { ThemeContext } from './Context/ThemeContext';

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setTheme(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme} ${theme === 'dark' ? 'bg-[#121212]' : null} min-h-[100vh] flex flex-col`}>
        <Header />
        <div className="flex-grow">
          <Home />
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
