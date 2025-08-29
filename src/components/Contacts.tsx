import clsx from "clsx";

export default function Contacts() {
  return (
    <section
      id="contacts"
      className={clsx(
        "justify-between",
        "h-screen w-full snap-start",
        // "border-l-purple-950 bg-gradient-to-br from-cyan-800 from-5%",
      )}
    >
      <div className="mx-auto flex h-full max-w-screen-xl flex-wrap items-center justify-around">
        <ul className="mx-auto my-4 flex h-[30rem] w-[30rem] transform flex-col justify-between rounded-lg bg-gray-800 p-4 shadow-lg drop-shadow-lg transition-transform duration-200 ease-linear">
          <li className="transition duration-300 hover:scale-105 hover:shadow-white/50 hover:drop-shadow-lg">
            <a
              href="https://t.me/Ivan_Vasilevich"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
          </li>
          <li>
            <a href="mailto:ioji@inbox.ru">Mail</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
