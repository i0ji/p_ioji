import { animated } from "@react-spring/web";
import clsx from "clsx";

export default function Header() {
  return (
    <animated.nav
      className={clsx(
        "fixed left-1/2 w-[60%] p-4 top-0 -translate-x-1/2",
        "z-50 mx-auto mt-5 rounded-3xl bg-black/30 text-stone-200 backdrop-blur-md",
        "flex items-center justify-between px-4",
        "will-change-[transform,opacity,filter]",
      )}
    >
      <ul className="max-lg flex w-full items-center justify-around">
        <li>
          <a className="group relative" href="#about">
            <span className="absolute left-[-15px] hidden opacity-0 transition-opacity duration-300 group-hover:opacity-80 sm:block md:block">
              ◈
            </span>
            about
          </a>
        </li>
        <li>
          <a className="group relative" href="#hero">
            <span className="none absolute left-[-15px] hidden opacity-0 transition-opacity duration-300 group-hover:opacity-80 sm:block">
              #
            </span>
            hero
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
    </animated.nav>
  );
}
