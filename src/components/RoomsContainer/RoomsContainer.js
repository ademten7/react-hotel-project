import React, { useContext } from "react";
import { MyContext } from "../../Context/context";
import NoRooms from "./NoRooms";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";

const RoomsContainer = () => {
  const { rooms, sortedRooms } = useContext(MyContext);
  console.log(rooms);
  console.log(sortedRooms);

  return (
    <div>
      <RoomsFilter rooms={rooms} />
      {sortedRooms.length > 1 ? (
        <RoomsList rooms={sortedRooms} />
      ) : (
        <NoRooms sorry="Sorry there is no room  according to your chooses!!! Please check again" />
      )}
    </div>
  );
};

export default RoomsContainer;
