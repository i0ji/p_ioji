import clsx from "clsx";
import { useAppSelector } from "store/hooks";
import { useState, useEffect, useMemo } from "react";

const LINKS = [
  { id: "hero", label: "hero" },
  { id: "experience", label: "experience" },
  { id: "portfolio", label: "portfolio" },
  { id: "contacts", label: "contacts" },
];

export default function Header() {
  const activeSection = useAppSelector((s) => s.nav.activeSection);

  const [isDesktop, setIsDesktop] = useState(false);

  const links = useMemo(() => LINKS, []);

  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth > 1280);
    checkSize();
    console.log(isDesktop);
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={clsx(
        "fixed w-[60%] top-[2rem] z-50",
        "left-1/2 -translate-x-1/2",
        "border border-gray-500 bg-black/30 backdrop-blur-md",
        "rounded-lg",
      )}
    >
      <ul className="flex justify-around p-2">
        {links.map((link) => {
          const active = activeSection === link.id;
          return (
            <li key={link.id} className="relative">
              <a
                href={`#${link.id}`}
                aria-current={active ? "true" : undefined}
                className={clsx(
                  "relative z-10 rounded-lg px-3 py-1 transition-colors",
                  active ? "text-white" : "text-gray-400 hover:text-gray-200",
                )}
              >
                {link.label}
              </a>
              {active && (
                <span className="pointer-events-none absolute inset-0 rounded-md bg-white/10" />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
