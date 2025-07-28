export default function Header() {
  return (
    <div className="backdrop-blur-xs h-{10rem} fixed top-0 mx-auto flex w-full justify-center bg-black bg-opacity-30 text-stone-200">
      <nav className="flex h-10 w-2/4 justify-between align-middle">
        <a href="#hero">Hero</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#about">About</a>
      </nav>
    </div>
  );
}
