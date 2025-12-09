import {
  Contacts,
  Experience,
  Header,
  Hero,
  Portfolio,
  Section,
} from "components/index";

import { Provider } from "react-redux";
import { store } from "store/store";

//CONSOLE
console.log(`v: 0.2.1;
  d: 07.12.25
  `);

export default function App() {
  return (
    <Provider store={store}>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="parallax-pattern absolute inset-0" />
      </div>
      <Header />
      <Section id="hero">
        <Hero />
      </Section>
      <Section id="experience">
        <Experience />
      </Section>
      <Section id="portfolio">
        <Portfolio />
      </Section>
      <Section id="contacts">
        <Contacts />
      </Section>
    </Provider>
  );
}
