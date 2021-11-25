import React, { useState, useEffect } from "react";
import { MyContext } from "./context";
import { array } from "../data";

const Container = (props) => {
  const [user, setUser] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [type, setType] = useState("select a room");
  const [capacity, setCapacity] = useState(1);
  const [price, setPrice] = useState(0);
  const [minPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(600);
  const [minSize] = useState(0);
  const [maxSize, setMaxSize] = useState(0);
  const [breakfast] = useState(false);
  const [pets] = useState(false);
  useEffect(() => {
    let rooms = formatData(array);
    //console.log(rooms);
    let newFeaturedRooms = rooms.filter((room) => room.featured);
    // console.log(newFeaturedRooms);
    setRooms(rooms);
    setSortedRooms(rooms);
    setFeaturedRooms(newFeaturedRooms);

    let maxPrice = Math.max(...rooms.map((room) => room.price));
    setPrice(maxPrice);
    setMaxPrice(maxPrice);
    let maxSize = Math.max(...rooms.map((room) => room.size));
    setMaxSize(maxSize);
  }, []);
  //to create a more organize array with 13 object(to put  id and images inside the fields object in array files)
  //the array files is too complex.
  const formatData = (items) => {
    //return a new array with 13 field object
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      //images is a nested object I want to put them in single array
      //it returns a new array with only images
      let images = item.fields.images.map((image) => image.fields.file.url);

      //to return a new field object
      let room = { ...item.fields, images, id };
      return room;
    });

    return tempItems; //this is my new array.
  };

  //to get Single Room
  const getRoom = (slug) => {
    const room = rooms.find((room) => room.slug === slug); //it finds the first match room
    return room;
  };

  console.log(rooms);
  return (
    <MyContext.Provider
      value={{
        user,
        setUser,
        rooms,
        setRooms,
        sortedRooms,
        setSortedRooms,
        featuredRooms,
        setFeaturedRooms,
        getRoom,
        type,
        setType,
        capacity,
        setCapacity,
        price,
        setPrice,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default Container;
