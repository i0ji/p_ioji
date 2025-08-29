import clsx from "clsx";

import { useMemo, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: { y: 10, opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.03, duration: 0.25 },
  }),
  exit: (i: number) => ({
    y: -10,
    opacity: 0,
    transition: { delay: i * 0.02, duration: 0.2 },
  }),
};

function SplitWord({ text }: { text: string }) {
  const chars = useMemo(() => text.split(""), [text]);
  return (
    <span 
      className="inline-block min-w-[200px] text-center"
      style={{ position: "relative" }}
    >
      <AnimatePresence mode="wait">
        <span key={text} className="flex justify-center">
          {chars.map((c, i) => (
            <motion.span
              key={`${text}-${i}-${c}`}
              custom={i}
              initial="hidden"
              animate="show"
              exit="exit"
              //LATER
              // className="border-2 border-solid border-red-400 text-red-500"
              variants={variants}
              style={{ display: "inline-block", whiteSpace: "pre" }}
            >
              {c}
            </motion.span>
          ))}
        </span>
      </AnimatePresence>

      <span style={{ visibility: "hidden" }}>{text}</span>
    </span>
  );
}


const variantsList = ["IDE", "impact", "performance"];

export default function FancyReplace() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setI((x) => (x + 1) % variantsList.length),
      2000,
    );
    return () => clearInterval(id);
  }, []);
  return (
    <span
      className={clsx(
        "flex flex-col"," items-center justify-center sm:flex-row",
        "gap-4",
        "text-center",
      )}
      style={{ fontSize: 28 }}
    >
      from IDEA to&nbsp;
      <SplitWord text={variantsList[i]} />
    </span>
  );
}
