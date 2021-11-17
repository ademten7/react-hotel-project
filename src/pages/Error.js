import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";

const Error = () => {
  return (
    <Hero hero="defaultHero">
      <Banner title="404" subtitle="page not found">
        <Link to="/" className="btn-prima">
          Return Home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;
