import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import AlbumLists from "./components/AlbumLists";
import { Routes, Route } from "react-router-dom";
import AlbumDetails from "./components/AlbumDetails";

function App() {
  const [detailsAlbum, setDetailsAlbum] = useState<string[]>([]);

  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<AlbumLists />} />
          <Route path="/:id" element={<AlbumDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
