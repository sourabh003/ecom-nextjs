import { useCategories } from "@/hooks/useShop";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Placeholder } from "rsuite";

export default function CategoryCarousel() {
    const { categories = [], isLoading = true } = useCategories();
    const router = useRouter();

    return (
        <div className="w-100 border border-solid m-5">
            {isLoading ? (
                <div className="w-100 flex justify-center p-4">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <Placeholder.Graph key={index} active width="100px" height="100px" className="mr-4" />
                    ))}
                </div>
            ) : (
                <div className="flex lg:justify-center overflow-x-scroll lg:overflow-hidden p-2">
                    {categories?.map(({ icon, name, _id }) => (
                        <div
                            key={_id}
                            onClick={() => router.push(`/categories/${_id}`)}
                            className="grid place-items-center mr-2 md:mr-5 last:mr-0 pointer hover:shadow p-2 transition 300 hover:bg-gray-200"
                        >
                            <img className="w-10 md:w-20" src={icon} alt="name" />
                            <div className="text-sm mt-4 md:text-lg">{name}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
