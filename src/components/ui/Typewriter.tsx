import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Typewriter({
  text,
  speed = 50,
}: {
  text: string;
  speed?: number;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-justify font-mono text-2xl text-white"
    >
      <span>{displayedText}</span>
      <AnimatePresence>
        {!isComplete && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="ml-1 inline-block h-6 w-0.5 bg-white"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
