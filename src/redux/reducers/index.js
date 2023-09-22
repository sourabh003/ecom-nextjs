import { combineReducers } from "redux";
import auth from "./auth";
import cart from "./cart";
import common from "./common";

const rootReducer = combineReducers({ auth, cart, common });

export default rootReducer;
