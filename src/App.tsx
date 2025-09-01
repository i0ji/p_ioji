import "./index.scss";

import {
  Header,
  Experience,
  Hero,
  Portfolio,
  Contacts,
} from "components/index";

export default function App() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="parallax-pattern absolute inset-0" />
      </div>
      <Header />
      <Hero />
      <Experience />
      <Portfolio />
      <Contacts />
    </>
  );
}
