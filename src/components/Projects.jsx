const myProjects = [
  {
    title: "Portfolio v1",
    desc: "Мій перший сайт на React + Tailwind v4. Анімований та оптимізований під macOS.",
    tech: ["React", "Tailwind", "Vite"],
    link: "https://github.com/viktorndevelop/my-portfolio"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-24 px-4">
      <h2 className="text-3xl font-bold mb-12">Мої проєкти</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {myProjects.map((p) => (
          <div key={p.title} className="group bg-bg-card border border-slate-800 p-8 rounded-3xl hover:border-brand-primary transition-all">
            <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
            <p className="text-slate-400 mb-6">{p.desc}</p>
            <div className="flex gap-2 mb-6">
              {p.tech.map(t => <span key={t} className="text-xs bg-slate-800 px-3 py-1 rounded-full">{t}</span>)}
            </div>
            <a href={p.link} className="text-brand-primary font-bold hover:underline">Переглянути код →</a>
          </div>
        ))}
      </div>
    </section>
  );
}