/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const TransparentAnimation2 = ({ className }) => {
  return (
    <svg
      className={`transparent-animation-2 ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M9 26C12.3137 26 15 21.5228 15 16C15 10.4772 12.3137 6 9 6C5.68629 6 3 10.4772 3 16C3 21.5228 5.68629 26 9 26Z"
        fill="#D4D3FD"
      />

      <mask
        className="mask"
        height="32"
        id="mask0_131_461"
        maskUnits="userSpaceOnUse"
        width="64"
        x="-16"
        y="0"
      >
        <path className="path" d="M48 0H-16V32H48V0Z" fill="white" />
      </mask>

      <g className="g" mask="url(#mask0_131_461)">
        <path
          className="path"
          d="M21 29C25.4183 29 29 23.1797 29 16C29 8.8203 25.4183 3 21 3C16.5817 3 13 8.8203 13 16C13 23.1797 16.5817 29 21 29Z"
          fill="#9896FF"
        />
      </g>
    </svg>
  );
};
