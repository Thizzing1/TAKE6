import "./style.css";

export const Earnhero = ({
  text = "Blog",
  className,
  beatlikeaheartbeatClassName,
  beatlikeaheartbeat = "/img/beatlikeaheartbeat-animation-1024.png",
}) => {
  return (
    <div className={`earnhero ${className}`}>
      <img
        className={`beatlikeaheartbeat ${beatlikeaheartbeatClassName}`}
        alt="Beatlikeaheartbeat"
        src={beatlikeaheartbeat}
      />
    </div>
  );
};
