import React from 'react';
import Navbar from './components/Navbar';
import About from './components/Abouts'; // 
import Content from './components/Content'; //
import Skills from './components/Skills';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-bg-main text-white font-sans">
      <Navbar />
      
      <main>
        <Content />
        <About />
        <Skills />
        <Projects /> {/* Додай сюди */}
      </main>

      <Footer />
    </div>
  );
}

export default App;