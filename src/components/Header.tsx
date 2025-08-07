export default function Header() {
  return (
    <nav className="backdrop-blur-xs fixed top-0 mx-auto flex h-10 w-[100%] items-center justify-between bg-black bg-opacity-30 py-3 text-stone-200">
      <ul className="max-lg flex w-full items-center justify-around">
        <li>
          <a className="group relative" href="#about">
            <span className="absolute left-[-15px] hidden opacity-0 transition-opacity duration-300 group-hover:opacity-80 sm:block md:block">
              ◈
            </span>
            about
          </a>
        </li>
        <li>
          <a className="group relative" href="#hero">
            <span className="none absolute left-[-15px] hidden opacity-0 transition-opacity duration-300 group-hover:opacity-80 sm:block">
              #
            </span>
            hero
          </a>
        </li>
        <li>
          <a className="group relative" href="#portfolio">
            <span className="absolute left-[-25px] hidden opacity-0 transition-opacity duration-300 group-hover:opacity-80 sm:block md:block">
              &#128449;
            </span>
            portfolio
          </a>
        </li>

        <li>
          <a className="group relative" href="#cat">
            <span className="absolute left-[-15px] hidden opacity-0 transition-opacity duration-300 group-hover:opacity-80 sm:block md:block">
              ★
            </span>
            cat
          </a>
        </li>
        <li>
          <a className="group relative" href="#contacts">
            <span className="absolute left-[-20px] hidden opacity-0 transition-opacity duration-300 group-hover:opacity-80 sm:block md:block">
              ☏
            </span>
            contacts
          </a>
        </li>
      </ul>
    </nav>
  );
}
