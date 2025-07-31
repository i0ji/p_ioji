export default function Header() {
  return (
    <div className="backdrop-blur-xs h-{10rem} fixed top-0 mx-auto flex w-full justify-center bg-black bg-opacity-30 text-stone-200">
      <nav className="flex h-10 w-2/4 justify-between align-middle">
        <ul className="flex w-full items-center justify-around">
          <li>
            <a className="group relative" href="#hero">
              <span className="absolute left-[-15px] opacity-0 transition-opacity duration-300 group-hover:opacity-80">
                #
              </span>
              Hero
            </a>
          </li>
          <li>
            <a className="group relative" href="#portfolio">
              <span className="absolute left-[-15px] opacity-0 transition-opacity duration-300 group-hover:opacity-80">
                #
              </span>
              Portfolio
            </a>
          </li>
          <li>
            <a className="group relative" href="#about">
              <span className="absolute left-[-15px] opacity-0 transition-opacity duration-300 group-hover:opacity-80">
                #
              </span>
              About
            </a>
          </li>
          <li>
            <a className="group relative" href="#cat">
              <span className="absolute left-[-15px] opacity-0 transition-opacity duration-300 group-hover:opacity-80">
                ★
              </span>
              Cat
            </a>
          </li>
          <li>
            <a className="group relative" href="#contacts">
              <span className="absolute left-[-20px] opacity-0 transition-opacity duration-300 group-hover:opacity-80">
                ☏
              </span>
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
