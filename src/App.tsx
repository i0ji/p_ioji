import { Sidebar } from "components/index";

import { About, Blog, Home } from "./pages/index";

import { useState } from "react";

const pages = {
  home: <Home />,
  about: <About />,
  blog: <Blog />,
};

export default function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="app-container">
      <main className="main-content">
        {pages[activePage as keyof typeof pages] || <Home />}
      </main>
      <aside className="sidebar" role="complementary">
        <Sidebar activePage={activePage} onPageChange={setActivePage} />
      </aside>
    </div>
  );
}