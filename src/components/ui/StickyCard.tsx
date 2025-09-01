import clsx from "clsx";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function StickyCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [24, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 1]);

  return (
    <div
      ref={ref}
      className={clsx(
        "sticky top-0",
        "max-h-[95vh]",
        "my-4 p-4",
        "rounded-2xl border-2 border-solid border-black",
      )}
    >
      <motion.div style={{ y, opacity }}>{children}</motion.div>
    </div>
  );
}
