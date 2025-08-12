import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"], // 0 когда верх секции у верхнего края, 1 когда низ у нижнего
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  // Немного смягчим прозрачность для приятности
  const opacity = useTransform(scrollYProgress, [0, 0.1, 1], [0.5, 1, 1]);

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
          "border-2 border-solid border-red-500",
          "overflow-hidden first-line:sticky",
        )}
      >
        <motion.div
          style={{ scale, opacity, willChange: "transform,opacity" }}
          className={clsx(
            "h-[20rem] w-[30rem]",
            "flex items-center justify-center",
            "rounded-2xl",
            "bg-gradient-to-t from-slate-700 to-transparent",
          )}
        />
      </div>
    </section>
  );
}
