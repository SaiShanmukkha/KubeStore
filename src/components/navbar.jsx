import CartLogo from "@assets/icons/cart.gif";
import styles from "@styles/NavBar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function NavBar(){
    return (
        <nav className={styles.navBar}>
            <h2 className={styles.logo}><Link href="/">KubeStore</Link></h2>
            <ul className={styles.navItems}>
                <li className={styles.navItem}><Link href="/categories">Categories</Link></li>
                <li className={styles.navItem}><Link href="/daily-deals">Daily Deals</Link></li>
                <li className={styles.navItem}><Link href="/gift-cards">Gift Cards</Link></li>
                <li className={styles.navItem}><Link href="/about-us">About Us</Link></li>
            </ul>
            <input type="text" className={styles.searchBox} placeholder="Search products..." />
            <div className={styles.navActions}>
                <button className={styles.navActionsBtn}><Link href="/auth/login">Log In</Link></button>
                <button className={styles.navActionsBtn}><Image src={CartLogo} alt="Cart" /></button>
            </div>
        </nav>
    );
}