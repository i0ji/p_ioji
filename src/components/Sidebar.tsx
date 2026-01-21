import Toggle from "./Toggle";

import clsx from "clsx";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAppSelector } from "store/hooks";

export default function Sidebar({ activePage, setPage }) {
  const themeMode = useAppSelector((state) => state.theme.mode);

  const menuItems: { id: PageType; label: string }[] = [
    { id: "home", label: "Домашняя" },
    { id: "about", label: "Обо мне" },
    { id: "cat", label: "Кошка" },
    { id: "portfolio", label: "Портфолио" },
    { id: "blog", label: "Блог" },
  ] as const;

  useEffect(() => {
    document.documentElement.classList.remove("theme-light", "theme-dark");
    document.documentElement.classList.add(`theme-${themeMode}`);
  }, [themeMode]);

  return (
    <aside
      className={clsx(
        "fixed top-0 left-0",
        "flex h-screen w-64 flex-col justify-between p-6",
        "border-accent-1 bg-fg border-r text-white",
      )}
    >
      <h1 className="p-2 text-2xl font-bold text-accent-2">Salute!</h1>
      <nav className="flex flex-col gap-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setPage(item.id)}
            className={`relative rounded-lg px-4 py-2 text-left transition-all duration-300 ${
              activePage === item.id
                ? "font-medium text-white"
                : "text-gray-400 hover:bg-gray-800 hover:text-white"
            }`}
          >
            {activePage === item.id && (
              <motion.div
                layoutId="active-bg"
                className="absolute inset-0 -z-10 rounded-lg bg-accent-3"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            {item.label}
          </button>
        ))}
      </nav>
      <Toggle />
    </aside>
  );
}
