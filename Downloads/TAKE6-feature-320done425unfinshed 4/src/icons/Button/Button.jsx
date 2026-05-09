export const Button = ({ className }) => {
  return (
    <svg
      className={`button ${className}`}
      fill="none"
      height="52"
      viewBox="0 0 52 52"
      width="52"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M19 25.5H26H33" fill="black" />

      <path
        className="path"
        d="M19 25.5H26H33"
        stroke="#1A88F8"
        strokeLinecap="round"
        strokeWidth="2"
      />

      <path className="path" d="M26 18.5V25.5V32.5" fill="black" />

      <path
        className="path"
        d="M26 18.5V25.5V32.5"
        stroke="#1A88F8"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
};
