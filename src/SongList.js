import React from "react";
import { useDispatch } from "react-redux";
import { deleteSong } from "./actions";

function SongList(props) {
  let i = 0;
  const data = props.songs;
  const dispatch = useDispatch();

  return data.map((d) => {
    i++;
    return (
      <tr key={i}>
        <td>{d.songTitle}</td>
        <td>{d.songArtist}</td>
        <td>{d.songGenre}</td>
        <td>{d.songRating}</td>
        <td>
          <button id={i} onClick={(event) => dispatch(deleteSong(d, event))}>
            DEL
          </button>
        </td>
      </tr>
    );
  });
}

export default SongList;
