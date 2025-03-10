import Link from "../Link";

const Header = () => {
  return (
    <div className="flex flex-row gap-10">
      <Link to="/portfolio" text="Portfolio" />
      <Link to="/" text="Home" />
    </div>
  );
};
export default Header;
