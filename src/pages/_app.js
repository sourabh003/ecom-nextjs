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
import { useDispatch } from "react-redux";
import { getData } from "@/utils";
import { USER } from "@/utils/constants";
import { SET_USER } from "@/redux/types/auth";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const App = ({ Component, pageProps }) => {
	const router = useRouter();
	const dispatch = useDispatch();

	useEffect(() => {
		const user = getData(USER);
		if (user) {
			dispatch({ type: SET_USER, payload: user });
		}
	}, []);

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
