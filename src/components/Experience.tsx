import clsx from "clsx";
import { nanoid } from "nanoid";
import { experienceData } from "data/data";
import { ExperienceCard } from "components/index";
export default function Experience() {
  return (
    <section
      id="experience"
      className={clsx(
        "relative min-h-[200vh] w-full bg-gradient-to-t to-[#344256] from-[0%] from-cyan-100 to-[100%]",
        "snap-start",
      )}
    >
      <div
        className={clsx(
          "mx-auto w-full max-w-7xl px-4 py-20",
          "grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3",
        )}
      >
        {experienceData.map((style, i) => (
          <ExperienceCard key={nanoid()} data={experienceData[i]} />
        ))}
      </div>
    </section>
  );
}
