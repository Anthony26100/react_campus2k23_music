import React, { useEffect, useState } from "react";
import MusicData from "../api/albums.json";
import { Link } from "react-router-dom";

// interface Music {
//   feed: {
//     results: {
//       artistName: string;
//       id: string;
//       name: string;
//       releaseDate: string;
//       kind: string;
//       artistId: string;
//       artistUrl: string;
//       contentAdvisoryRating: any;
//       artworkUrl100: string;
//     };
//   };
// }

export default function AlbumLists() {
  const [music, setMusic] = useState(MusicData);
  //const resultMusic = Music.feed.results;

  const allMusic = music.feed.results.map((albums, key) => {
    return (
      <div className="card " key={key}>
        <img src={albums.artworkUrl100} />
        <div className="card-body" key={albums.id}>
          <h5 className="card-title">{albums.name}</h5>
          <p className="card-text">{albums.releaseDate}</p>
          <Link to={albums.id}>{albums.artistName}</Link>
          {/* <a href={albums.id}>{albums.artistName}</a> */}
        </div>
      </div>
    );
  });

  // const allMusic = resultMusic.map((albums, key) => {
  //   return (
  //     <div className="card " key={key}>
  //       <img src={albums.artworkUrl100} />
  //       <div className="card-body" key={albums.id}>
  //         <h5 className="card-title">{albums.name}</h5>
  //         <p className="card-text">{albums.releaseDate}</p>
  //         <a href={albums.id}>{albums.artistName}</a>
  //       </div>
  //     </div>
  //   );
  // });

  return (
    <div className="container text-center">
      <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">{allMusic}</div>
    </div>
  );
}
