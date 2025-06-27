import React from "react";

const VideoPlayIcon = ({ width = 44, height = 44 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="22"
        cy="22"
        r="21"
        fill="#181828"
        stroke="#41EFFF"
        stroke-width="2"
      />
      <g clip-path="url(#clip0_1_1559)">
        <path
          d="M27.5883 20.4514L18.6508 15.1676C17.9246 14.7385 16.8125 15.1549 16.8125 16.2163V26.7813C16.8125 27.7334 17.8459 28.3073 18.6508 27.8299L27.5883 22.5487C28.3855 22.0789 28.3881 20.9211 27.5883 20.4514Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1559">
          <rect
            width="13"
            height="13"
            fill="white"
            transform="translate(16 15)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default VideoPlayIcon;
