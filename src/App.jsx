import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      {/* Навігація */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold tracking-tighter">VN.dev</h2>
        <div className="space-x-6 text-slate-400">
          <a href="#projects" className="hover:text-cyan-400 transition">Проекти</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Навички</a>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-4 py-2 rounded-lg font-bold transition">
            Резюме PDF
          </button>
        </div>
      </nav>

      {/* Головний блок */}
      <header className="flex flex-col items-center justify-center pt-20 px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-black mb-6 bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          Frontend Developer
        </h1>
        <p className="max-w-2xl text-slate-400 text-lg md:text-xl mb-10">
          Привіт! Я Віктор. Створюю сучасні веб-інтерфейси, використовуючи React, 
          Tailwind CSS та передові інструменти розробки. 
        </p>
        
        <div className="flex gap-4">
          <a href="https://github.com/твій-нік" target="_blank" className="border border-slate-700 px-6 py-3 rounded-xl hover:bg-slate-800 transition flex items-center gap-2">
            GitHub
          </a>
          <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-slate-200 transition">
            Зв'язатися
          </button>
        </div>
      </header>

      {/* Блок навичок (приклад) */}
      <section id="skills" className="max-w-6xl mx-auto py-32 px-4">
        <h3 className="text-3xl font-bold mb-12 text-center">Технології</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['React', 'Vite', 'Tailwind CSS', 'Git', 'NixOS', 'SCSS'].map((skill) => (
            <div key={skill} className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl text-center hover:border-cyan-500 transition">
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;