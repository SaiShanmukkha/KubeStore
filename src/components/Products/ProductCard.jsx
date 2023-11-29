import Image from "next/image";
import pstyles from "@styles/ProductCard.module.css";

const styles = {
  card: {
    position: "relative",
    margin: "0.5rem",
    display: "flex",
    flexDirection: "column",
    maxWidth: "20rem",
    borderRadius: "0.5rem",
    border: "1px solid #f3f4f6",
    backgroundColor: "white",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    overflow: "hidden",
  },
  imageContainer: {
    margin: "0.75rem",
    height: "15rem",
    position: "relative",
    overflow: "hidden",
    borderRadius: "0.5rem",
  },
  discountBadge: {
    position: "absolute",
    top: "0",
    left: "0",
    margin: "0.5rem",
    backgroundColor: "black",
    color: "white",
    borderRadius: "9999px",
    padding: "0.25rem 0.5rem",
    fontSize: "0.875rem",
    fontWeight: "medium",
    textAlign: "center",
  },
  productInfo: {
    marginTop: "1rem",
    padding: "0 1.25rem 1.25rem",
  },
  productName: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#1a202c",
  },
  priceSection: {
    marginTop: "0.5rem",
    marginBottom: "1.25rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: "1.75rem",
    fontWeight: "bold",
    color: "#1a202c",
  },
  oldPrice: {
    textDecoration: "line-through",
    fontSize: "0.875rem",
    color: "#1a202c",
  },
};

export default function ProductCard() {
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <Image
          width={500}
          height={300}
          layout="responsive"
          src="https://media.graphassets.com/resize=height:300,width:500/FvzIFA2kQYeGcsETmHL1"
          alt="product image"
        />
        <span style={styles.discountBadge}>39% OFF</span>
      </div>
      <div style={styles.productInfo}>
        <a href="#">
          <h5 style={styles.productName}>Nike Air MX Super 2500 - Red</h5>
        </a>
        <div style={styles.priceSection}>
          <p>
            <span style={styles.price}>$449</span>
            <span style={styles.oldPrice}>$699</span>
          </p>
        </div>
        <button className={pstyles.addToCart}>Add to cart</button>
        <div>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                fill="#FFC107"
            />
            </svg>
            <span>Rating 4.5</span>
        </div>
      </div>
    </div>
  );
}
