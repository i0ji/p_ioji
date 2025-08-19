import clsx from "clsx";
import { nanoid } from "nanoid";
import { experienceData } from "data/data";
import { ExperienceCard } from "components/index";

import { motion } from "framer-motion";

export default function Experience() {
  const variant = {
    visible: { opacity: 1, y: "0px" },
    hidden: { opacity: 0, y: "200px" },
  };

  return (
    <section
      id="experience"
      className={clsx(
        "relative min-h-[400vh] w-full bg-gradient-to-t from-sky-700 from-[0%] via-amber-700 to-[#344256] to-[100%] backdrop-blur-lg",
        "snap-start",
      )}
    >
      <div
        className={clsx("mx-auto w-full max-w-7xl px-4 py-20", "flex flex-col")}
      >
        {experienceData.map((style, i) => (
          <motion.div
            transition={{ duration: 0.8 }}
            variants={variant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: "some" }}
          >
            <ExperienceCard key={nanoid()} data={experienceData[i]} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
