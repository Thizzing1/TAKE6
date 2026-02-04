import "./style.css";

export const Ghohero = ({
  text = "Blog",
  className,
  heroRevealClassName,
  heroReveal = "/img/hero-reveal-animation-1024.png",
}) => {
  return (
    <div className={`ghohero ${className}`}>
      <img
        className={`hero-reveal ${heroRevealClassName}`}
        alt="Hero reveal"
        src={heroReveal}
      />
    </div>
  );
};
