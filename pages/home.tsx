import image from 'next/image';
import Image from 'next/image';
import {useRouter} from 'next/router'
import { useState } from 'react';
import shortid from 'shortid';
import {useSwipeable} from 'react-swipeable'

import { Carousel } from '../components/Home/carousel';
import { ShopCategories } from '../components/Shop/categories';
import { Footer } from '../components/UI/footer';
import { Header } from '../components/UI/header';
import { RecentNewsSection } from '../components/UI/recent-news-section';
import { images, icons } from '../public/images';
import { recentNewsInfo } from './category';
import { footerInfo, listItems } from './shop';

const sliderItems = [
    {
        id: shortid.generate(),
        title: `Premium branded reusable bottles`,
        excerpt: `Protect the environment, keep milk fresher and tastier longer. Beautifully designed branding acknowledging your homemade-DIY efforts.`,
        image: images.banner
    },
    {
        id: shortid.generate(),
        title: `3D Strainer Plant Milk Maker`,
        excerpt: `Make plantmilks in your kitchen in minutes without the harmful additives found in commercial plant milks or the messiness of DIY nut bags.`,
        image: images.heroImage2
    },
    {
        id: shortid.generate(),
        title: `Plant Milk Maker Ingredients`,
        excerpt: `Get the freshest ready to use plant milk making ingredients. Choose from 10 bulk or single use pod milk making ingredients.`,
        image: images.heroImage3
    },
]

const categories = [
    {
      id: shortid.generate(),
      title: `Blending Ingredients`,
      image: images.step1,
      excerpt: `Combine plant ingredients with water in blender`
    },
    {
      id: shortid.generate(),
      title: `Filter With Strainer`,
      image: images.step2,
      excerpt: `Select Prescribed Filtering Combination for Drink Type`
    },
    {
      id: shortid.generate(),
      title: `Pour and Store`,
      image: images.step3,
      excerpt: `Pour Into Air Tight Milk Bottles For Maximum Freshness`
    },
];

const whyUsData = {
    storeData: {
        id: shortid.generate(),
        excerpt: `Retail store plant milk varieties have clear environmental and humanitarian advantages over cows milk. Besides from being more costly, unfortunately commercialization introduces a host of additives we can do without.`,
        image: images.products,
        features: [
            {
                id: shortid.generate(),
                title: 'Emulsifiers',
                icon: icons.emulsifiersIcon
            },
            {
                id: shortid.generate(),
                title: 'Thickeners',
                icon: icons.thickenersIcon
            },
            {
                id: shortid.generate(),
                title: 'Synthetic Vitamins',
                icon: icons.syntheticVitaminIcon
            },
            {
                id: shortid.generate(),
                title: 'Contamination',
                icon: icons.stabilizersIcon
            },
            {
                id: shortid.generate(),
                title: 'Limited Lifetime',
                icon: icons.labFlavorsIcon
            },
            {
                id: shortid.generate(),
                title: 'Limited Use Cases',
                icon: icons.preservativesIcon
            },
        ]
    },

    homeData: {
        id: shortid.generate(),
        excerpt: `Making homemade plant milks with nut bags or cheese cloth offer less than optimal experience and results. The 3D Strainer is significantly faster and most effective in extracting milk from ingredient's pulp.`,
        image: images.homeSectionImage,
        features: [
            {
                id: shortid.generate(),
                title: 'Messy Milking',
                icon: icons.emulsifiersIcon
            },
            {
                id: shortid.generate(),
                title: 'Messy Cleanup',
                icon: icons.thickenersIcon
            },
            {
                id: shortid.generate(),
                title: 'Inferior Straining',
                icon: icons.syntheticVitaminIcon
            },
            {
                id: shortid.generate(),
                title: 'Stabilizers',
                icon: icons.stabilizersIcon
            },
            {
                id: shortid.generate(),
                title: 'Lab Flavors',
                icon: icons.labFlavorsIcon
            },
            {
                id: shortid.generate(),
                title: 'Preservatives',
                icon: icons.preservativesIcon
            },
        ]
    }
}
  

const PlantMilkMakersHome = () => {
    const router = useRouter()
    const [selectedMilkingMethod, setSelectedMilkingMethod] = useState(whyUsData.storeData)

    return (
        <>
        <Header menubarIcon={icons.menubarIcon} logo={icons.logo} shoppingCart={icons.shoppingCart} user={icons.user} listItems={listItems} />
         <Carousel sliderItems= {sliderItems}/>
            <div className="section section--how-it-works section--with-wave">
                <div className="container">
                    <div className="section__head">
                        <figure>
                            <Image src={images.separator} alt ="section Break" />
                        </figure>
                        <div className="section__head__title">
                            <h2>How it Works</h2>
                        </div>
                    </div>
                    <div className="section__content">
                        <div className="grid three">

                            {categories.map(category => (
                                     <div key = {category.id} className="card card--step">
                                     <div className="card__image">
                                         <figure>
                                             <Image src={category.image} alt= {category.title} />
                                         </figure>
                                     </div>
                                     <div className="card__title">
                                         <h3>{category.title}</h3>
                                     </div>
                                     <div className="card__content">
                                         <p>{category.excerpt}</p>
                                     </div>
                                 </div>
                            ))} 
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="section section--pattern">
                <div className="container">
                    <div className="section__head">
                        <figure>
                            <Image src={images.separator} alt = ""/>
                        </figure>
                        <div className="section__head__title">
                            <h2>Get More Out of Your Milk Making</h2>
                        </div>
                    </div>
                    <div className="section__content">
                        <div className="category">
                            <div className="category__image">
                                <figure>
                                    <Image src={images.shopIngredients} alt = "Shop Ingredients" />
                                </figure>
                            </div>
                            <div className="category__details">
                                <div className="category__details__title">
                                    <h3>Shop Ingredients</h3>
                                </div>
                                <div className="category__details__body">
                                    <p>
                                        Select from ten organic milk making ingredients. Choose portioned or bulk packaging. The freshest ingredients shipped on demand or subscription.
                                    </p>
                                </div>
                                <div className="category__details__action">
                                    <button onClick = {() => router.push('/shop')} className="btn-big btn-green">Shop Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="category">
                            <div className="category__image">
                                <figure>
                                    <Image src={images.shopBottles} alt = "Shop Bottles" />
                                </figure>
                            </div>
                            <div className="category__details">
                                <div className="category__details__title">
                                    <h3>Shop Bottles</h3>
                                </div>
                                <div className="category__details__body">
                                    <p>
                                        Our premium homemade-DIY branded bottles keep your milk fresh and tastier longer. They can be washed, reused endless and even recycled.
                                    </p>
                                </div>
                                <div className="category__details__action">
                                    <button onClick = {() => router.push('/shop')}   className="btn-big btn-green">Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="section__head">
                        <figure>
                            <Image src={images.separator} alt = "" />
                        </figure>
                        <div className="section__head__title">
                            <h2>Why 3D Strainer Plant Milk and Drink Maker?</h2>
                            <p className="section__head__title__sub">
                                What is your current source for plant milk?
                            </p>
                        </div>
                    </div>
                    
                    <div className="section__content">
                        <div className="tabs">
                            <div className="tabs__links">
                                <ul>
                                    <li onClick = {() => setSelectedMilkingMethod(whyUsData.storeData)}>
                                        <a className= {selectedMilkingMethod.id === whyUsData.storeData.id ? "active first" : "first" } >I Buy in Store</a>
                                    </li>
                                    <li onClick = {() => setSelectedMilkingMethod(whyUsData.homeData)}>
                                        <a className= {selectedMilkingMethod.id === whyUsData.homeData.id ? "active second" : "second" }>I Make at Home</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tabs__content">
                                <div>
                                    <p>
                                        {selectedMilkingMethod.excerpt}
                                    </p>
                                    <figure>
                                        <Image src= {selectedMilkingMethod.image} alt = {selectedMilkingMethod.id} />
                                    </figure>
                                    <div className="grid three">
                                        {selectedMilkingMethod.features.map(item => (
                                            <div key = {item.id} className="grid__item">
                                            <figure>
                                                <Image src={item.icon} alt = {item.title} />
                                            </figure>
                                            <h4>{item.title}</h4>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section section--grey">
                <div className="container">
                    <div className="section__head section__head--left">
                        <div className="section__head__title">
                            <h2>Popular Recipes</h2>
                        </div>
                        <div className="section__head__link">
                            <a href="#">
                                View All
                                <Image src={icons.arrowIcon} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="section__content">
                        <div className="grid three">
                            <div className="card card--recipe">
                                <a href="#">
                                    <div className="card__image">
                                        <figure>
                                            <Image src={images.recipe1} alt = "" />
                                        </figure>
                                    </div>
                                    <div className="card__content">
                                        <div className="card__title">
                                            <h3>How to make Oat Milk (Non-Slimmy)</h3>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="card card--recipe">
                                <a href="#">
                                    <div className="card__image">
                                        <figure>
                                            <Image src={images.recipe2} alt = "" />
                                        </figure>
                                    </div>
                                    <div className="card__content">
                                        <div className="card__title">
                                            <h3>6 Plant-Based Dairy Free Milk Recipes</h3>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="card card--recipe">
                                <a href="#">
                                    <div className="card__image">
                                        <figure>
                                            <Image src= {images.recipe3} alt = "" />
                                        </figure>
                                    </div>
                                    <div className="card__content">
                                        <div className="card__title">
                                            <h3>Strawberry Almond Milk Shake (Just 3 Ingredients)</h3>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RecentNewsSection title= {recentNewsInfo.title} icon ={recentNewsInfo.icon} iconText= {recentNewsInfo.iconText} cardItems= {recentNewsInfo.cardItems}/>
                <Footer footerInfo= {footerInfo}/>
        </>
    )
}

export default PlantMilkMakersHome