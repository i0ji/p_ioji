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
    <div>
      {/* <div
        id="scroll-layout"
        className="no-scrollbar h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth"
      > */}
        <Header />
        <About />
        <Hero />
        <Portfolio />
        <Cat />
        <Contacts />
      </div>
    // </div>
  );
}
