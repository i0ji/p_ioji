import { Slogan } from "components/index";

import clsx from "clsx";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [isScrollVisible, setIsScrollVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const timeout = setTimeout(() => setIsScrollVisible(true), 5000);
    return () => clearTimeout(timeout);
  }, []);

  const opacity = useTransform(
    scrollYProgress,
    [0.1, 0.5, 0.7, 0.8, 0.9, 1],
    [0, 0.5, 1, 1, 1, 1],
  );
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Inventore cumque minus quidem in praesentium.
     Facilis eius porro placeat debitis amet pariatur quibusdam suscipit eligendi.
     Nostrum amet quam molestias dolorum perferendis?`;

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      if (progress >= 0.1 && progress <= 0.6) {
        const relativeProgress = (progress - 0.1) / 0.5;
        const charsToShow = Math.floor(relativeProgress * text.length);
        setDisplayedText(text.slice(0, charsToShow));
      }
    });

    return unsubscribe;
  }, [scrollYProgress, text]);

  return (
    <div id="hero" ref={ref} className={clsx("relative", "h-[300vh]")}>
      <div
        className={clsx(
          "sticky top-0",
          "flex h-screen items-center justify-center text-justify",
          "overflow-hidden",
        )}
      >
        <motion.div
          style={{
            opacity,
            willChange: "transform,border-radius,opacity",
          }}
          className={clsx("flex h-60 w-120 p-4", "items-center justify-center")}
        >
          <span className="font-mono">{displayedText}</span>
        </motion.div>

        <motion.h1
          style={{ opacity: titleOpacity }}
          className="fixed flex w-full items-center justify-center"
        >
          <Slogan />
        </motion.h1>

        {isScrollVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{
              duration: 3.5,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
            }}
            style={{
              pointerEvents: "none",
              willChange: "opacity",
            }}
            className="mouse-bounce fixed bottom-20 left-[50%] translate-x-[-50%] lg:bottom-20"
            aria-hidden="true"
          >
            <motion.span
              style={{
                opacity: scrollOpacity,
              }}
              className="mouse relative"
            >
              <span className="wheel"></span>
              <span className="absolute -bottom-12 translate-x-[-25%] text-center">
                scroll down
              </span>
            </motion.span>
          </motion.div>
        )}
      </div>
    </div>
  );
}
