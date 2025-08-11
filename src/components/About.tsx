import { animated, useSpring } from "@react-spring/web";
import clsx from "clsx";
import { aboutData } from "data/data";
import { AboutCard } from "ui/index";
import { nanoid } from "nanoid";
import { useSectionProgress } from "services/hooks";

export default function About() {
  const { progress } = useSectionProgress("about", { endK: 0.8 });

  const styles = useSpring({
    opacity: 1 - progress, // 1 → 0
    transform: `translateY(${progress * 20}px) scale(${1 - progress * 0.1})`,
    config: { tension: 200, friction: 24 },
  });

  return (
    <section
      id="about"
      className={clsx(
        "h-screen w-full snap-start pt-10",
        "grid items-center gap-4 lg:grid-cols-2",
        "to-90 via-black via-45% to-neutral-700",
      )}
    >
      <animated.div
        style={styles}
        className="contents will-change-transform lg:contents"
      >
        {aboutData.map((data) => (
          <AboutCard key={nanoid()} data={data} />
        ))}
      </animated.div>
    </section>
  );
}
