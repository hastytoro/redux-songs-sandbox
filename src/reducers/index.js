import { combineReducers } from "redux";

// Reducers (departments):
const songsReducer = () => {
  return [
    { title: "no scrubs", duration: "4:05" },
    { title: "macarena", duration: "2:05" },
    { title: "all stars", duration: "5:05" },
    { title: "teen spirit", duration: "3:05" },
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
