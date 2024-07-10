import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="bg-black-custom mt-20 text-white">
      <div className="container py-8">
        <div className="flex justify-between">
          <img src="/images/accredainnew.svg" alt="accredian logo" />
          <div className="text-center">
            <Button className="bg-blue md:w-56 text-xs md:text-base">
              Schedule a Call
            </Button>
            <p className="text-[10px] mt-2">Speak with our Learning Advisor</p>
          </div>
        </div>
        <hr className="my-8" />
        <p className="text-[10px] text-center">
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
