import { aboutData } from "data/data";

import { AboutCard } from "ui/index";
import { nanoid } from "nanoid";
import clsx from "clsx";

export default function About() {
  return (
    <>
      <section
        id="about"
        className={clsx(
          "y-4 w-full",
          "grid items-center ",
          "gap-4 lg:grid-cols-2",
          "h-screen w-full snap-start bg-gradient-to-l from-5%",
          "to-90 via-black via-45% to-neutral-700",
        )}
      >
        {aboutData.map((data) => (
          <AboutCard key={nanoid()} data={data} />
        ))}
      </section>
    </>
  );
}
