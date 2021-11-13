import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import FeaturedRoom from "../components/FeaturedRoom";
import Hero from "../components/Hero";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <Hero hero="defaultHero">
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRoom />
    </>
  );
};

export default Home;
