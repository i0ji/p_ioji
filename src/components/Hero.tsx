import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const width = useTransform(scrollYProgress, [0, 1], ["30rem", "100vw"]);
  const height = useTransform(scrollYProgress, [0, 1], ["15rem", "100vh"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["1rem", "0rem"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.7, 1],
    [0, 1, 1, 0.6],
  );
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const mouseOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5],
    [1, 0.5, 0],
  );

  return (
    <section
      id="hero"
      ref={ref}
      className={clsx(
        "relative min-h-[250vh] bg-gradient-to-t from-slate-700 to-slate-400 text-slate-300",
      )}
    >
      <div
        className={clsx(
          "relative top-0 flex h-screen items-center justify-center",
          "overflow-hidden first-line:sticky",
        )}
      >
        <motion.div
          style={{
            width,
            height,
            borderRadius,
            opacity,
            position: "fixed", // чтобы реально занимал весь экран при росте
            top: 0,
            left: "50%",
            x: "-50%", // центрируем по горизонтали
            willChange: "width,height,border-radius,opacity",
            maxHeight: "100vh",
          }}
          className="flex items-center justify-center bg-gradient-to-t from-slate-700 to-transparent"
        >
          <p>Hello, my name is Ivan I`m FE developer from Moscow</p>
        </motion.div>
        <motion.h1 style={{ opacity: titleOpacity }}>
          No ideas here were judged and eliminated
        </motion.h1>
        <motion.div
          style={{
            opacity: mouseOpacity,
            pointerEvents: "none",
            willChange: "opacity",
          }}
          className="mouse-bounce fixed bottom-[5rem] left-[5rem]"
          aria-hidden="true"
        >
          <span className="mouse relative">
            <span className="wheel"></span>
            <span className="absolute bottom-[-3rem] translate-x-[-25%] text-justify">
              scroll down
            </span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
