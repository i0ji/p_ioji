import { nanoid } from "nanoid";

import { motion } from "framer-motion";

import clsx from "clsx";

export default function Experience({
  data,
  index,
}: {
  data: experienceDataModel;
  index: number;
}) {
  return (
    <div
      className={
        clsx("mb-10 p-4", "rounded-2xl border-2 border-solid border-slate-900")
        //LATER
        // "mx-auto my-4 flex h-[90vh] w-[90vw]",
        // "transform flex-col justify-between",
        // "rounded-lg p-4 text-stone-300 transition-transform",
        // "duration-200 ease-linear hover:scale-[1.01] sm:h-[50vh] md:h-[70vh] md:w-[40vw]",
        // "md:bg-gray-800 md:shadow-lg md:drop-shadow-lg lg:h-[80vh] lg:w-[30vw]",
        // "2xl:h-[75vh] xl:h-[75vh] 2xl:w-[30vw]",
      }
      // className="panel"
      // initial={{
      //   opacity: 0,
      //   x: index % 2 === 0 ? 50 : -50,
      // }}
      // whileInView={{
      //   opacity: 1,
      //   x: 0,
      //   transition: {
      //     duration: 1,
      //   },
      // }}
      // viewport={{ once: true }}
    >
      {data.img && (
        <div className="relative">
          <img
            src={data.img}
            alt={data.title}
            className="h-auto w-full rounded-t-2xl"
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
        <hr className="my-4 h-[1px] w-full bg-stone-400 opacity-50" />
      )}

      <div className="flex h-auto flex-col justify-between">
        {data.technologies && <p className="my-2 w-full">Technologies: </p>}
        <ul className="flex flex-initial flex-wrap">
          {data.technologies &&
            data.technologies.map((unit) => (
              <li key={nanoid()} className="pr-2">
                <pre className="mx-[3px] my-[2px] overflow-x-hidden rounded-lg bg-gray-900 px-[5px] font-bold text-stone-300">
                  <code>{unit}</code>
                </pre>
              </li>
            ))}
        </ul>
        <hr className="my-4 h-[1px] w-full bg-stone-400 opacity-50" />
        <a target="_blank" href={data.linkTo}>
          {data.linkTitle}
        </a>
      </div>
    </div>
  );
}
