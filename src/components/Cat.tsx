import photo1 from "assets/cat/1.JPG";

export default function Cat() {
  return (
    <section
      id="cat"
      className="justify-betwee h-screen w-full snap-start border-l-purple-950 bg-gradient-to-br from-cyan-800 from-5%"
    >
      <div className="mx-auto flex h-full max-w-screen-xl flex-col items-center justify-center">
        <h6>Let me introduce:</h6>
        <h1>Ovtsa!</h1>
        <img
          className="w-1/2 rounded-e-full rounded-s-full"
          src={photo1}
          alt="My lovely!"
        />
      </div>
    </section>
  );
}
