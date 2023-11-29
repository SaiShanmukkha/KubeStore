import ProductCard from "../Products/ProductCard";
import styles from "@styles/ProductCard.module.css";

export default function ProductsSection(){
    return (
        <section className={styles.productSection}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </section>
    );
}