import React from "react";
import { Link } from "react-router-dom";
import './Button.css'

interface ButtonProps {
  to: string;
  label: string;
  image?: string;
  backgroundColor?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  to,
  label,
  image,
  backgroundColor,
  onClick,
}) => {
  return (
    <Link
      to={to}
      className="button"
      style={{ backgroundColor: backgroundColor }}
      onClick={onClick}
      type="button"
    >
      <h2>{label}</h2>
      {image && <img src={image} alt="icon" />}
    </Link>
  );
};

export default Button;
