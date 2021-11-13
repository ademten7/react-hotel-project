import React, { useState, useEffect } from "react";
import { MyContext } from "./context";
import datas from "../data";

const Container = (props) => {
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);

  useEffect(() => {
    let rooms = formatData(datas);
    //console.log(rooms);
    let newFeaturedRooms = rooms.filter((room) => room.featured);
    // console.log(newFeaturedRooms);
    setRooms(rooms);
    setSortedRooms(rooms);
    setFeaturedRooms(newFeaturedRooms);
  }, []);
  //to create a more organize array with 13 object(to put  id and images inside the fields object in data files)
  //the data files is too complex.
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

  //console.log(datas);
  return (
    <MyContext.Provider
      value={{
        rooms,
        setRooms,
        sortedRooms,
        setSortedRooms,
        featuredRooms,
        setFeaturedRooms,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default Container;
