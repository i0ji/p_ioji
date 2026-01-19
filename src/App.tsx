import Sidebar from "components/Sidebar";

import { AnimatePresence, motion } from "framer-motion";
import { About, Blog, Cat, Home, Portfolio } from "pages/index";
import { useEffect, useState } from "react";
import { useAppSelector } from "store/hooks";

export default function App() {
  const [page, setPage] = useState<PageType>("home");
  const mode = useAppSelector((s) => s.theme.mode);

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "cat":
        return <Cat />;
      case "blog":
        return <Blog />;
      case "portfolio":
        return <Portfolio />;
      default:
        return <Home />;
    }
  };

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
  }, [mode]);

  return (
    <div className="flex min-h-screen bg-bg text-gray-800">
      <Sidebar activePage={page} setPage={setPage} />

      <main className="relative ml-64 min-h-screen flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            className="absolute inset-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
