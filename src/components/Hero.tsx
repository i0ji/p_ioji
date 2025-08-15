import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { nanoid } from "nanoid";

export default function Hero() {
  const [isScrollVisible, setIsScrollVisible] = useState(false);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const timeout = setTimeout(() => setIsScrollVisible(true), 5000);
    return () => clearTimeout(timeout);
  }, []);

  const scale = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const textScale = useTransform(scale, (s) => 1 / s);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["1rem", "0rem"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.7, 1], [0, 1, 1, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scrollOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5],
    [1, 0.5, 0],
  );

  return (
    <section
      id="hero"
      ref={ref}
      className={clsx(
        "relative",
        "min-h-[250vh]",
        "bg-gradient-to-t from-slate-700 to-slate-400 text-slate-300",
      )}
    >
      <div
        className={clsx(
          "sticky top-0",
          "flex h-screen items-center justify-center",
          "overflow-hidden",
        )}
      >
        <motion.div
          style={{
            scale,
            borderRadius,
            opacity,
            willChange: "transform,border-radius,opacity",
          }}
          className={clsx(
            "flex h-[15rem] w-[30rem] items-center justify-center",
            "bg-gradient-to-t from-slate-700 to-transparent",
          )}
        >
          <motion.p
            style={{
              scale: textScale,
              willChange: "transform",
            }}
          >
            Hello, my name is Ivan I'm FE developer from Moscow
          </motion.p>
        </motion.div>

        <motion.h1 style={{ opacity: titleOpacity }} className="absolute">
          No ideas here were judged and eliminated
        </motion.h1>

        {isScrollVisible && (
          <motion.div
            key={nanoid()}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
            }}
            style={{
              opacity: scrollOpacity,
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
        )}
      </div>
    </section>
  );
}
