import { nanoid } from "nanoid";

import clsx from "clsx";

export default function AboutCard({ data }: { data: aboutDataModel }) {
  return (
    <div
      className={clsx(
        "relative mx-auto flex h-[30vh] w-[90vw] flex-col justify-between",
        "transform p-4",
        "rounded-lg border-2 border-stone-300",
        "bg-transparent text-stone-300",
        "sm:h-[50vh]",
        "md:w-[60vw] md:border-solid",
        "lg:h-[80vh] lg:w-[30vw] xl:h-[60vh] 2xl:h-[30vh] 2xl:w-[30vw]",
        "transition-transform duration-200 ease-linear",
      )}
      data-carousel-item
    >
      <img
        className={clsx("absolute z-[-10] h-1/2")}
        src={data.imgSrc}
        alt="{data.title}"
      />
      <h2>{data.title}</h2>
      <h6>{data.keyWords}</h6>

      {Array.isArray(data.description) ? (
        <ul className="flex z-100 list-disc flex-col justify-between pl-5 text-justify">
          {data.description.map((unit) => (
            <li key={nanoid()}>
              <p>{unit}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-justify">{data.description}</p>
      )}
    </div>
  );
}
