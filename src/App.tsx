import "./index.scss";
import { Header, Hero, About, Portfolio } from "components/index";

function App() {
  return (
    <>
      <Header />
      <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        <Hero />
        <Portfolio />
        <About />
      </div>
    </>
  );
}

export default App;
