import CartDrawer from "@/components/CartDrawer";
import CustomModal from "@/components/CustomModal";
import Header from "@/components/Header";
import { withRedux } from "@/redux/store";
import "@/styles/index.scss";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import NextNprogress from "nextjs-progressbar";
import "rsuite/dist/rsuite.min.css";

const App = ({ Component, pageProps }) => {
	const router = useRouter();

	return (
		<>
			<NextNprogress />
			<Header />
			<Component {...pageProps} />
			<Toaster position="top-right" reverseOrder={false} />
			<CartDrawer />
			<CustomModal />
		</>
	);
};

export default withRedux(App);
