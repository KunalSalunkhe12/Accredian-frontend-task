import ReferDailog from "./ReferDailog";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-radial-gradient rounded-3xl shadow-xl">
      <div className="flex flex-col space-y-3 md:space-y-6 p-8 md:p-10 lg:p-16 size-full text-center md:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold">
          Discover Knowledge & Rewards
        </h1>
        <p className="text-xl lg:text-3xl font-semibold">
          Earn Rewards Up to{" "}
          <span className="text-blue font-bold">Rs. 15,000</span>
        </p>
        <div className="mx-auto md:mx-0">
          <ReferDailog />
        </div>
      </div>
      <div className="md:h-[323px]">
        <img src="/images/hero-img.svg" alt="Hero image" />
      </div>
    </section>
  );
};

export default Hero;
