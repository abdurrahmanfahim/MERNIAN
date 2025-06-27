import React from "react";

const PlayIconOnModal = ({width=64, height=64, color="white"}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 64 64"
      fill="none"
    >
      <path
        d="M57.0461 30.9053C57.8899 31.3912 57.8899 32.6088 57.0461 33.0947L5.26183 62.9098C4.41973 63.3947 3.36841 62.7869 3.36841 61.8152L3.36841 2.18484C3.36841 1.21313 4.41974 0.605308 5.26184 1.09016L57.0461 30.9053Z"
        fill={color}
      />
    </svg>
  );
};

export default PlayIconOnModal;
