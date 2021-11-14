import React, { useContext } from "react";
import { MyContext } from "../Context/context";

import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

const SingleRoom = () => {
  const params = useParams();
  const { rooms } = useContext(MyContext);
  let singleRoom = rooms.find((room) => room.slug === params.slug);

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = singleRoom;

  return (
    <>
      {singleRoom && (
        <Hero hero="roomsHero">
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to room
            </Link>
          </Banner>
        </Hero>
      )}
      <section className="single-room">
        <div className="single-room-images">
          {images.map((image, index) => {
            return <img key={index} src={image} />;
          })}
        </div>

        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price : ${price}</h6>
            <h6>size : ${size} SQFT</h6>
            <h6>
              max capacity :{" "}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>Pet : {pets ? "allowed" : "Not Allowed"}</h6>
            <h6>{breakfast && "free breakfast included "}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras:</h6>
        <ul className="extras">
          {extras.map((item, index) => {
            return <li key={index}>-{item}</li>;
          })}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;
