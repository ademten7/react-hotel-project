import React from "react";

const Banner = ({ children, title, subtitle }) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div>
        <p>{subtitle}</p>
      </div>
      {children}
    </div>
  );
};

export default Banner;
