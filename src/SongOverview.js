import React, { Component } from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";

class SongOverview extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
    };
  }

  addSong = (song) => {
    this.setState({ songs: song });
  };

  render() {
    return (
      <div>
        <SongForm addSong={this.addSong} />
        <table className="song-list">
          <thead className="song-header">
            <tr>
              <th className="song-row__item">Song</th>
              <th className="song-row__item">Artist</th>
              <th className="song-row__item">Genre</th>
              <th className="song-row__item">Rating</th>
              <th>X</th>
            </tr>
          </thead>
          <tbody className="song-body">
            <SongList songs={this.state.songs} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default SongOverview;
