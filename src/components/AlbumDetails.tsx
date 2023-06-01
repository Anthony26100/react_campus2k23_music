import React from "react";
import { useParams } from "react-router-dom";

// interface Props {
//   music: string;
//   setMusic: React.Dispatch<React.SetStateAction<string[]>>;
// }

function AlbumDetails() {
  // const { music, setMusic } = props;
  const { id } = useParams();
  return <>bonjour details albums {id}</>;
}

export default AlbumDetails;
