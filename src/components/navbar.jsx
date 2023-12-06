import CartLogo from "@assets/icons/cart.gif";
import styles from "@styles/NavBar.module.css";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function NavBar(){
    const { data:session, status, update} = useSession();
    return (
        <nav className={styles.navBar}>
            <Image className="rounded-3xl cursor-pointer" src={"/logo.png"} width={48} height={48} alt="KubeStore" />
            <h1 className="font-bold text-2xl mx-1 cursor-pointer"><Link href="/">KubeStore</Link></h1>
            <ul className={styles.navItems}>
                {/* <li className={styles.navItem}><Link href="/categories">Categories</Link></li> */}
                <li className={styles.navItem}><Link href="/gift-cards">Gift Cards</Link></li>
                <li className={styles.navItem}><Link href="/about-us">About Us</Link></li>
            </ul>
           
            <div className="flex space-x-4">
                <input type="text" placeholder="Search..." className="flex-grow rounded-l-md border border-gray-200 bg-gray-100 px-4 py-1.5 text-gray-700 focus:outline-none focus:border-purple-500" />
            </div>

            <div className={styles.navActions}>
                {
                    session ? 
                    <>
                        <p className="mx-2 text-lg font-bold text-red-700">{session.user.name.toUpperCase()}</p>
                        <button className={styles.navActionsBtn}><Link href="/auth/login">Orders</Link></button>
                        <button className={styles.navActionsBtn} onClick={()=>signOut()}>Log Out</button>
                    </>
                    :
                    <button className={styles.navActionsBtn}><Link href="/auth/login">Log In</Link></button>
                }
                <button className={styles.navActionsBtn}><Image src={CartLogo} alt="Cart" /></button>
            </div>
        </nav>
    );
}