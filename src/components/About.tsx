import { animated, useSpring } from "@react-spring/web";
import clsx from "clsx";
import { usePinnedSceneProgress } from "services/hooks";
import { slice, mapRange } from "services/scroll";

export default function About() {
  const { ref, progress: p } = usePinnedSceneProgress();

  // TITLE
  const a = slice(p, 0.0, 0.33);
  const titleSpring = useSpring({
    opacity: a, // 0 → 1
    transform: `translateX(-50%) translateY(${mapRange(a, 0, 1, 600, 0)}px)`,
    config: { tension: 220, friction: 26 },
  });

  // CENTER BLOCK
  const b = slice(p, 0.33, 0.66);
  const imageSpring = useSpring({
    transform: `translateX(-50%) scale(${mapRange(b, 0, 1, 1, 10)})`,
    config: { tension: 220, friction: 26 },
  });
  const textSpring = useSpring({
    transform: `translateX(-50%) translateY(${mapRange(b, 0, 1, 0, -50)}px)`,
    opacity: mapRange(b, 0, 1, 1, 0.9),
    config: { tension: 220, friction: 26 },
  });

  // Фаза C (0.66..1): общий fade-out сцены + лёгкий blur
  const c = slice(p, 0.66, 1.0);
  const sceneOverlay = useSpring({
    opacity: mapRange(c, 0, 1, 1, 0), // затухаем к концу
    filter: `blur(${mapRange(c, 0, 1, 0, 2)}px)`,
    config: { tension: 200, friction: 24 },
  });

  return (
    <section
      id="about"
      ref={ref}
      className={clsx(
        "relative min-h-[500vh]", // длина сцены — прокрутки
        "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))]",
        "from-[#1e293b] via-[#6366f1] to-[#71717a]",
      )}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <animated.div
          style={sceneOverlay}
          className="absolute inset-0 will-change-[opacity,filter]"
        >
          {/* Фон или общий слой можно положить тут, если нужно */}
        </animated.div>

        <div className="relative h-full w-full">
          <animated.h2
            style={titleSpring}
            className="absolute top-[7rem] text-5xl left-1/2 font-bold text-white will-change-[transform,opacity]"
          >
           Hello
          </animated.h2>

          <animated.div
            style={imageSpring}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform"
          >
            <div className="h-64 w-96 rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 shadow-2xl" />
          </animated.div>

          <animated.p
            style={textSpring}
            className="absolute bottom-16 left-1/2 w-[60ch] -translate-x-1/2 text-center text-lg text-white/90 will-change-transform"
          >
            Описание сцены с параллаксом и постепенным исчезновением.
          </animated.p>
        </div>
      </div>
    </section>
  );
}
