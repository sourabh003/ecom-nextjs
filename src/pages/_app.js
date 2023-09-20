import Header from "@/components/Header";
import "@/styles/index.scss";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
		</>
	);
}
