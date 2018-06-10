import {createStore, applyMiddleware} from "redux";
import reducer from "./reducers";

import logger from "redux-logger";
import promise from "redux-promise-middleware";

let middleware = applyMiddleware(promise(), logger);

export default createStore(reducer, middleware);
