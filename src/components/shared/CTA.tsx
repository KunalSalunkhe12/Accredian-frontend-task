import { Button } from "../ui/button";

const CTA = () => {
  return (
    <section className="bg-radial-gradient p-8 rounded-lg text-center mt-8">
      <h2 className="mb-2">Ready to Learn and Earn?</h2>
      <p className="text-sm md:text-base mb-6">
        Get started with Accredian and earn rewards up to Rs. 15,000
      </p>
      <Button className="bg-blue w-36 shadow-lg">Refer Now</Button>
    </section>
  );
};

export default CTA;
