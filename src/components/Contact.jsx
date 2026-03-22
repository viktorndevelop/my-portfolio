import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto py-32 px-4 text-center">
      <h2 className="text-4xl font-black mb-6 text-white">Давайте працювати разом!</h2>
      <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
        Зараз я відкритий до нових можливостей. Пишіть мені, якщо у вас є запитання.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Email */}
        <a 
          href="mailto:nosenko.v.1994@gmail.com" 
          className="group p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-cyan-400 transition-all"
        >
        
          <h3 className="font-bold mb-1 text-white">Email</h3>
          <p className="text-sm text-slate-400">Напишіть листа</p>
        </a>

        {/* Telegram */}
        <a 
          href="https://t.me/Vitya_Nosenko" 
          target="_blank" 
          rel="noreferrer"
          className="group p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-cyan-400 transition-all"
        >
          <div className="text-3xl mb-4">✈️</div>
          <h3 className="font-bold mb-1 text-white">Telegram</h3>
          <p className="text-sm text-slate-400">Швидка відповідь</p>
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/viktorndevelop" 
          target="_blank" 
          rel="noreferrer"
          className="group p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-cyan-400 transition-all"
        >
          <div className="text-3xl mb-4">💻</div>
          <h3 className="font-bold mb-1 text-white">GitHub</h3>
          <p className="text-sm text-slate-400">Код проєктів</p>
        </a>
      </div>
    </section>
  );
}