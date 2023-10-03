import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Custom404({ message}) {
    const router = useRouter()
    return (
        <div className="w-100vw h-92vh grid place-items-center">
            <div className="text-center grid place-items-center">
                <img src="/images/warning.png" alt="Warning" className="w-20" />
                <div className="mt-3">{message || "Whoops!! Something went wrong"}</div>
                <div onClick={() => router.push("/")}>
                    <a href="#">Go back to Home</a>
                </div>
            </div>
        </div>
    );
}
