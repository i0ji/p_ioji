import clsx from "clsx";
import { motion, useScroll, useTransform } from "framer-motion";
import { nanoid } from "nanoid";
import { useRef } from "react";

export default function Experience({
  data,
}: {
  data: experienceDataModel;
  index: number;
}) {
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
        "my-4 px-4 py-1",
        "border-none md:rounded-lg border-[1px] md:border-solid border-stone-300",
      )}
    >
      <motion.div style={{ y, opacity }}>
        {data.img && (
          <div className="relative">
            <img
              src={data.img}
              alt={data.title}
              className="h-auto w-full rounded-t-lg"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 80%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 80%, transparent 100%)",
              }}
            />
          </div>
        )}

        <h6 className="mb-2 flex h-auto text-center text-xl font-bold">
          {data.title}
        </h6>
        <div className="xl h-auto flex-auto flex-col justify-between">
          <ul className="flex list-disc flex-col justify-between pl-1 text-justify">
            {data.responsibilities.map((unit) => (
              <li
                key={nanoid()}
                className="text-body-color dark:text-dark-6 flex text-base"
              >
                <span className="text-primary mr-2.5 mt-0.5">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_980_24852)">
                      <path
                        d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
                        fill="currentColor"
                      />
                      <path
                        d="M12.6875 7.09375L8.96875 10.7188L7.28125 9.0625C7 8.78125 6.5625 8.8125 6.28125 9.0625C6 9.34375 6.03125 9.78125 6.28125 10.0625L8.28125 12C8.46875 12.1875 8.71875 12.2813 8.96875 12.2813C9.21875 12.2813 9.46875 12.1875 9.65625 12L13.6875 8.125C13.9688 7.84375 13.9688 7.40625 13.6875 7.125C13.4063 6.84375 12.9688 6.84375 12.6875 7.09375Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_980_24852">
                        <rect width={20} height={20} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <p>{unit}</p>
              </li>
            ))}
          </ul>
        </div>
        {data.technologies && (
          <hr className="my-2 h-[1px] w-full bg-stone-400 opacity-50" />
        )}

        <div className="flex h-auto max-w-[100%] flex-wrap items-center justify-start">
          {data.technologies && <p className="my-2">Technologies:&nbsp;</p>}
          {data.technologies &&
            data.technologies.map((unit) => (
              <span
                key={nanoid()}
                className="mx-[3px] my-[2px] overflow-x-hidden rounded-lg bg-gray-900 px-[5px] pr-2 font-bold text-stone-300"
              >
                <code>{unit}</code>
              </span>
            ))}
        </div>
        <hr className="my-2 h-[1px] w-full bg-stone-400 opacity-50" />
        <p>
          Link:{" "}
          <a target="_blank" href={data.linkTo}>
            {data.linkTitle}
          </a>
        </p>
      </motion.div>
    </div>
  );
}
