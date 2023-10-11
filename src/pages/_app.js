import CartDrawer from "@/components/CartDrawer";
import CustomModal from "@/components/CustomModal";
import Header from "@/components/Header";
import { withRedux } from "@/redux/store";
import "@/styles/index.scss";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import NextNprogress from "nextjs-progressbar";
import "rsuite/dist/rsuite.min.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "@/utils";
import { USER } from "@/utils/constants";
import { SET_USER } from "@/redux/types/auth";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getCart } from "@/redux/actions/cart";

const App = ({ Component, pageProps }) => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { isLoggedIn = false, user = null } = useSelector(
		(state) => state.auth
	);

	useEffect(() => {
		const localUser = getData(USER);
		if (localUser) {
			dispatch({ type: SET_USER, payload: localUser });
		}
	}, []);

	useEffect(() => {
		if (isLoggedIn) {
			dispatch(getCart()).catch((err) => {});
		}
	}, [isLoggedIn]);

	return (
		<>
			<NextNprogress options={{ showSpinner: false }} />
			<Header />
			<Component {...pageProps} />
			<Toaster position="top-right" reverseOrder={false} />
			<CartDrawer />
			<CustomModal />
		</>
	);
};

export default withRedux(App);
