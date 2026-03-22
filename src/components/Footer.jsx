export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12 px-4 text-center">
      <p className="text-slate-500 mb-4">© 2026 Viktor Nosenko. Зроблено з любов'ю на MacBook Pro 2012.</p>
      <div className="flex justify-center gap-6">
        <a href="https://github.com/viktorndevelop" className="text-slate-400 hover:text-white">GitHub</a>
        <a href="mailto:твій-email@example.com" className="text-slate-400 hover:text-white">Email</a>
        <a href="#" className="text-slate-400 hover:text-white">Telegram</a>
      </div>
    </footer>
  );
}