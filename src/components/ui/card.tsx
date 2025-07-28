import { nanoid } from "nanoid";

export default function Card({ data }: { data: heroModel }) {
  return (
    <div className="m-4 block h-1/3 w-1/3 rounded-lg border border-gray-200 bg-white p-6 shadow-lg drop-shadow-lg dark:border-gray-700 dark:bg-gray-800 transform transition-transform duration-300 hover:scale-[1.01]">
      <p className="text-xl font-bold text-gray-700 dark:text-gray-400">
        {data.title}
      </p>

      <div className="relative h-1/3 overflow-y-hidden">
        <ul className="list-disc pl-5">
          {data.responsibilities.map((unit) => (
            <li key={nanoid()}>
              <p>{unit}</p>
            </li>
          ))}
        </ul>
        <div className="pointer-events-none absolute bottom-0 left-0 h-12 w-full bg-gradient-to-t from-gray-800 to-transparent blur-md filter"></div>
      </div>
      <hr />
      <ul className="flex">
        {data.technologies.map((unit) => (
          <li key={nanoid()}>
            <p>{unit}</p>
          </li>
        ))}
      </ul>

      <button className="group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800">
        <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-transparent dark:bg-gray-900 group-hover:dark:bg-transparent">
          Read more
        </span>
      </button>
    </div>
  );
}
