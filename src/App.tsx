import "./index.scss";
import { Header, Hero, About, Portfolio } from "components/index";

function App() {
  return (
    <>
      <Header />
      <div className="snap-y h-screen overflow-y-scroll snap-mandatory scroll-smooth">
        <Hero />
        <Portfolio />
        <About />
      </div>
    </>
  );
}

export default App;
