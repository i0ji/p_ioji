interface SidebarProps {
  activePage: PageType;
  setPage: (page: PageType) => void;
}

interface ThemeModel {
  mode: 'light' | 'dark';
}

//LATER
interface ProjectsStateModel {
  projects: SlidesDataModel[];
  error: string | null;
  pending: boolean;
  loaded: boolean;
}
