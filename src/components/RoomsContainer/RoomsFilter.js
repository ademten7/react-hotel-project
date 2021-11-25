import React, { useContext, useRef } from "react";
import { MyContext } from "../../Context/context";
import Title from "../Title";

const RoomsFilter = ({ rooms }) => {
  const formRef = useRef();
  const {
    type,
    setType,
    setCapacity,
    capacity,
    price,
    setPrice,
    minPrice,
    maxPrice,
    minSize,
    maxSize,

    sortedRooms,
    setSortedRooms,
  } = useContext(MyContext);

  console.log(sortedRooms);

  let tempRooms = [...rooms];
  console.log(tempRooms);
  const getDataFromForm = (e) => {
    e.preventDefault();
    setType(formRef.current.type.value);
    setCapacity(formRef.current.capacity.value);
    // setPrice(formRef.current.price.value);

    if (type !== "select a room") {
      tempRooms = rooms.filter((room) => room.type === type);
    }
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }
    if (price !== maxPrice) {
      tempRooms = tempRooms.filter((room) => room.price <= price);
    }
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );

    // if (formRef.current.breakfast.checked) {
    //   tempRooms = tempRooms.filter((room) => room.breakfast === true);
    // }
    // if (formRef.current.pets.checked) {
    //   tempRooms = tempRooms.filter((room) => room.pets === true);
    // }

    setSortedRooms(tempRooms);
    console.log(sortedRooms);
  };

  //for select options
  //to get unique types==>because there is 13 rooms but there are only four different types
  // const getUniqueTypes = (rooms) => {
  //   let types = [type];
  //   rooms.map((room) => {
  //     if (!types.includes(room.type)) {
  //       types.push(room.type);
  //     }
  //     console.log(types);
  //   });
  //   return types;
  // };
  // let uniqueTypes = getUniqueTypes(rooms);
  // console.log(uniqueTypes);

  //to get unique capacites
  // const getCapacities = (rooms) => {
  //   let capacities = [capacity];
  //   rooms.map((room) => {
  //     if (!capacities.includes(room.capacity)) {
  //       capacities = [...capacities, room.capacity];
  //     }
  //   });
  //   return capacities;
  // };
  // let uniqueCapacities = getCapacities(rooms);

  //filter Rooms

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form ref={formRef} onSubmit={getDataFromForm} className="filter-form">
        {/* select the type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select name="type" id="type" className="form-control">
            <option value="select a room" selected>
              select a room
            </option>
            <option value="single">single</option>
            <option value="double">double</option>
            <option value="family">family</option>
            <option value="presidential">presidential</option>
            {/* {uniqueTypes.map((type, index) => {
              return (
                <option key={index} value={type}>
                  {type}
                </option>
              );
            })} */}
          </select>
        </div>
        {/* select guest */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select name="capacity" id="capacity" className="form-control">
            <option selected value="1">
              1
            </option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="10">10</option>
          </select>
        </div>
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">Room Price ${price}</label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="range"
            name="price"
            id="price"
            min={minPrice}
            max={maxPrice}
            // value={price}
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
              // value={minSize}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              // value={maxSize}
              className="size-input"
            />
          </div>
        </div>
        {/* check box for extras */}
        {/* <div className="form-group">
          <div className="single-extra">
            <input type="checkbox" name="breakfast" id="breakfast" />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input type="checkbox" name="pets" id="pets" />
            <label htmlFor="pets">pets</label>
          </div>
        </div> */}
        <div>
          <button className="btn-prima" type="submit">
            Search
          </button>
        </div>
      </form>
    </section>
  );
};

export default RoomsFilter;
