import {
	applyMiddleware,
	createStore
} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducers";

let middleware = [thunk];

if (!ENV_PRODUCTION) {
	middleware = [ ...middleware, logger()];
}

export default createStore(reducer, applyMiddleware(...middleware));
