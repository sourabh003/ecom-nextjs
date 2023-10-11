import React from "react";

export const BrandBanner = ({ brand }) => {
    return (
        <div className="border border-solid mx-2 rounded-xl py-5 bg-gradient-to-r from-teal-500 to-teal-900 text-white shadow">
            <div className="flex items-center justify-center">
                <img className="w-16" src={brand.icon} alt={brand.name} />
                <div className="text-lg md:text-xl">
                    Explore products by {brand.name}
                </div>
            </div>
        </div>
    );
};
