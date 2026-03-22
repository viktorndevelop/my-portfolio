import React from 'react';

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto py-24 px-4">
      <div className="bg-bg-card border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        {/* Декоративний елемент на фоні */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl"></div>
        
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <span className="text-brand-primary">01.</span> Про мене
        </h2>

        <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
          <p>
            Привіт! Мене звати <span className="text-white font-semibold">Віктор</span>. 
            Мій шлях у розробку почався з цікавості до того, як працюють складні системи. 
            Зараз я фокусуюся на створенні швидких та естетичних інтерфейсів за допомогою 
            <span className="text-brand-primary"> React</span> та <span className="text-brand-primary">Tailwind CSS</span>.
          </p>

          <p>
            Я прихильник системного підходу: використовую <span className="text-white font-medium italic">NixOS </span>  
            з тайлінговим віконним менеджером <span className="text-white">Hyprland</span>. 
            Це навчило мене цінувати чистоту конфігурацій та ефективність інструментів.
          </p>

          <p>
            Навіть працюючи на класичному <span className="text-white">MacBook Pro</span>, 
            я витискаю максимум продуктивності з коду, оптимізуючи кожен компонент. 
            Вірю, що гарний код — це не лише той, що працює, а той, який легко підтримувати.
          </p>
        </div>

        {/* Короткі факти */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-slate-800 pt-8">
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Локація</p>
            <p className="text-sm font-medium">Україна</p>
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Освіта</p>
            <p className="text-sm font-medium">Самоосвіта / Front-End</p>
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Інтереси</p>
            <p className="text-sm font-medium">MacOS, Linux, UI/UX</p>
          </div>
        </div>
      </div>
    </section>
  );
}