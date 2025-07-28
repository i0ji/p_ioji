import { nanoid } from "nanoid";

export default function Card({ data }: { data: heroModel }) {
  return (
    <div className="m-4 flex h-[40%] w-[35%] transform flex-col justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-lg drop-shadow-lg transition-transform duration-300 hover:scale-[1.01] dark:border-gray-700 dark:bg-gray-800">
      <h6 className="flex h-[15%] items-center justify-center text-xl font-bold text-gray-700 dark:text-gray-400">
        {data.title}
      </h6>
      <div className="flex h-[85%] flex-col justify-between">
        <div className="relative h-1/2 overflow-y-hidden">
          <ul className="list-disc pl-5 text-justify">
            {data.responsibilities.map((unit) => (
              <li key={nanoid()}>
                <p>{unit}</p>
              </li>
            ))}
          </ul>
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-gray-800 to-transparent"></div>
        </div>
        <hr />

        <ul className="flex">
          {data.technologies.map((unit) => (
            <li key={nanoid()}>
              <p>{unit}</p>
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
