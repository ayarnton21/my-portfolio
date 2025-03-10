import { useLocation } from "react-router-dom";
import Link from "../Link";

const Header = () => {
  const location = useLocation();

  const isOnPortfolio = location.pathname.includes("/portfolio");
  const isOnCv = location.pathname.includes("/cv");
  const isOnHome = !isOnPortfolio && !isOnCv;

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Link isSelected={isOnHome} to="/" text="Home" />
      <Link isSelected={isOnPortfolio} to="/portfolio" text="Portfolio" />
      <Link isSelected={isOnCv} to="/cv" text="CV" />
    </div>
  );
};
export default Header;
