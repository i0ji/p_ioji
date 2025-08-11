import clsx from "clsx";
import { animated, useScroll, useSpring } from "@react-spring/web";

export default function Header() {
  const { scrollYProgress } = useScroll();
  const styles = useSpring({
    to: {
      width: scrollYProgress.to((p) => `${80 - p * 40}%`),

      opacity: scrollYProgress.to((p) => 1 - p * 1),
      backdropFilter: scrollYProgress.to((p) => `blur(${2 + p * 6}px)`),
    },
    config: { tension: 170, friction: 26 },
  });

  return (
    <animated.nav
      style={styles}
      className={clsx(
        "fixed left-1/2 top-0 w-[50%] -translate-x-1/2",
        "flex items-center justify-between",
        "mx-auto mt-5 h-10",
        "z-100 backdrop-blur-xs rounded-3xl bg-black bg-opacity-30 py-3 text-stone-200",
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
