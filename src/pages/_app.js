import CartDrawer from "@/components/CartDrawer";
import Header from "@/components/Header";
import store from "@/redux/store";
import "@/styles/index.scss";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import "rsuite/dist/rsuite.min.css";

const App = ({ Component, pageProps }) => {
	return (
		<Provider store={store}>
			<Header />
			<Component {...pageProps} />
			<Toaster position="top-right" reverseOrder={false} />
			<CartDrawer />
		</Provider>
	);
};

export default App;
