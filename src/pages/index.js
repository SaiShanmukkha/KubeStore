import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ProductsSection from '@/components/Home/ProductsSection'
import { useEffect } from 'react';
import Banner from "@assets/banner.jpg"

const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
    <>
      <Head>
        <title>KubeStore</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`container ${inter.className}`}>
        <ProductsSection />
      </main>
    </>
  )
}

Index.auth = false;
