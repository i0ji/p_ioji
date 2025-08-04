import { nanoid } from "nanoid";

export default function Card({ data }: { data: heroModel }) {
  return (
    <div
      className="mx-auto my-8 flex h-[70vh] w-[20vw] transform flex-col rounded-lg bg-gray-800 p-4 text-stone-400 shadow-lg drop-shadow-lg transition-transform duration-200 ease-linear hover:scale-[1.01]"
      data-carousel-item
    >
      <h6 className="mb-2 flex h-[15%] text-xl font-bold">{data.title}</h6>
      <div className="flex h-auto flex-auto flex-col justify-between">
        <ul className="flex list-disc flex-col justify-between px-5 text-justify">
          {data.responsibilities.map((unit) => (
            <li key={nanoid()}>
              <p>{unit}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex h-[30%] flex-col justify-between">
        <hr className="h-[1px] w-full bg-stone-400 opacity-50" />
        <p className="w-full">Technologies: </p>
        <ul className="flex flex-initial flex-wrap">
          {data.technologies.map((unit) => (
            <li key={nanoid()} className="pr-2">
              <pre className="mx-[3px] my-[2px] overflow-x-hidden rounded-lg bg-gray-900 px-[5px] font-bold text-stone-300">
                <code>{unit}</code>
              </pre>
            </li>
          ))}
        </ul>

        <button className="group relative mb-2 me-2 inline-flex w-1/3 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800">
          <span className="relative w-full rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-transparent dark:bg-gray-900 group-hover:dark:bg-transparent">
            Read more
          </span>
        </button>
      </div>
    </div>
  );
}
