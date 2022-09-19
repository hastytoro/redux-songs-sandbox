import React from "react";
import { connect } from "react-redux";

const SongList = (props) => {
  console.log(props);
  return (
    <div>
      <h1>List</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
