import { Link as RouterLink } from "react-router-dom";
import cn from "classnames";

type LinkProps = {
  text: string;
  to: string;
  isSelected: boolean;
};

const Link = ({ text, to, isSelected }: LinkProps) => {
  return (
    <div className="text-white">
      <RouterLink
        className={cn("text-white hover:bg-[#1f618d]  rounded !px-6 !py-1", {
          "bg-[#1f618d]": isSelected,
        })}
        to={to}
      >
        {text}
      </RouterLink>
    </div>
  );
};

export default Link;
