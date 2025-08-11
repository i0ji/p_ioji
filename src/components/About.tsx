import { aboutData } from "data/data";

import { AboutCard } from "ui/index";
import { nanoid } from "nanoid";
import clsx from "clsx";

import { useSpring, animated } from "@react-spring/web";

export default function About() {
  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
  });

  return (
    <section
      id="about"
      className={clsx(
        "y-4 w-full pt-10",
        "grid items-center",
        "gap-4 lg:grid-cols-2",
        "h-screen w-full snap-start bg-gradient-to-l from-5%",
        "to-90 via-black via-45% to-neutral-700",
      )}
    >
      {aboutData.map((data) => (
        <AboutCard key={nanoid()} data={data} />
      ))}
      <animated.div
        style={{
          width: 80,
          height: 80,
          background: "#ff6d6d",
          borderRadius: 8,
          ...springs,
        }}
      />
    </section>
  );
}
