import { motion } from "framer-motion";
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
    <motion.div
      layoutScroll
      className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth"
    >
      <Header />
      <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        <About />
        <Hero />
        <Portfolio />
        <Cat />
        <Contacts />
      </div>
    </motion.div>
  );
}
