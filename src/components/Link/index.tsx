import { Link as RouterLink } from "react-router-dom";

type LinkProps = {
  text: string;
  to: string;
};

const Link = ({ text, to }: LinkProps) => {
  return (
    <div className="text-white hover:bg-[#1f618d] m-7">
      <RouterLink to={to}>{text}</RouterLink>
    </div>
  );
};

export default Link;
