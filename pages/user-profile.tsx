import Image from 'next/image'
import {useState} from 'react'
import shortid from 'shortid'
import { Cart } from '../components/Profile/cart'
import { OrderHistory } from '../components/Profile/order-history'

import { ProfileSettings } from '../components/Profile/profile-settings'
import { RecentViewsProducts } from '../components/Profile/recent-views-products'

import { Features } from "../components/Shop/features"
import { ShopBanner } from "../components/Shop/shop-banner"
import { Footer } from "../components/UI/footer"
import { Header } from "../components/UI/header"
import { icons, images } from "../public/images"
import { features, footerInfo, listItems } from "./shop"

const orders = [
    {
        id: shortid.generate(),
        totalPrice: 119.54,
        status: 'Confirmed',
        completedDate: '2021-05-10'
    },
    {
        id: shortid.generate(),
        totalPrice: 110.54,
        status: 'Pending',
        completedDate: '2021-05-10'
    },
    {
        id: shortid.generate(),
        totalPrice: 119.54,
        status: 'Confirmed',
        completedDate: '2021-05-10'
    },
    {
        id: shortid.generate(),
        totalPrice: 119.54,
        status: 'Confirmed',
        completedDate: '2021-05-10'
    },
    {
        id: shortid.generate(),
        totalPrice: 119.54,
        status: 'Confirmed',
        completedDate: '2021-05-10'
    },
    {
        id: shortid.generate(),
        totalPrice: 119.54,
        status: 'Confirmed',
        completedDate: '2021-05-10'
    },
    {
        id: shortid.generate(),
        totalPrice: 119.54,
        status: 'Confirmed',
        completedDate: '2021-05-10'
    },
    {
        id: shortid.generate(),
        totalPrice: 119.54,
        status: 'Confirmed',
        completedDate: '2021-05-10'
    },
    {
        id: shortid.generate(),
        totalPrice: 119.54,
        status: 'Confirmed',
        completedDate: '2021-05-10'
    },
]

const cartProducts = [
    {
        id: shortid.generate(),
        image: images.cardImage,
        title: 'Product 1',
        price: 25.00
    },
    {
        id: shortid.generate(),
        image: images.Product2,
        title: 'Product 2',
        price: 22.00
    },
    {
        id: shortid.generate(),
        image: images.Product3,
        title: 'Product 3',
        price: 21.00
    },
    {
        id: shortid.generate(),
        image: images.Product4,
        title: 'Product 4',
        price: 25.00
    },

]

const categoryItems = [
    {
        id: shortid.generate(),
        image: images.almonds,
        title: 'Almonds',
        excerpt: 'Organic Whole Soaked',
        oldPrice: 30.60,
        newPrice: 25.40,
        label: 'Best Seller'
    },
    {
        id: shortid.generate(),
        image: images.almonds,
        title: 'Almonds',
        excerpt: 'Organic Whole Soaked',
        oldPrice: 30.60,
        newPrice: 25.40,
        label: 'Best Seller'
    },
    {
        id: shortid.generate(),
        image: images.almonds,
        title: 'Almonds',
        excerpt: 'Organic Whole Soaked',
        oldPrice: 30.60,
        newPrice: 25.40,
        label: 'Best Seller'
    },
    {
        id: shortid.generate(),
        image: images.almonds,
        title: 'Almonds',
        excerpt: 'Organic Whole Soaked',
        oldPrice: 30.60,
        newPrice: 25.40,
        label: 'Best Seller'
    },
    {
        id: shortid.generate(),
        image: images.almonds,
        title: 'Almonds',
        excerpt: 'Organic Whole Soaked',
        oldPrice: 30.60,
        newPrice: 25.40,
        label: 'Best Seller'
    },
    {
        id: shortid.generate(),
        image: images.almonds,
        title: 'Almonds',
        excerpt: 'Organic Whole Soaked',
        oldPrice: 30.60,
        newPrice: 25.40,
        label: 'Best Seller'
    },
    {
        id: shortid.generate(),
        image: images.almonds,
        title: 'Almonds',
        excerpt: 'Organic Whole Soaked',
        oldPrice: 30.60,
        newPrice: 25.40,
        label: 'Best Seller'
    },
    {
        id: shortid.generate(),
        image: images.almonds,
        title: 'Almonds',
        excerpt: 'Organic Whole Soaked',
        oldPrice: 30.60,
        newPrice: 25.40,
        label: 'Best Seller'
    },
    {
        id: shortid.generate(),
        image: images.almonds,
        title: 'Almonds',
        excerpt: 'Organic Whole Soaked',
        oldPrice: 30.60,
        newPrice: 25.40,
        label: 'Best Seller'
    },
    {
        id: shortid.generate(),
        image: images.almonds,
        title: 'Almonds',
        excerpt: 'Organic Whole Soaked',
        oldPrice: 30.60,
        newPrice: 25.40,
        label:  'Best Seller'
    },
    {
        id: shortid.generate(),
        image: images.almonds,
        title: 'Almonds',
        excerpt: 'Organic Whole Soaked',
        oldPrice: 30.60,
        newPrice: 25.40,
        label: 'Best Seller'
    },
    {
        id: shortid.generate(),
        image: images.almonds,
        title: 'Almonds',
        excerpt: 'Organic Whole Soaked',
        oldPrice: 30.60,
        newPrice: 25.40,
        label: 'Best Seller'
    },
]

const user = {
    name: 'mahir',
    profilePhoto: images.profileImage
}

const UserProfile = () => {
    const [activeTab, setActiveTab] = useState("Profile")

    return (
        <>
            <Header menubarIcon={icons.menubarIcon} logo={icons.logo} shoppingCart={icons.shoppingCart} user={icons.user} listItems={listItems} />
            < ShopBanner banner={images.bg} />
            <div className="section section--with-wave">
                <div className="container">
                    <div className="account">
                        <div className="changeable__img">
                            <figure>
                                <Image src={user.profilePhoto} alt ={user.name}/>
                            </figure>
                        </div>
                        <div className="details">
                            <h4>{user.name}</h4>
                            <p>
                                Our Raw Almonds are among the largest you can get anywhere. We
                                only source 20/22 nonpareil almonds grown in California.
                            </p>
                        </div>
                    </div>
                    <div className="account-setting">
                        <div className="account-setting__links">
                            <ul>
                                <li className = "hoverable"  onClick = {() => setActiveTab('Profile')}>
                                    <a  className={activeTab === "Profile" ? 'active' : ''}>
                                        <svg viewBox="0 0 15.75 18">
                                            <use xlinkHref="images/sprite.svg#user"></use>
                                        </svg>
                                        Profile
                                    </a>
                                </li>
                                <li className = "hoverable"  onClick = {() => setActiveTab('My Order History')}>
                                    <a className={activeTab === "My Order History" ? 'active' : ''}  >
                                        <svg viewBox="0 0 15.75 18">
                                            <use xlinkHref="images/sprite.svg#order-history"></use>
                                        </svg>
                                        My Order History
                                    </a>
                                </li>
                                <li className = "hoverable" onClick = {() => setActiveTab('My Cart')}>
                                    <a className={activeTab === "My Cart" ? 'active' : ''}>
                                        <svg viewBox="0 0 20.25 15.75">
                                            <use xlinkHref="images/sprite.svg#cart"></use>
                                        </svg>
                                        My Cart
                                    </a>
                                </li>
                                <li className = "hoverable" onClick = {() => setActiveTab('Recent Viewed products')}>
                                    <a className={activeTab === "Recent Viewed products" ? 'active' : ''}>
                                        <svg viewBox="0 0 20.249 13.5">
                                            <use xlinkHref="images/sprite.svg#recent-views"></use>
                                        </svg>
                                        Recent Viewed products
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {activeTab === 'Profile' && <ProfileSettings user = {user}/>}
                        {activeTab === "My Order History" && <OrderHistory orders={orders}/>}
                        {activeTab === "My Cart" && <Cart cartProducts = {cartProducts} />}
                        {activeTab === "Recent Viewed products" && <RecentViewsProducts categories = {categoryItems} />}
                    </div>
                </div>
            </div>
            <Features features={features} />
            <Footer footerInfo={footerInfo} />
        </>
    )
}

export default UserProfile