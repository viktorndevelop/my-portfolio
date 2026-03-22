export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-900 bg-bg-main py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-500 text-sm">
          © {currentYear} VN.dev — Зроблено на MacBook Pro 2012
        </div>
        
        <div className="flex gap-8 text-sm font-medium text-slate-400">
          <a href="mailto:viktornosenko@example.com" className="hover:text-white transition">Email</a>
          <a href="https://t.me/your_username" className="hover:text-white transition">Telegram</a>
          <a href="https://github.com/viktorndevelop" className="hover:text-white transition">GitHub</a>
        </div>
      </div>
    </footer>
  );
}