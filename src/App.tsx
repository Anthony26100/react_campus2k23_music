import React, { useState, useEffect } from "react";
import { Link, Route } from "wouter";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import AlbumLists from "./components/AlbumLists";
import AlbumDetails from "./components/AlbumDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <AlbumLists />

        <AlbumDetails />
      </div>
    </div>
  );
}

export default App;
