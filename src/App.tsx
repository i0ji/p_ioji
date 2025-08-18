import "./index.scss";

import {
  Header,
  Experience,
  Hero,
  Portfolio,
  Cat,
  Contacts,
} from "components/index";
import { useSelector } from "react-redux";
import { useViewport } from "services/useViewport";
import { RootState } from "store/store";

export default function App() {
  const screenType = useSelector((state: RootState) => state.view.screenType);

  console.log(screenType);

  useViewport();

  return (
    <>
      <Header />
      <Hero />
      <Experience />
      <Portfolio />
      <Cat />
      <Contacts />
    </>
  );
}
