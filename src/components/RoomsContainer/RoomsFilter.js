import React, { useContext } from "react";
import { MyContext } from "../../Context/context";
import Title from "../Title";
const RoomsFilter = ({ rooms }) => {
  const {
    type,
    setType,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
    setSortedRooms,
  } = useContext(MyContext);

  const handleChange = (e) => {
    const tempType = e.target.value;
    // setType(tempType);
  };

  //for select options
  //to get unique types==>because there is 13 rooms but there are only four different types
  const getUniqueTypes = (rooms) => {
    let types = [type];
    rooms.map((room) => {
      if (!types.includes(room.type)) {
        types = [...types, room.type];
      }
    });
    return types;
  };
  let uniqueTypes = getUniqueTypes(rooms);

  //to get capacites
  const getCapacities = (rooms) => {
    let capacities = [capacity];
    rooms.map((room) => {
      if (!capacities.includes(room.capacity)) {
        capacities = [...capacities, room.capacity];
      }
    });
    return capacities;
  };
  let uniqueCapacities = getCapacities(rooms);

  //filter Rooms
  let tempRooms = [...rooms];
  const filteredRooms = () => {
    if (type !== "all") {
      tempRooms = rooms.filter((room) => room.type === type);
    }
    return tempRooms;
  };

  const tempItems = filteredRooms();

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select the type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            // value={type}
            className="form-control"
            onChange={handleChange}
          >
            {uniqueTypes.map((type, index) => {
              return (
                <option key={index} value={type}>
                  {type}
                </option>
              );
            })}
          </select>
        </div>
        {/* select guest */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="type"
            // value={type}
            className="form-control"
            onChange={handleChange}
          >
            {uniqueCapacities.map((type, index) => {
              return (
                <option key={index} value={type}>
                  {type}
                </option>
              );
            })}
          </select>
        </div>
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">Room Price ${price}</label>
          <input
            type="range"
            name="price"
            id="price"
            min={minPrice}
            max={maxPrice}
            // value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* room size */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* check box for extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input type="checkbox" name="pets" id="pets" checked={pets} />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
      </form>
    </section>
  );
};

export default RoomsFilter;
