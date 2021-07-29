// import Image from 'next/image'
import shortid from 'shortid'
import { CategoryWidget } from '../components/Category/category-widget'
import { Features } from '../components/Shop/features'
import { ShopBanner } from '../components/Shop/shop-banner'
import { Footer } from '../components/UI/footer'
import {Header} from '../components/UI/header'
import { RecentNewsSection } from '../components/UI/recent-news-section'
import { icons, images } from '../public/images'
import { features, footerInfo, listItems } from './shop'

export const categoryInfo = {
    id: shortid.generate(),
    title: 'All Ingredients',
    icon: images.separator,
    categoryItems : [
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
}

export const recentNewsInfo = {
    title: `Recent News`,
    icon: icons.arrowIcon,
    iconText: `View All`,
    cardItems : [
        {
            id: shortid.generate(),
            title: `5 Reason glass bottles are better than plastic`,
            excerpt: `Duis pretium gravida enim, vel maximus ligula a. Sed rhoncus eget.`,
            image: images.cardImage
        },
        {
            id: shortid.generate(),
            title: `Diary industry claims identity theft`,
            excerpt: `Duis pretium gravida enim, vel maximus ligula a. Sed rhoncus eget.`,
            image: images.newsImageTwo
        },
        {
            id: shortid.generate(),
            title: `Which plant milk wins most sustainable`,
            excerpt: `Duis pretium gravida enim, vel maximus ligula a. Sed rhoncus eget.`,
            image: images.newsImageThree
        },
        {
            id: shortid.generate(),
            title: `A guide to plant milk coffee creamers`,
            excerpt: `Duis pretium gravida enim, vel maximus ligula a. Sed rhoncus eget.`,
            image: images.newsImageFour
        },
    ]
}

const Category = () => {
    return (
        
            <div>
                <Header menubarIcon={icons.menubarIcon} logo={icons.logo} shoppingCart={icons.shoppingCart} user={icons.user} listItems={listItems}/>
                < ShopBanner actions banner = {images.bg}/>
                <CategoryWidget icon= {categoryInfo.icon} title= {categoryInfo.title} categoryItems = {categoryInfo.categoryItems}/>
                <RecentNewsSection title= {recentNewsInfo.title} icon ={recentNewsInfo.icon} iconText= {recentNewsInfo.iconText} cardItems= {recentNewsInfo.cardItems}/>
                <Features features= {features}/>
                <Footer footerInfo= {footerInfo}/>
            </div>
        

    )
}

export default Category