import React from 'react';
//import from 'lucide-react';

import Navbar from './components/Navbar';
import About from './components/About'; 
import Content from './components/Content';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-bg-main text-white font-sans">
      <Navbar />
      
      <main>
        <Content />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;