import {
	applyMiddleware,
	createStore
} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducers";

let middleware = [thunk];

if (NODE_ENV === "development") {
	middleware = [ ...middleware, logger()];
}

export default createStore(reducer, applyMiddleware(...middleware));
