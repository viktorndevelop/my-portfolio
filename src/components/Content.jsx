export default function Content() {
  return (
    <header className="flex flex-col items-center justify-center pt-32 px-4 text-center">
      {/* Заголовок */}
      <h2 className="opacity-70 animate-fade-up text-6xl md:text-8xl font-black mb-6 bg-linear-to-r from-brand-primary via-brand-accent to-brand-secondary bg-clip-text text-transparent bg-size-[200%_auto] animate-[shimmer_4s_linear_infinite]">
        Frontend Developer
      </h2>

      {/* Текст із затримкою */}
      <p className="opacity-0 animate-fade-up delay-200 max-w-2xl text-slate-400 text-lg md:text-xl mb-10">
        Привіт! Я Віктор. Створюю сучасні веб-інтерфейси на React та Tailwind.
      </p>
      
      {/* Кнопки із ще більшою затримкою */}
      <div className="opacity-0 animate-fade-up delay-400 flex gap-4">
        <a href="https://github.com/viktorndevelop" className="border border-slate-700 px-6 py-3 rounded-xl hover:bg-slate-800 transition">
          GitHub
        </a>
        <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
          Зв'язатися
        </button>
      </div>
    </header>
  );
}