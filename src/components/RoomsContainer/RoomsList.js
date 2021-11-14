import React from "react";
import Rooms from "../Rooms";

const RoomsList = ({ rooms }) => {
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((room) => {
          return <Rooms key={room.id} room={room} />;
        })}
      </div>
    </section>
  );
};

export default RoomsList;
