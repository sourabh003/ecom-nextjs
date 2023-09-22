import Lottie from "react-lottie-player";
import loaderLottie from "@/data/loader-lottie.json";
import { useSelector } from "react-redux";

export default function GlobalLoader() {
	return (
		<>
			<div className="w-full h-full grid place-items-center z-50 opacity-100 absolute">
				<Lottie
					loop
					animationData={loaderLottie}
					play
					style={{ width: 250, height: 250 }}
				/>
			</div>
			<div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"></div>
		</>
	);
}
