import { createStore } from "redux";
import allReducers from "../reducers";
// STORE
const MyStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default MyStore;
