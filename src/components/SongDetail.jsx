import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return (
      <div style={{ color: "red" }}>
        <strong>Select a song!</strong>
      </div>
    );
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>Title: {song.title}</p>
      <p>Year: {song.date}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.songsSelector };
};

export default connect(mapStateToProps)(SongDetail);
