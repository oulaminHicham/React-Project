import { legacy_createStore } from "redux";
import foodReducer from "./Reducers";

export const store = legacy_createStore(foodReducer);
