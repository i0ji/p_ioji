export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-zinc-900 w-full mx-auto py-4">
      <button onClick={() => scrollToSection('cat')} className="text">
        Кошка
      </button>
      <button
        onClick={() => scrollToSection('projects')}
        className="bg-slate-950"
      >
        Проекты
      </button>
      <button
        onClick={() => scrollToSection('about')}
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        Обо мне
      </button>
    </div>
  );
}
