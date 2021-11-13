import React from "react";

const Hero = ({ children, hero }) => {
  return <header className={hero}>{children}</header>;
};

// //I dont need to use for other pages props.
// Hero.defaultProps = {
//   hero: "defaultHero",
// };

export default Hero;
