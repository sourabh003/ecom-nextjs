const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");
import rootReducer from './reducers';

const middleware = [thunk]

const store = createStore(rootReducer, applyMiddleware(...middleware))
export default store;