import {
	applyMiddleware,
	createStore
} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducers";

let middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
	middleware = [ ...middleware, logger()];
}

export default createStore(reducer, applyMiddleware(...middleware));
