import "./index.scss";
import {
  Header,
  Hero,
  About,
  Portfolio,
  Cat,
  Contacts,
} from "components/index";

export default function App() {
  return (
    <>
      <Header />
      <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        <About />
        <Hero />
        <Portfolio />
        <Cat />
        <Contacts />
      </div>
    </>
  );
}