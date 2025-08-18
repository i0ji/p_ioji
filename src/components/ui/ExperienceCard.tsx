import { nanoid } from "nanoid";

import clsx from "clsx";

export default function Experience({ data }) {
  return (
    <div
      className={clsx(
        "mx-auto my-4 flex h-[90vh] w-[90vw]",
        "transform flex-col justify-between",
        "rounded-lg p-4 text-stone-300 transition-transform",
        "duration-200 ease-linear hover:scale-[1.01] sm:h-[50vh] md:h-[70vh] md:w-[40vw]",
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
    </div>
  );
}
