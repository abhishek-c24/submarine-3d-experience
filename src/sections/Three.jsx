import Reveal from "../helpers/Reveal";

export default function Three() {
  return (
    <>
      <div
        id="three"
        className="lg:pr-20 h-[100dvh] pr-5 px-5 relative -z-10 flex flex-col justify-center ml-auto text-right lg:w-1/2 text-white"
      >
        <div>
          <Reveal delay={0.5}>
            <h2 className="lg:text-6xl text-2xl uppercase font-bold">
              How Submarines <br /> Stay Underwater
            </h2>
            <p className="lg:text-xl mt-5 mb-10 max-w-xl ml-auto">
              Submarines use ballast tanks to control their buoyancy. When they
              need to dive, the tanks are filled with water, making the
              submarine heavier than the surrounding water. To surface,
              compressed air is pumped into the tanks, forcing the water out and
              increasing buoyancy.
            </p>
          </Reveal>
        </div>
      </div>
    </>
  );
}
