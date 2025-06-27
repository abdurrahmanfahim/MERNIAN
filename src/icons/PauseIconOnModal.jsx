import React from "react";

const PauseIconOnModal = ({width=64, height=64, color="white"}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 64 64"
      fill="none"
    >
      <rect
        x="10.6667"
        y="2.66663"
        width="16"
        height="58.6667"
        rx="1.26"
        fill={color}
      />
      <rect
        x="40"
        y="2.66663"
        width="16"
        height="58.6667"
        rx="1.26"
        fill={color}
      />
    </svg>
  );
};

export default PauseIconOnModal;
