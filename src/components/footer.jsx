import FaceBookLogo from "@assets/icons/facebook.svg";
import InstagramLogo from "@assets/icons/instagram.svg";
import XLogo from "@assets/icons/x.svg";
import styles from "@styles/FootBar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function FootBar(){
    return (
        <footer>
            <section className={styles.footerSectionOne}>
                <div className={styles.sectionOneEmailBlock}>
                    <h1 className="text-2xl font-bold my-1"><Link href="/">KubeStore</Link></h1>
                    <h3 className="my-1">Subscribe to our email alerts!</h3>
                    <form>
                        <div className="flex space-x-4 my-1">
                            <input type="email" placeholder="Please Enter you Email" className="flex-grow rounded-l-md border border-gray-200 bg-gray-100 px-4 py-1.5 text-gray-700 focus:outline-none focus:border-purple-500" />
                        </div>
                    </form>
                </div>
                <div className={styles.sectionOneLinkList}>
                    <strong>Shop Shoes</strong>
                    <ul className={styles.sectionOneLinkListItems}>
                        <li>Sports</li>
                        <li>shoes</li>
                    </ul>
                </div>
                <div className={styles.sectionOneLinkList}>
                    <strong>Quick Links</strong>
                    <ul className={styles.sectionOneLinkListItems}>
                        <li>Gift Cards</li>
                        <li>Support</li>
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