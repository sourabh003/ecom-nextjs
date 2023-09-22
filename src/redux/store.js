const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");
import { Provider } from "react-redux";
import rootReducer from "./reducers";

const middleware = [thunk];

export const store = createStore(rootReducer, applyMiddleware(...middleware));

export const withRedux = (Component) => {
	return (props) => (
		<Provider store={store}>
			<Component {...props} />
		</Provider>
	);
};
