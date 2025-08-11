import { animated, useSpring } from "@react-spring/web";
import clsx from "clsx";
import { useMemo } from "react";
import { useSectionProgress } from "services/hooks";

export default function Header() {
  const { progress, passedTop } = useSectionProgress("about", { endK: 1 });

  const eff = useMemo(() => Math.min(1, Math.max(0, progress)), [progress]);

  const styles = useSpring({
    width: `${80 - eff * 40}%`, // 80% → 40%
    // height: `${56 - eff * 12}px`, // 56px → 44px
    // paddingTop: `${12 - eff * 4}px`,
    // paddingBottom: `${12 - eff * 4}px`,
    opacity: 0.9 + eff * 0.1,
    backdropFilter: `blur(${2 + eff * 6}px)`,
    config: { tension: 220, friction: 28 },
  });

  // Если вышли за About — держим финальные значения (без «дрожи»)
  const frozen = passedTop && eff >= 1;

  return (
    <animated.nav
      style={
        frozen
          ? {
              width: "40%",
              height: "56px",
              paddingTop: "8px",
              paddingBottom: "8px",
              opacity: 1,
              backdropFilter: "blur(8px)",
            }
          : styles
      }
      className={clsx(
        "fixed left-1/2 top-0 -translate-x-1/2",
        "z-50 mx-auto mt-5 rounded-3xl bg-black/30 text-stone-200",
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
