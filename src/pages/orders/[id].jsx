import { useRouter } from "next/router";
import React from "react";

export default function SingleOrderPage() {
	const router = useRouter();
	return <div>SingleOrderPage : {router.query.id}</div>;
}
