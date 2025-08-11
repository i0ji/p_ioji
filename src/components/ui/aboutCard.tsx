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
        "sm:h-[80vh]",
        "md:w-[60vw] md:border-solid",
        "lg:h-[80vh] lg:w-[30vw] xl:h-[60vh] 2xl:h-[35vh] 2xl:w-[45vw]",
        "transition-transform duration-200 ease-linear",
      )}
      data-carousel-item
    >
      <div
        className={clsx(
          "flex justify-between rounded-lg p-3",
          "bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-[#0f172a] to-[#334155]",
          "text-amber-100 opacity-45",
        )}
      >
        <div className="flex flex-col justify-between">
          <h2>{data.title}</h2>
          <h6>{data.keyWords}</h6>
        </div>
        <img
          className={clsx("z-[-10] h-20 fill-red-700")}
          src={data.imgSrc}
          alt="{data.title}"
        />
      </div>
      <div className="flex h-[60%] clex-col items-center">
        {Array.isArray(data.description) ? (
          <ul className="z-100 flex list-disc flex-col justify-between pl-5 text-justify">
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
    </div>
  );
}
