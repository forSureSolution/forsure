import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Box } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Nav/>
     <Footer/>
    </>
  )
}
