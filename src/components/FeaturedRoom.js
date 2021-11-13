import React, { useContext } from "react";
import { MyContext } from "../Context/context";
import Rooms from "./Rooms";
import Title from "./Title";

const FeaturedRoom = () => {
  const { featuredRooms } = useContext(MyContext);
  console.log(featuredRooms);

  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {featuredRooms.map((room) => {
          return <Rooms key={room.id} room={room} />;
        })}
      </div>
    </section>
  );
};

export default FeaturedRoom;
