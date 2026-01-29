import "./style.css";

export const Extensiveaudithero = ({
  text = "Blog",
  className,
  elementFromTop = "/img/1stline-from-top-1024.png",
  elementNdlineFromTop = "/img/2ndline-from-top-1024.png",
  elementRdlineFromTop = "/img/3rdline-from-top-1024.png",
}) => {
  return (
    <div className={`extensiveaudithero ${className}`}>
      <img
        className="element-from-top"
        alt="Element from top"
        src={elementFromTop}
      />

      <img
        className="element-ndline-from-top"
        alt="Element from top"
        src={elementNdlineFromTop}
      />

      <img
        className="element-rdline-from-top"
        alt="Element from top"
        src={elementRdlineFromTop}
      />
    </div>
  );
};
