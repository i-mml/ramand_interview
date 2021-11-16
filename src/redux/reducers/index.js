import ChangeList from "./changeList";
import authReducer from "./login";
import { combineReducers } from "redux";
import Result from "./result";

//ALSO CAN WRITE LIKE THIS => const allReducers = combineReducers({authReducer,counterReucer})
const allReducers = combineReducers({
  authReducer,
  ChangeList,
  Result,
});

export default allReducers;
