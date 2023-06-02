import React, { useEffect, useState } from "react";
import MusicData from "../api/albums.json";
import { Link } from "react-router-dom";

export default function AlbumLists() {
  const resultMusic = MusicData.feed.results;

  const allMusic = resultMusic.map((albums, key) => {
    return (
      <div className="card " key={key}>
        <img src={albums.artworkUrl100} />
        <div className="card-body" key={albums.id}>
          <h5 className="card-title">{albums.name}</h5>
          <p className="card-text">{albums.releaseDate}</p>
          <Link to={`${albums.id}`}>{albums.artistName}</Link>
        </div>
      </div>
    );
  });

  return (
    <div className="container text-center">
      <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">{allMusic}</div>
    </div>
  );
}
