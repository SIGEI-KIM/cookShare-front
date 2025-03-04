import React from "react";
import { Link } from "react-scroll";

const CustomLink = ({
  to,
  children,
  smooth = true,
  duration = 500,
  className = "",
  style = {},
  onCLick,
}) => {
  return (
    <Link
      to={to}
      smooth={smooth}
      duration={duration}
      className={className}
      style={style}
      onClick={onCLick}>
        
      {children}
    </Link>
  );
};

export default CustomLink;
