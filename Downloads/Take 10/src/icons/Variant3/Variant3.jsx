export const Variant3 = ({ color = "white", className }) => {
  return (
    <svg
      className={`variant-3 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M4.5 10H16M16 10L11.5 5.5M16 10L11.5 14.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    </svg>
  );
};
