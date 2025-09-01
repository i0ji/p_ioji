import clsx from "clsx";
import { nanoid } from "nanoid";
import { experienceData } from "data/data";
import { ExperienceCard } from "components/index";

export default function Experience() {
  return (
    <section
      id="experience"
      className={clsx("relative", "min-h-[400vh] w-full", "snap-start")}
    >
      <div
        className={clsx("mx-auto w-full max-w-7xl px-4 py-20", "flex flex-col")}
      >
        {experienceData.map((style, i) => (
          <ExperienceCard 
          data={experienceData[i]} 
          key={nanoid()} 
          index={i}
           />
        ))}
      </div>
    </section>
  );
}
