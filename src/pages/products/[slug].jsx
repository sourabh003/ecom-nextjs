import shopService from '@/redux/services/shop.service';
import Error from 'next/error';
import { useEffect } from 'react';
import Custom404 from '../404';
import { useRouter } from 'next/router';
import { ERROR_PRODUCT_NOT_FOUND } from '@/utils/constants';
import ProductImageCarousel from '@/components/ProductImageCarousel';
import { FaCartPlus, FaHeart, FaShare, FaShoppingBag } from 'react-icons/fa';
import classNames from 'classnames';
import IconButton from '@/components/IconButton';
import CustomButton from '@/components/CustomButton';

export default function SingleProductPage({ product, error }) {
    const router = useRouter()

    useEffect(() => {
        document.title = `${product.name} | Ecom`
    }, [product])

    const {
        brand,
        category,
        _id,
        name,
        slug,
        thumbnail,
        images = [],
        description,
        attributes,
        price = "100",
        discount = {
            discountPrice: "50",
            totalDiscount: 50,
        },
    } = product || {}

    const addToFavourites = () => { }

    const shareProduct = () => { }

    if (error) {
        return <Custom404 message={error} />
    }

    return (
        <div className='w-100 md:flex relative 2xl:mx-56'>
            <div className='px-5 pt-5 relative w-full md:w-1/3'>
                <IconButton className="last:mr-0 absolute right-2 top-2 z-30" onClick={addToFavourites} icon={FaHeart} iconProps={{
                    className: classNames({
                        "text-red-500": true,
                        "animate-ping duration-200": false,
                    })
                }} />
                <div className='w-full'>
                    <ProductImageCarousel images={images} />
                </div>
            </div>
            <div className='p-5 w-full md:w-2/3 md:ml-5 relative'>
                <IconButton className="last:mr-0 absolute right-2 top-2 z-30" onClick={shareProduct} icon={FaShare} />
                <div className="text-2xl font-bold">{name}</div>
                <div className="text-xl font-bold mt-2 text-gray-400">{description}</div>
                <div className="w-fit mt-2 pr-3 rounded flex items-center border ">
                    <img className='w-10 p-1' src={brand.icon} alt={brand.name} />
                    <div className='text-sm'>
                        {brand.name}
                    </div>
                </div>
                {discount ? (
                    <>
                        <div className="bg-primary text-white w-fit px-2 rounded-xl text-md mt-5">{discount.totalDiscount}% Discount</div>
                        <div className="flex mt-2">
                            <div className='text-3xl text-gray-400'><strike>${price}</strike></div>
                            <div className='text-3xl font-bold ml-4'>${discount.discountPrice}</div>
                        </div>
                    </>
                ) : (
                    <div className="flex mt-2">
                        <div className='text-3xl font-bold ml-4'>${price}</div>
                    </div>
                )}

                {/* For Desktop view */}
                <div className="mt-8 hidden md:flex">
                    <CustomButton
                        onClick={() => { }}
                        className="text-lg rounded flex items-center p-2 md:px-5 md:w-fit w-full"
                    >
                        Buy Now <FaShoppingBag className="ml-3" />
                    </CustomButton>
                    <CustomButton
                        onClick={() => { }}
                        variant='dark'
                        className="text-lg rounded flex items-center p-2 ml-2 md:w-fit w-full"
                    >
                        Add to Cart <FaCartPlus className="ml-3" />
                    </CustomButton>
                </div>

                <div>
                    <div className='mt-8 text-xl font-bold'>Specifications</div>
                    <table className='mt-2 border border-solid w-full md:w-fit text-left'>
                        <tbody>

                            {Object.entries(attributes).map(([key, value]) => {
                                return (
                                    <tr key={`${key}-${value}`}>
                                        <th className='p-2 border border-solid'>
                                            <div>{key}</div>
                                        </th>
                                        <td className='p-2 border border-solid'>
                                            <div>{value}</div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                <div className='mt-5'>
                    <div className='mt-8 text-xl font-bold'>Description</div>

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                    sapiente officiis modi at sunt excepturi expedita sint?
                </div>
            </div>

            {/* For Mobile view */}
            <div className="absolute flex md:hidden w-full bottom-0 sticky p-3 border border-solid bg-white">
                <CustomButton
                    onClick={() => { }}
                    className="text-lg rounded flex items-center p-2 w-full"
                >
                    Buy Now <FaShoppingBag className="ml-3" />
                </CustomButton>
                <CustomButton
                    onClick={() => { }}
                    variant='dark'
                    className="text-lg rounded flex items-center p-2 ml-2 w-full"
                >
                    Add to Cart <FaCartPlus className="ml-3" />
                </CustomButton>
            </div>
        </div>
    )
}

export const getServerSideProps = async ({ query }) => {
    /** Single product api to be called here */
    try {
        const { slug } = query;
        const { data: product } = await shopService.getSingleProduct(slug)
        if (!product) throw new Error(ERROR_PRODUCT_NOT_FOUND)
        return { props: { product } };
    } catch (error) {
        return { props: { error: error?.props || error?.message || error } }
    }
};


