import Head from 'next/head'
import { images } from '../public/images'
import PlantMilkMakersHome from './home'
import UserProfile from './user-profile'
// import { productDetails } from '../data'
// import { images } from '../public/images'
// import { Category } from './category'
// import { Checkout } from './chekcout'
// import { HomeD } from './home'
// import { OrderSuccess } from './order-success'
// import { ProductDetails } from './product-details'
// // // import Image from 'next/image'
// // import styles from '../styles/Home.module.css'
// import { Shop } from './shop'
// import { UserProfile } from './user-profile'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />

      </Head>
      {/* <style jsx global>{`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Asap', 'sans-serif';
  }

  * {
    box-sizing: border-box;
  }
`}</style> */}
      {/* <ProductDetails productInfo ={productDetails}/> */}
      {/* <UserProfile user = {{name: 'Mahir', profilePhoto: images.profileImage }}/> */}
      {/* <Checkout /> */}
      {/* <OrderSuccess /> */}
      {/* <Home /> */}
      {/* <HomeD /> */}
      <PlantMilkMakersHome />
      {/* <UserProfile /> */}
      {/* <Shop /> */}
      {/* <Category /> */}
    </div>
  )
}
