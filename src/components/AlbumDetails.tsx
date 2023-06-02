import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MusicData from "../api/albums.json";



function AlbumDetails() {
  // const { music, setMusic } = props;
  const { id } = useParams();

  const [recupMusic, setRecupMusic] = useState<any>();
 
  useEffect(() => {

    const selectMusic = MusicData.feed.results.find((music) => music.id === id);

    setRecupMusic(selectMusic)

  }, [id]);

  return <>
    <div className="container">
      <h1 style={{textAlign: "center"}}><strong>Titre of soung : {recupMusic?.name}</strong></h1>
        <div className="card"  key={id}>
          <img src={recupMusic?.artworkUrl100} />
          <div className="card-body" key={recupMusic?.id}>
          <h5 className="card-title">{recupMusic?.name}</h5>
            <p className="card-text nav-dec">{recupMusic?.artistName}</p>
          <p className="card-text">{recupMusic?.releaseDate}</p>
          {/*  @ts-ignore */ }
          <p className="card-text">{recupMusic?.genres.map(x => x.name)}</p>
          </div>
        </div>
      </div>
  </>;
}

export default AlbumDetails;
