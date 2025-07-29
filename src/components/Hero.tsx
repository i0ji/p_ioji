import heroData from "data/data";

import { Card } from "./ui";
import { nanoid } from "nanoid";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex h-screen w-full snap-start items-center border-red-700 border-l-purple-950 bg-gradient-to-br from-cyan-800 from-5%"
    >
      <div
        style={{ border: "1px solid red" }}
        className="mx-auto flex max-w-screen-2xl items-center justify-center"
      >
        {heroData.map((heroData: heroModel) => (
          <Card key={nanoid()} data={heroData} />
        ))}
      </div>
    </section>
  );
}
