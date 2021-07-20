import Image from "next/image";
import React from "react";
import shortid from 'shortid'
import { ShopCategories } from "../components/Shop/categories";
import { Features } from "../components/Shop/features";
import { Product } from "../components/Shop/product";
import { ShopBanner } from "../components/Shop/shop-banner";
import { Footer } from "../components/UI/footer";
import {Header} from "../components/UI/header";
import { FeatureProps } from "../interfaces";
import { images, icons } from "../public/images";
// import menuBars from
// import { listItemsProps } from "../interfaces";

export const listItems = [
  {
    id: shortid.generate(),
    title: 'Home',
    href: '/'
  },
  {
    id: shortid.generate(),
    title: 'Shop',
    href: '/shop'
  },
  {
    id: shortid.generate(),
    title: 'Recipes',
    href: '/recipes'
  },
  {
    id: shortid.generate(),
    title: 'Blog',
    href: '/blog'
  },
  {
    id: shortid.generate(),
    title: 'Partners',
    href: '/partners'
  },
  {
    id: shortid.generate(),
    title: 'About Us',
    href: '/about-us'
  },
]

const categories = [
  {
    id: shortid.generate(),
    title: `3D Strainer`,
    image: images.strainer
  },
  {
    id: shortid.generate(),
    title: `Ingredients`,
    image: images.ingredients
  },
  {
    id: shortid.generate(),
    title: `Bottles`,
    image: images.bottles
  },
]

const products = [
  {
    id: shortid.generate(),
    sectionTitle: `New Product`,
    productImage: images.Product1,
    productTitle: `Product Title Goes Here`,
    productLabel: 'Brand',
    oldPrice: 32.00,
    newPrice: 25.00,
    productDescription: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.`
  },
  {
    id: shortid.generate(),
    sectionTitle: `Special Offer`,
    productImage: images.Product2,
    productTitle: `Product Title Goes Here`,
    productLabel: 'Brand',
    oldPrice: 50.00,
    newPrice: 25.00,
    productDescription: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.`
  },
  {
    id: shortid.generate(),
    sectionTitle: `Quick Start Milk Making Bundle`,
    productImage: images.Product3,
    productTitle: `Product Title Goes Here`,
    productLabel: 'Brand',
    oldPrice: 32.00,
    newPrice: 28.00,
    productDescription: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.`
  },
  {
    id: shortid.generate(),
    sectionTitle: `Quick Start Milk Making Bundle`,
    productImage: images.Product4,
    productTitle: `Product Title Goes Here`,
    productLabel: 'Brand',
    oldPrice: 32.00,
    newPrice: 15.00,
    productDescription: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.`
  },
]

export const footerInfo = {
  logo: icons.logo,
  excerpt: `Join Plant Milk Makers on our mission to enable cleaner plant-based milk consumption and a more sustainable planet. Here you will find products, information and tools to become a health and environmentally savvy Plant Milk Maker.`,
  linkColumnInfo: {

      id: shortid.generate(),
      columnTitle: `Important Links`,
      columnItems: [
        {
          id: shortid.generate(),
          href: '#',
          children: 'Home',
        },
        {
          id: shortid.generate(),
          href: '#',
          children: 'Shop',
        },
        {
          id: shortid.generate(),
          href: '#',
          children: 'Recipes',
        },
        {
          id: shortid.generate(),
          href: '#',
          children: 'Blog',
        },
        {
          id: shortid.generate(),
          href: '#',
          children: 'Partners',
        },
        {
          id: shortid.generate(),
          href: '#',
          children: 'About Us',
        },
        {
          id: shortid.generate(),
          href: '#',
          children: 'Contact Us',
        },
        {
          id: shortid.generate(),
          href: '#',
          children: 'Refund Policy',
        },
        {
          id: shortid.generate(),
          href: '#',
          children: 'Privacy & Policy',
        },
      ]
    },
    socialMediaColumnInfo : {
      id: shortid.generate(),
      columnTitle: `Join Us`,
      columnItems: [
        {
          id: shortid.generate(),
          href: '#',
          children: React.createElement('svg', {viewBox: "0 0 10.168 19"}, [React.createElement('use', {xlinkHref: "images/sprite.svg#facebook"})])
        },
        {
          id: shortid.generate(),
          href: '#',
          children: React.createElement('svg', {viewBox: "0 0 24.7 17.8"}, [React.createElement('use', {xlinkHref: "images/sprite.svg#youtube"})])
        },
        {
          id: shortid.generate(),
          href: '#',
          children: React.createElement('svg', {viewBox: "0 0 14.618 19"}, [React.createElement('use', {xlinkHref: "images/sprite.svg#pinterest"})])
        },
        {
          id: shortid.generate(),
          href: '#',
          children: React.createElement('svg', {viewBox: "0 0 19 15.438"}, [React.createElement('use', {xlinkHref: "images/sprite.svg#twitter"})])
        },
        {
          id: shortid.generate(),
          href: '#',
          children: React.createElement('svg', {viewBox: "0 0 15.75 15.75"}, [React.createElement('use', {xlinkHref: "images/sprite.svg#instagram"})])
        },
      ]
    }
}

// let features: FeatureProps;

export const features = [
  {
    id: shortid.generate(),
    icon: icons.creditCard,
    title: `SAFE & SECURE CHECKOUT`
  },
  {
    id: shortid.generate(),
    icon: icons.moneyIcon,
    title: `NO-HASSLE RETURNS`
  },
  {
    id: shortid.generate(),
    icon: icons.satisfaction,
    title: `100% SATISFACTION GUARANTEED`
  },
  
]

const Shop = () => {
  return (
    <div>
      <Header menubarIcon={icons.menubarIcon} logo={icons.logo} shoppingCart={icons.shoppingCart} user={icons.user} listItems={listItems} />

      <ShopBanner banner={images.bg} />
      <div
        className="
        section section--shop-categories section--grey section--with-grey-wave
      "
      >
        < ShopCategories categories={categories} />
      </div>


      {products.map((product, index) => (
        <Product key={product.id} index = {index} productDetails={product} />
      ))}
      <Features features = {features}/>
      
      <Footer footerInfo = {footerInfo}/>
      <div />
    </div>
  );
};

export default Shop
