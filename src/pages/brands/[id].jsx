import { BrandBanner } from '@/components/Banners';
import ProductGrid from '@/components/ProductGrid'
import shopService from '@/redux/services/shop.service';
import React, { useEffect } from 'react'

export default function SingleBrandPage({ products = [], brand }) {

    useEffect(() => {
        document.title = "Explore " + brand.name + " Products"
    }, [brand]);

    return (
        <div className='xl:mx-48 pt-4'>
            <BrandBanner brand={brand} />
            <ProductGrid list={products} />
        </div>
    )
}

export const getServerSideProps = async ({ query }) => {
    const { id } = query;
    const { data: products = [] } = await shopService.getProducts({
        brandId: id,
    });
    const { data: brands = [] } = await shopService.getBrands();
    const brand = brands.find(item => item._id === id)
    return { props: { products, brand } };
};
