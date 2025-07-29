import heroData from "data/data";

import { Card } from "./ui";
import { nanoid } from "nanoid";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen w-full snap-start justify-between border-l-purple-950 bg-gradient-to-br from-cyan-800 from-5%"
    >
      <div className="mx-auto flex-wrap flex  h-full max-w-screen-xl items-center justify-around">
        {heroData.map((heroData: heroModel) => (
          <Card key={nanoid()} data={heroData} />
        ))}
      </div>
    </section>
  );
}
