import React from "react";

const CircleIcon = ({width=5, height=5, color='#41EFFF'}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 5 5"
      fill="none"
    >
      <circle cx="2.5" cy="2.5" r="2.5" fill={color} />
    </svg>
  );
};

export default CircleIcon;
