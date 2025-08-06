import { aboutData } from "data/data";

import { AboutCard } from "ui/index";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="grid grid-flow-col from-purple-950-300 h-screen w-full snap-start items-center bg-gradient-to-l from-5% via-black via-45% to-neutral-700 to-90"
      >
        {aboutData.map((data) => (
          <AboutCard data={data} />
        ))}
      </section>
    </>
  );
}
