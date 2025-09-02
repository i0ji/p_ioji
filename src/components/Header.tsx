import clsx from "clsx";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { useAppSelector } from "store/hooks";

const LINKS = [
  { id: "hero", label: "hero" },
  { id: "experience", label: "experience" },
  { id: "portfolio", label: "portfolio" },
  { id: "contacts", label: "contacts" },
];

export default function Header() {
  const activeSection = useAppSelector((s) => s.nav.activeSection);

  const [isDesktop, setIsDesktop] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth > 1280);
    setIsDesktop(true);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const animatedWidth = useTransform(
    scrollY,
    [0, 1400],
    [isDesktop ? "90vw" : "100vw", "40vw"],
  );

  return (
    <motion.nav
      style={{
        width: isDesktop ? animatedWidth : "100%",
        maxWidth: "100vw",
      }}
      className={clsx(
        "fixed left-1/2 z-50 -translate-x-1/2",
        "h-14",
        "rounded-b-2xl border-[1px] border-solid border-gray-500 bg-black/30 text-lg backdrop-blur-md md:mx-auto xl:mt-5 xl:rounded-3xl",
        "flex items-center justify-between",
        "will-change-[transform,opacity,filter]",
      )}
    >
      <ul className="max-lg flex w-full items-center justify-around">
        {LINKS.map((link) => {
          const active = activeSection === link.id;
          return (
            <li key={link.id} className="relative">
              <a
                href={`#${link.id}`}
                aria-current={active ? "true" : undefined}
                className={clsx(
                  "relative z-10 px-3 py-1 transition-colors",
                  active ? "text-white" : "text-gray-400 hover:text-gray-200",
                )}
              >
                {link.label}
              </a>

              {active && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-md bg-white/10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
