import clsx from "clsx";
import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const headerRef = useRef<HTMLDivElement | null>(null);

  const { scrollY } = useScroll();
  const animatedWidth = useTransform(
    scrollY,
    [0, 1400],
    [isDesktop ? "90vw" : "100vw", "40vw"],
  );

  const xRaw = useSpring(0, { stiffness: 260, damping: 26 });
  const xWithCenter = useMotionTemplate`calc(-50% + ${xRaw}px)`;

  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth > 1280);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  useEffect(() => {
    const experienceEl = document.getElementById("experience");
    const portfolioEl = document.getElementById("portfolio");
    if (!experienceEl) return;

    const headerPx = headerRef.current?.offsetHeight ?? 56;
    const buffer = 16;

    const computeTop = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return rect.top + window.scrollY - headerPx - buffer;
    };

    let expTop = computeTop(experienceEl);
    let portTop = portfolioEl ? computeTop(portfolioEl) : Infinity;

    const onScroll = () => {
      const y = window.scrollY;
      setIsCollapsed(y >= expTop && y < portTop);
    };

    const onResize = () => {
      expTop = computeTop(experienceEl);
      portTop = portfolioEl ? computeTop(portfolioEl) : Infinity;
      onScroll();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const rightPad = 24;
    const collapsedWidth = 48;

    const updateX = () => {
      const target = isCollapsed
        ? window.innerWidth / 2 - rightPad - collapsedWidth / 2
        : 0;
      xRaw.set(target);
    };

    updateX();
    window.addEventListener("resize", updateX);
    return () => window.removeEventListener("resize", updateX);
  }, [isCollapsed, xRaw]);

  return (
    <motion.nav
      whileTap={isCollapsed ? { scale: 0.9 } : undefined}
      ref={headerRef}
      style={{
        x: xWithCenter,
        width: isCollapsed
          ? 48
          : isDesktop
            ? (animatedWidth as MotionValue<string>)
            : "100%",
        height: isCollapsed ? 48 : 56,
        maxWidth: "100vw",
      }}
      transition={{ type: "spring", stiffness: 260, damping: 26 }}
      className={clsx(
        "fixed left-1/2 z-50",
        "flex items-center justify-between",
        isCollapsed ? "top-6" : "top-0 xl:mt-5",
        isCollapsed ? "rounded-2xl" : "rounded-b-2xl xl:rounded-2xl",
        "border border-solid border-stone-500 bg-black/70 backdrop-blur-md",
        "will-change-[transform,opacity,filter]",
      )}
      aria-label="Main navigation"
    >
      {isCollapsed ? (
        <div className="relative">
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            aria-controls="header-dropdown"
            onClick={() => setMenuOpen((s) => !s)}
            className="flex h-10 w-10 items-center justify-center pl-1"
          >
            <span className="sr-only">Open menu</span>
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                id="header-dropdown"
                role="menu"
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className={clsx(
                  "absolute right-0 overflow-hidden",
                  "mt-4 w-50",
                  isCollapsed ? "bg-black" : "bg-black/70 backdrop-blur-md",
                  "rounded-2xl border border-gray-600/60",
                )}
              >
                <ul className={clsx("py-2", isCollapsed ? "p-4" : "p-none")}>
                  {LINKS.map((link) => {
                    const active = activeSection === link.id;
                    return (
                      <li key={link.id}>
                        <a
                          role="menuitem"
                          href={`#${link.id}`}
                          onClick={() => setMenuOpen(false)}
                          className={clsx(
                            "block",
                            "my-2 px-4 py-2",
                            "rounded-lg transition-colors",
                            active
                              ? "bg-white/10 text-white"
                              : "text-gray-300 hover:bg-white/10 hover:text-white",
                          )}
                          aria-current={active ? "true" : undefined}
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <ul className="flex w-full items-center justify-around">
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
      )}
    </motion.nav>
  );
}
