interface SidebarProps {
  activePage: string;
  onPageChange: (page: string) => void;
}

export default function Sidebar({ activePage, onPageChange }: SidebarProps) {
  const navItems = [
    { id: "home", label: "Главная", icon: "🏠" },
    { id: "about", label: "Обо мне", icon: "👤" },
    { id: "blog", label: "Блог", icon: "📝" },
  ];

  return (
    <nav aria-label="Основная навигация" className="sidebar-nav">
      <header className="h-card p-author">
        <img src="/avatar.jpg" alt="Фото" className="u-photo" />
        <h2 className="p-name">Имя Фамилия</h2>
      </header>

      <ul role="list">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              className={activePage === item.id ? "active" : ""}
              onClick={() => onPageChange(item.id)}
              aria-current={activePage === item.id ? "page" : undefined}
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
