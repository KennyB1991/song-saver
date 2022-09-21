import deleteSongReducer from "./deleteSong";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  deleteSong: deleteSongReducer,
});

export default allReducers;
