import React, { useContext } from "react";
import { MyContext } from "../../Context/context";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";

const RoomsContainer = () => {
  const { rooms, sortedRooms } = useContext(MyContext);
  console.log(rooms);
  console.log(sortedRooms);

  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
};

export default RoomsContainer;
