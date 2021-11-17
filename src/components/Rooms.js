import React from "react";
import { Link } from "react-router-dom";

const Rooms = ({ room }) => {
  const { name, slug, images, price } = room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0]} alt="" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>pro night</p>
        </div>
        <Link className="btn-prima room-link" to={`/rooms/${slug}`}>
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
};

export default Rooms;
