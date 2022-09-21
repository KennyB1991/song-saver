import React, { Component } from "react";

let songList = [];

class SongForm extends Component {
  constructor() {
    super();
    this.state = {
      songTitle: "",
      songArtist: "",
      songGenre: "Rock",
      songRating: "1",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    songList.push(this.state);
    this.props.addSong(songList);
  }

  render() {
    return (
      <form className="song-form" onSubmit={this.handleSubmit}>
        <input
          className="song-form-input"
          type="text"
          value={this.state.songTitle}
          name="songTitle"
          placeholder="Song Title"
          onChange={this.handleChange}
        />
        <input
          className="song-form-input"
          type="text"
          value={this.state.songArtist}
          name="songArtist"
          placeholder="Artist"
          onChange={this.handleChange}
        />
        <select
          className="song-form-input"
          value={this.state.songGenre}
          name="songGenre"
          onChange={this.handleChange}
        >
          <option value="Rock">Rock</option>
          <option value="Metal">Metal</option>
          <option value="Jazz">Jazz</option>
          <option value="Soundtrack">Soundtrack</option>
          <option value="Chiptune">Chiptune</option>
          <option value="Electronic">Electronic</option>
          <option value="Avant Garde">Avant Garde</option>
        </select>
        <select
          className="song-form-input"
          value={this.state.songRating}
          name="songRating"
          onChange={this.handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button className="song-form-button">Add Song</button>
      </form>
    );
  }
}

export default SongForm;
