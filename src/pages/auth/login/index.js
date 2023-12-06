import styles from "@styles/Login.module.css"
import Link from "next/link"
import { useSession, signIn } from "next-auth/react"
import { toast } from "react-toastify"
import { useRouter } from "next/router"
import Head from "next/head"
import { useState, useEffect } from "react"

export default function Login(){
    const { status} = useSession();
    const router = useRouter();
    const [siForm, setSiForm] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {
        if (status === "authenticated") {
            router.push("/",);
        }
    }, [router, status]);

    const handleSignIn = async (e) => {
        e.preventDefault();
        signIn("credentials", {...siForm, redirect: false}).then((callback) => {
            if (callback?.error) {
                toast.error(callback.error)
            }

            if(callback?.ok && !callback?.error) {
                toast.success('Logged in successfully!')
            }
        } )
    }

    return (
        <>
            <Head>
                <title>KubeStore | Login</title>
                <meta name="description" content="An Ecommerce Store" />
            </Head>
            <main className="container">
                <div className={styles.mainContent}>
                    <div className={styles.header}>
                        <h1 className={styles.welcomeHeader}>KubeStore Login Page!</h1>
                    </div>                

                    <div className={styles.signInForm}>
                        <div className={styles.signInFormHeader}>
                            <h2>Login with Credentials</h2>
                        </div>
                        <form onSubmit={handleSignIn}>
                            <div className={`${styles.formGroup}`}>
                                <label className={styles.formLabel}>Email ID</label>
                                <input value={siForm.email} required onChange={(e)=>setSiForm({...siForm, email:e.target.value})} type="email" className={`${styles.inputField}`} />
                            </div>
                            <div className={`${styles.formGroup}`}>
                                <label className={styles.formLabel}>Password</label>
                                <input value={siForm.password} required onChange={(e)=>setSiForm({...siForm, password:e.target.value})} type="password" className={`${styles.inputField}`} />                            
                            </div>
                            <button type="submit" className={styles.submitBtn} >Login</button>
                        </form>
                    </div>

                    <div>
                        <p className={styles.signupLink}>Don&apos;t have an account? <Link className={styles.linktoSignUp} href={"/auth/register"}>Create Account</Link></p>
                    </div>
                </div>
            </main>
        </>
    );
}
