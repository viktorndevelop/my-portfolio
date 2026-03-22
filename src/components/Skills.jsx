const skillGroups = [
  { title: "Frontend", items: ["React", "Tailwind CSS", "Vite", "JavaScript (ES6+)"] },
  { title: "Инструменты", items: ["Git & GitHub", "VS Code", "NPM/Bun"] },
  { title: "Дополнительно", items: ["SCSS", "Figma", "Responsive Design"] }
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto py-24 px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Технології</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {skillGroups.map((group) => (
          <div key={group.title} className="bg-bg-card p-6 rounded-2xl border border-slate-800">
            <h3 className="text-brand-primary font-bold mb-4">{group.title}</h3>
            <ul className="space-y-2 text-slate-400">
              {group.items.map(item => <li key={item}>• {item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}