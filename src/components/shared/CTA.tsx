import ReferDailog from "./ReferDailog";

type CTAProps = {
  title: string;
  description: string;
};

const CTA = ({ title, description }: CTAProps) => {
  return (
    <section className="bg-black-custom text-white p-8 rounded-lg text-center mt-8">
      <h2 className="mb-2">{title}</h2>
      <p className="text-sm md:text-base mb-6">{description}</p>
      <div className="mx-auto md:mx-0">
        <ReferDailog />
      </div>
    </section>
  );
};

export default CTA;
