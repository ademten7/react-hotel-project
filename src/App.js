import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/rooms/" element={<Rooms />} />
        <Route exact path="/rooms/:slug" element={<SingleRoom />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
