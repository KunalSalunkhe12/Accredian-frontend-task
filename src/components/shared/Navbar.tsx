import ReferDailog from "./ReferDailog";

const Navbar = () => {
  return (
    <nav className="py-4 container mb-8 flex justify-between">
      <img src="/images/logo.svg" alt="accredian logo" />
      <ReferDailog />
    </nav>
  );
};

export default Navbar;
