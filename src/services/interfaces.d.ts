interface SidebarProps {
  activePage: PageType;
  setPage: (page: PageType) => void;
}

interface ThemeModel {
  mode: "light" | "dark";
}
