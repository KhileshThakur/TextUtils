import Navbar from './components/Navbar';
import Formtext from './components/Formtext';
import About from './components/About';
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1f252a";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "#ffe";
    }
  }
  return (
    <BrowserRouter>
      <>
        <Navbar mode={mode} toggleMode={toggleMode} />

        <Routes>
          <Route exact path='/about' element={<About mode={mode} toggleMode={toggleMode} />} />
          <Route exact path='/' element={<Formtext mode={mode} />} />
        </Routes>

      </>
    </BrowserRouter>
  );
}

export default App;
