import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-bg-main/70 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Логотип */}
        <div className="text-2xl font-black tracking-tighter bg-linear-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
          VN.developer
        </div>

        {/* Меню */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#about" className="hover:text-brand-primary transition-colors">Про мене</a>
          <a href="#projects" className="hover:text-brand-primary transition-colors">Проєкти</a>
          <a href="#skills" className="hover:text-brand-primary transition-colors">Навички</a>
          
          <button className="bg-white text-slate-900 px-5 py-2 rounded-full font-bold hover:bg-brand-primary hover:text-white transition-all active:scale-95">
            Контакти
          </button>
        </div>
      </div>
    </nav>
  );
}