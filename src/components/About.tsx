import { motion, Variants } from "framer-motion";
import { aboutData } from "data/data";
import { AboutCard } from "ui/index";
import clsx from "clsx";

const listVariants: Variants = {
  initial: {},
  enter: { transition: { staggerChildren: 0.08 } },
  exit: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  initial: { x: "100%", opacity: 0 },
  enter: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
};

export default function About() {
  return (
    <section
      id="about"
      className={clsx(
        "flex items-center justify-center",
        "pt-10",
        "h-screen w-full snap-start",
      )}
    >
      <div className={clsx("y-4 grid h-full w-[80vw] gap-4 lg:grid-cols-2")}>
        <motion.div
          className="contents"
          initial="initial"
          whileInView="enter"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={listVariants}
        >
          {aboutData.map((data) => {
            const id = String(data.id ?? data.slug ?? data.title);
            return (
              <motion.div
                key={id}
                variants={itemVariants}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="h-full"
              >
                <div className="flex h-full items-center justify-center">
                  <AboutCard
                    title={data.title}
                    to={`/about/${id}`}
                    data={data}
                    id={`about-${id}`}
                    className="h-full border-white/70 transition-colors hover:border-white"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
