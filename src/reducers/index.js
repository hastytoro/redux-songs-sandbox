import { combineReducers } from "redux";

// Reducers (departments):
const songsReducer = () => {
  return [
    { title: "No Time to Die", date: "2021" },
    { title: "Spectre", date: "2015" },
    { title: "Skyfall", date: "2012" },
    { title: "Quantum of Solace", date: "2008" },
    { title: "Casino Royale", date: "2006" },
  ];
};

const songsSelector = (song = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return song;
};

export default combineReducers({
  songs: songsReducer,
  songsSelector: songsSelector,
});
