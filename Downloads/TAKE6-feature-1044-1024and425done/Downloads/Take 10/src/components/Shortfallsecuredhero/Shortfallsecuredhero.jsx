import "./style.css";

export const Shortfallsecuredhero = ({
  text = "Blog",
  className,
  wholeThingShould = "/img/whole-thing-should-turn-1024.png",
  vector = "/img/vector-77.svg",
  img = "/img/vector-78.svg",
}) => {
  return (
    <div className={`shortfallsecuredhero ${className}`}>
      <img
        className="whole-thing-should"
        alt="Whole thing should"
        src={wholeThingShould}
      />

      <div className="group-41">
        <img className="vector-40" alt="Vector" src={vector} />

        <img className="vector-41" alt="Vector" src={img} />
      </div>
    </div>
  );
};
