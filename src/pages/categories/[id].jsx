import ProductGrid from "@/components/ProductGrid";
import shopService from "@/redux/services/shop.service";
import { useEffect } from "react";

export default function SingleCategoryPage({ products = [], category }) {
    useEffect(() => {
        document.title = "Explore " + category.name + " | Ecom"
    }, []);
    return (
        <div className="xl:mx-48">
            <ProductGrid list={products} />
        </div>
    );
}

export const getServerSideProps = async ({ query }) => {
    const { id } = query;
    const { data: products = [] } = await shopService.getProducts({
        categoryId: id,
    });
    const { data: categories = [] } = await shopService.getCategories();
    const category = categories.find(cat => cat._id === id)
    return { props: { products, category } };
};
