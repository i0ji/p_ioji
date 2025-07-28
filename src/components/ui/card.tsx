import { nanoid } from "nanoid";

export default function Card({ data }: { data: heroModel }) {
  return (
    <div className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {data.title}
      </p>

      <ul>
        {data.responsibilities.map((unit) => (
          <li key={nanoid()}>
            <p>{unit}</p>
          </li>
        ))}
      </ul>
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
