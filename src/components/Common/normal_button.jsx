import React from "react";

const Button = ({
  onClick,
  href,
  target,
  referrerPolicy,
  color = "black",
  children,
}) => {
  const colorClass = color === "black" ? "bg-black" : "bg-blue";

  const handleClick = (event) => {
    if (onClick) {
      onClick();
    }
    // Handle any additional logic here if needed
  };

  if (href) {
    return (
      <a
        href={href}
        target={target ? target : undefined}
        referrerPolicy={referrerPolicy}
        className={`rounded-full text-white font-bold text-xs px-3 py-2 hover:opacity-90 ${colorClass}`}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button
        onClick={handleClick}
        className={`rounded-full text-white font-bold text-xs px-3 py-2 hover:opacity-90 ${colorClass}`}
      >
        {children}
      </button>
    );
  }
};

export default Button;
