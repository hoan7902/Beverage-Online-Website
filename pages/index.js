import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../components/home/Banner'
import ListItem from '../components/home/ListItem'
import Advertisement from '../components/home/Advertisement'
import Footer from '../components/home/Footer'
import BannerAboutUs from '../components/home/BannerAboutUs'
import Promotion from '../components/home/Promotion'
import Shipper from '../components/home/Shipper'

export default function Home() {
  return (
    <div>
      <Shipper/>
      <Banner/>
      <ListItem title='Hot Jucify'/>
      <BannerAboutUs/>
      <Promotion/>
      <Advertisement/>
      <Footer/>
    </div>
  )
}
