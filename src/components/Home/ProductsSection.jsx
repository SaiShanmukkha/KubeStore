import { useProducts } from "@/utilities/useProducts";
import ProductCard from "../Products/ProductCard";
import styles from "@styles/ProductsSection.module.css";

export default function ProductsSection(){
    const productsInfo = useProducts();
    if(productsInfo.isLoading){
        return (
            <>
                <p className="text-center">Loading</p>
            </>
        );
    }
    if(productsInfo.isError){
        return (
            <>
                <p className="text-center">Unable to fetch data.</p>
            </>
        );
    }
    return (
        <section className={styles.productSection}>
            {
                productsInfo.products.map((product)=>{
                    return <ProductCard key={product.name} data={product} className="flex-1" />;
                })
            }         
        </section>
    );
}