import heroData from "data/data";

import { Card } from "./ui";
import { nanoid } from "nanoid";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex h-screen w-full snap-start items-center justify-center border-l-purple-950 bg-gradient-to-br from-cyan-800 from-5%"
    >
      <div className="mx-auto flex h-[90%] w-full flex-wrap items-center justify-between">
        {heroData.map((item: heroModel) => (
          <Card key={nanoid()} data={item} />
        ))}
      </div>
    </section>
  );
}
