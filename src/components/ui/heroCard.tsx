import { nanoid } from "nanoid";
import { useState } from "react";
import { HeroModal } from "components/index";

import clsx from "clsx";

export default function Card({ data }: { data: heroModel }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <div
      className={clsx(
        "mx-auto my-4 flex h-[90vh] w-[100vw]",
        "transform flex-col justify-between",
        "rounded-lg p-4 text-stone-300 transition-transform",
        "duration-200 ease-linear hover:scale-[1.01] sm:h-[50vh] md:h-[70vh] md:w-[60vw]",
        "md:bg-gray-800 md:shadow-lg md:drop-shadow-lg lg:h-[80vh] lg:w-[30vw]",
        "2xl:h-х75vh] xl:h-[75vh] 2xl:w-[30vw]",
      )}
      data-carousel-item
    >
      <h6 className="mb-2 flex h-auto text-xl font-bold">{data.title}</h6>
      <div className="xl h-auto flex-auto flex-col justify-between">
        <ul className="flex list-disc flex-col justify-between pl-5 text-justify">
          {data.responsibilities.map((unit) => (
            <li key={nanoid()}>
              <p>{unit}</p>
            </li>
          ))}
        </ul>
      </div>
      {data.technologies && (
        <hr className="h-[1px] w-full bg-stone-400 opacity-50" />
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
      </div>

      <button
        onClick={handleOpenModal}
        className={clsx(
          "group relative me-2 mt-2 hidden w-1/3 items-center self-end overflow-hidden",
          "bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-gray-900 group-hover:from-purple-600 group-hover:to-blue-500 dark:focus:ring-blue-800",
          "rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300",
          "text-sm font-medium hover:text-white 2xl:hidden dark:text-white",
        )}
      >
        <span className="relative w-full rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-transparent dark:bg-gray-900 group-hover:dark:bg-transparent">
          Read more
        </span>
      </button>

      {isOpen && (
        <HeroModal
          isOpen={isOpen}
          handleClose={handleCloseModal}
          description={data.responsibilities}
        />
      )}
    </div>
  );
}
