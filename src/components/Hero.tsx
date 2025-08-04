import heroData from "data/data";

import { Card } from "ui/index";
import { nanoid } from "nanoid";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex h-screen w-full snap-start flex-col items-center justify-center border-l-purple-950 bg-gradient-to-br from-cyan-800 from-5% pt-10 2xl:flex-row"
    >
      {heroData.map((item: heroModel) => (
        <Card key={nanoid()} data={item} />
      ))}
    </section>
  );
}
