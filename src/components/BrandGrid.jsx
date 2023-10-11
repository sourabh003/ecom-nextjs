import React from 'react'
import BrandCard from './cards/BrandCard';
import NoProducts from './NoProducts';

export default function BrandGrid({ list = [] }) {
    if (!list.length) return <NoProducts />;

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
            {[...list, ...list, ...list, ...list].map((brand) => (
                <BrandCard key={brand._id} {...brand} />
            ))}
        </div>
    );
}
