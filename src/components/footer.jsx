import FaceBookLogo from "@assets/icons/facebook.svg";
import InstagramLogo from "@assets/icons/instagram.svg";
import styles from "@styles/FootBar.module.css";
import XLogo from "@assets/icons/x.svg";
import Image from "next/image";
import Link from "next/link";

export default function FootBar(){
    return (
        <footer>
            <section className={styles.footerSectionOne}>
                <div className={styles.sectionOneEmailBlock}>
                    <h1><Link href="/">KubeStore</Link></h1>
                    <h3>Subscribe to our email alerts!</h3>
                    <input type="email" placeholder="Enter your email address" />
                </div>
                <div className={styles.sectionOneLinkList}>
                    <strong>Shop</strong>
                    <ul className={styles.sectionOneLinkListItems}>
                        <li>qwerty00</li>
                        <li>qwerty01</li>
                        <li>qwerty02</li>
                        <li>qwerty03</li>
                        <li>qwerty04</li>
                        <li>qwerty05</li>
                        <li>qwerty06</li>
                        <li>qwerty07</li>
                        <li>qwerty08</li>
                        <li>qwerty09</li>
                        <li>qwerty10</li>
                        <li>qwerty11</li>
                        <li>qwerty12</li>
                        <li>qwerty13</li>
                    </ul>
                </div>
                <div className={styles.sectionOneLinkList}>
                    <strong>Shop</strong>
                    <ul className={styles.sectionOneLinkListItems}>
                        <li>qwerty00</li>
                        <li>qwerty01</li>
                        <li>qwerty02</li>
                        <li>qwerty03</li>
                        <li>qwerty04</li>
                        <li>qwerty05</li>
                        <li>qwerty06</li>
                        <li>qwerty07</li>
                        <li>qwerty08</li>
                        <li>qwerty09</li>
                        <li>qwerty10</li>
                        <li>qwerty11</li>
                        <li>qwerty12</li>
                        <li>qwerty13</li>
                    </ul>
                </div>
            </section>
            
            <section className={styles.footerSectionTwo}>
                <h2>Let&apos;s go social</h2>
                <div className={styles.socialLinks}>
                    <Link href="https://facebook.com"><Image className="opacity-90 cursor-pointer" src={FaceBookLogo} alt={"FaceBook"} /></Link>
                    <Link href="https://instagram.com"><Image className="opacity-90 cursor-pointer" src={InstagramLogo} alt={"Instagram"} /></Link>
                    <Link href="https://x.com"><Image className="opacity-90 cursor-pointer" src={XLogo} alt={"X | Twitter"} /></Link>
                </div>
                <div className={styles.legal}>
                    <a className="cursor-pointer hover:underline" href="/privacy-policy">Privacy Policy</a>
                    <p className="font-extrabold">|</p>
                    <a className="cursor-pointer hover:underline" href="/terms-and-conditions">Terms & conditions</a>
                </div>
                <p className={styles.copyRgt}>© 2023 Imagine Marketing Limited. All Rights Reserved.</p>
                <p className={styles.copyRgt}>For queries contact us: <strong>support@proximakubestore.com</strong></p>
            </section>
        </footer>
    );
}