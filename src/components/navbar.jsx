import CartLogo from "@assets/icons/cart.gif";
import styles from "@styles/NavBar.module.css";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function NavBar() {
  const { data: session, status, update } = useSession();
  const cart = useSelector((state) => state.cart.items);
  let count = 0;
  cart.forEach(element => {
    count += element.quantity;
  });

  return (
    <header className="bg-white shadow mb-2 fixed top-0 w-full z-10">
        <div className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
          <Link href="/" className="flex items-center whitespace-nowrap text-2xl font-black">
            <Image
              className="rounded-3xl cursor-pointer"
              src={"/logo.png"}
              width={48}
              height={48}
              alt="KubeStore"
            />
            <span className="text-2xl font-bold mx-2">Kube<span className="text-green-600">Store</span></span>
          </Link>
          <input type="checkbox" className="peer hidden" id="navbar-open" />
          <label className="absolute top-5 right-7 cursor-pointer md:hidden" htmlFor="navbar-open">
            <span className="sr-only">Toggle Navigation</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <nav aria-label="Header Navigation" className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
            <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
              <li className="text-gray-600 md:mr-12 hover:text-blue-600"><Link href="/">Home</Link></li>
              <li className="text-gray-600 md:mr-12 hover:text-blue-600"><Link href="/about-us">About-Us</Link></li>
              <li className="relative mr-4">
                  <Link href="/cart">
                    <Image src={CartLogo} alt="Cart" />
                    <span className={styles.cartIndex}>{count}</span>
                  </Link>
              </li>
              {session ? (
                <>
                  <li className="text-gray-600 md:mr-12 hover:text-blue-600">
                    <Link href="/orders">Orders</Link>
                  </li>
                  <li className="mx-2 text-lg font-bold text-red-700">
                    {session.user.name.toUpperCase()}
                  </li>
                  <li className="text-gray-600 md:mr-12 hover:text-green-600">
                    <button onClick={()=>signOut()} className="rounded-lg border-2 px-6 py-1 font-medium text-white transition-colors bg-green-900">Log out</button>
                  </li>
                </>) :
              <li className="text-gray-600 md:mr-12 hover:text-green-600">
                <button className="rounded-md border-2 border-green-600 px-6 py-1 font-medium text-green-900 transition-colors hover:bg-green-600 hover:text-white"><Link href="/auth/login">Login</Link></button>
              </li>
              }
            </ul>
          </nav>
        </div>
      </header>

    // <nav className={styles.navBar}>
      
    //   <span className="mx-2 text-2xl font-bold">Kube<span className="text-blue-600">Store</span></span>
    //   <ul className={styles.navItems}>
    //     <li className={styles.navItem}>
    //       <Link href="/gift-cards">Gift Cards</Link>
    //     </li>
    //     <li className={styles.navItem}>
    //       <Link href="/about-us">About Us</Link>
    //     </li>
    //   </ul>

    //   <div className="flex space-x-4">
    //     <input
    //       type="text"
    //       placeholder="Search..."
    //       className="flex-grow rounded-l-md border border-gray-200 bg-gray-100 px-4 py-1.5 text-gray-700 focus:outline-none focus:border-purple-500"
    //     />
    //   </div>

    //   <div className={styles.navActions}>
        
    //       </>
    //     ) : (
    //       <button className={styles.navActionsBtn}>
    //         <Link href="/auth/login">Log In</Link>
    //       </button>
    //     )}
        
    //   </div>
    // </nav>
  );
}
