import Reveal from "../helpers/Reveal";

export default function Two() {
  return (
    <>
      <section
        id="two"
        className="lg:pl-20 h-[100dvh] pl-5 relative -z-10 px-5 flex flex-col justify-center lg:w-1/2 text-white"
      >
        <Reveal delay={0.5}>
          <h2 className="text-2xl lg:text-6xl font-bold">
            The Evolution of Submarines
          </h2>
          <p className="lg:text-xl mt-5 mb-10 max-w-xl">
            Submarines have come a long way since their early designs in the
            17th century. The first military submarine, the{" "}
            <span className="font-bold">Turtle (1775)</span>, was a small,
            hand-powered vessel used in the American Revolutionary War.
          </p>
        </Reveal>
      </section>
    </>
  );
}
