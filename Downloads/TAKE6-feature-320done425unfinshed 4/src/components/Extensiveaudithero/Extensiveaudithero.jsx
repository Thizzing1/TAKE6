import "./style.css";

export const Extensiveaudithero = ({
  text = "Blog",
  className,
  elementFromTop = "/img/1stline-from-top-325.png",
  elementFromTopClassName,
  elementNdlineFromTop = "/img/2ndline-from-top-325.png",
  elementRdlineFromTop = "/img/3rdline-from-top-325.png",
}) => {
  return (
    <div className={`extensiveaudithero ${className}`}>
      <img
        className="element-from-top"
        alt="Element from top"
        src={elementFromTop}
      />

      <img
        className={`element-ndline-from-top ${elementFromTopClassName}`}
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
