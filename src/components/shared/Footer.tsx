import { programOptions } from "@/utils/validation";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="bg-black-custom mt-20 text-white">
      <div className="container py-8">
        <div className="flex justify-between">
          <img src="/images/accredainnew.svg" alt="accredian logo" />
          <div className="text-center">
            <Button className="bg-blue md:w-56 text-xs md:text-base hover:bg-transparent hover:text-blue hover:border hover:border-blue">
              Schedule a Call
            </Button>
            <p className="text-[10px] mt-2">Speak with our Learning Advisor</p>
          </div>
        </div>
        <hr className="my-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl mb-3">Programs</h3>
            <div className="space-y-4 text-sm">
              {programOptions.map((program) => (
                <p key={program}>{program}</p>
              ))}
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <h3 className="text-xl mb-3">Contact Us</h3>
            <p>Email us (For Data Science Queries): admissions@accredian.com</p>
            <p>Email us (For Product Management Queries):pm@accredian.com</p>
            <p>Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)</p>
            <p>Product Management Admission Helpline:+91 9625811095</p>
            <p>
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
              Gurugram, Haryana 122015
            </p>
          </div>
          <div className="lg:justify-self-end">
            <h3 className="text-xl mb-3">Accredian</h3>
            <div className="space-y-2 text-sm">
              <p>About</p>
              <p>Career</p>
              <p>Blog</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Terms Of Service</p>
            </div>
          </div>
        </div>
        <p className="text-[10px] text-center mt-10">
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
