import BrandGrid from '@/components/BrandGrid'
import shopService from '@/redux/services/shop.service'
import React, { useEffect } from 'react'

export default function Brands({ brands = [], error = null }) {

    useEffect(() => {
        document.title = "Popular Brands | Ecom";
    }, []);

    return (
        <div className='xl:mx-48 p-5'>
            <div className="md:text-lg font-bold">
                Popular Brands
            </div>
            <div className="mt-4">
                <BrandGrid list={brands} />
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    try {
        const { data: brands = [] } = await shopService.getBrands()
        return { props: { brands } }
    } catch (error) {
        return { props: { error: error?.props || error?.message || error } }
    }
}
