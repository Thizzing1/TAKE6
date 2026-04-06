export const Component1_3_4 = ({ color = "white", className }) => {
  return (
    <svg
      className={`component-1-3-4 ${className}`}
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
