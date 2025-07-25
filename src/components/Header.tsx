export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 mx-auto w-full bg-zinc-900 py-4">
      <button onClick={() => scrollToSection("cat")} className="text">
        Кошка
      </button>
      <button
        onClick={() => scrollToSection("projects")}
        className="bg-slate-950"
      >
        Проекты
      </button>
      <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
        ...
      </button>
      <button
        onClick={() => scrollToSection("about")}
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        Обо мне
      </button>
    </div>
  );
}
