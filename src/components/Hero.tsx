import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"], // 0 когда верх секции у верхнего края, 1 когда низ у нижнего
  });

  const width = useTransform(scrollYProgress, [0, 1], ["30rem", "100vw"]);
  const height = useTransform(scrollYProgress, [0, 1], ["15rem", "100vh"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["1rem", "0rem"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 1], [0, 1, 1]);
  const mouseOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className={clsx(
        "relative min-h-[200vh] bg-gradient-to-t from-slate-700 to-slate-400",
      )}
    >
      <div
        className={clsx(
          "top-0 flex h-screen items-center justify-center",
          // "2xl rounded-2xl border-2 border-solid",
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
          }}
          className="flex items-center justify-center bg-gradient-to-t from-slate-700 to-transparent"
        >
          hello!
        </motion.div>
        <motion.div
          style={{
            opacity: mouseOpacity,
            pointerEvents: "none", // не мешает кликам и ховерам
            willChange: "opacity",
          }}
          className="mouse-bounce fixed bottom-0 left-1"
          aria-hidden="true"
        >
          <span className="mouse">
            <span className="wheel"></span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
