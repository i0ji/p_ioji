import clsx from "clsx";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Header() {
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
        width: isDesktop ? animatedWidth : "100vw",
      }}
      className={clsx(
        "fixed left-1/2 z-50 -translate-x-1/2",
        "h-14",
        "rounded-none bg-black/30 text-lg text-stone-200 backdrop-blur-md md:mx-auto xl:mt-5 xl:rounded-3xl",
        "flex items-center justify-between px-4",
        "will-change-[transform,opacity,filter]",
      )}
    >
      <ul className="max-lg flex w-full items-center justify-around">
        <li>
          <a className="group relative" href="#hero">
            <span className="none absolute left-[-15px] hidden opacity-0 transition-opacity duration-300 group-hover:opacity-80 sm:block">
              #
            </span>
            hero
          </a>
        </li>
        <li>
          <a className="group relative" href="#experience">
            <span className="absolute left-[-15px] hidden opacity-0 transition-opacity duration-300 group-hover:opacity-80 sm:block md:block">
              ◈
            </span>
            experience
          </a>
        </li>
        <li>
          <a className="group relative" href="#portfolio">
            <span className="absolute left-[-25px] hidden opacity-0 transition-opacity duration-300 group-hover:opacity-80 sm:block md:block">
              &#128449;
            </span>
            portfolio
          </a>
        </li>
        <li>
          <a className="group relative" href="#cat">
            <span className="absolute left-[-15px] hidden opacity-0 transition-opacity duration-300 group-hover:opacity-80 sm:block md:block">
              ★
            </span>
            cat
          </a>
        </li>

        <li>
          <a className="group relative" href="#contacts">
            <span className="absolute left-[-20px] hidden opacity-0 transition-opacity duration-300 group-hover:opacity-80 sm:block md:block">
              ☏
            </span>
            contacts
          </a>
        </li>
      </ul>
    </motion.nav>
  );
}
