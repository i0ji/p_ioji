export default function AboutCard({ data }: { data: aboutModel }) {
  return (
    <div
      className="mx-auto flex h-[40vh] w-[40vw] transform flex-col items-center justify-around rounded-lg border-2 border-solid border-stone-300 bg-transparent p-4 text-stone-300 transition-transform duration-200 ease-linear hover:scale-[1.01] sm:h-[50vh] md:w-[60vw] lg:h-[80vh] lg:w-[30vw] xl:h-[60vh] 2xl:h-[50vh] 2xl:w-[30vw]"
      data-carousel-item
    >
      <h3>{data.title}</h3>
      {data.description}
    </div>
  );
}
