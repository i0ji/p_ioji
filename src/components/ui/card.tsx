import { nanoid } from "nanoid";

export default function Card({ data }: { data: heroModel }) {
  return (
    <div
      className="mx-auto my-8 duration-200 ease-linear h-[70%] w-[90%] bg-gray-800 transform flex-col justify-between rounded-lg p-4 shadow-lg drop-shadow-lg transition-transform hover:scale-[1.01]"
      data-carousel-item
    >

        <h6 className="mb-4 flex h-[15%] text-xl font-bold text-gray-700 dark:text-gray-400">
          {data.title}
        </h6>
        <div className="flex h-[85%] flex-col justify-between text-stone-400">
          <div className="relative h-[35%] overflow-y-hidden">
            <ul className="list-disc pl-5 text-justify">
              {data.responsibilities.map((unit) => (
                <li key={nanoid()}>
                  <p>{unit}</p>
                </li>
              ))}
            </ul>
            <div className="pointer-events-none absolute bottom-0 left-0 h-12 w-full bg-gradient-to-t from-gray-800 to-transparent"></div>
          </div>
          <hr />
          Technologies:
          <ul className="flex flex-wrap">
            {data.technologies.map((unit) => (
              <li key={nanoid()}>
                <p>{unit}</p>
              </li>
            ))}
          </ul>
          {/* 
        <button className="group relative mb-2 me-2 inline-flex w-1/3 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800">
          <span className="relative w-full rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-transparent dark:bg-gray-900 group-hover:dark:bg-transparent">
            Read more
          </span>
        </button> */}
        </div>

 
    </div>
  );
}
