import Image from 'next/image'
import { useState } from 'react'
import { Header } from '../components/UI/header';
import { ShopBanner } from '../components/Shop/shop-banner';
import { RecentNewsSection } from '../components/UI/recent-news-section';
import { Footer } from '../components/UI/footer';
import { Features } from '../components/Shop/features';



import { icons, images } from '../public/images';
import { features, footerInfo, listItems } from './shop';
import { recentNewsInfo } from './category';

interface ProductInfo {
    productInfo: {
        id: string,
        mainProductTitle: string,
        productVariants: Array<{
            id: string,
            image: any,
            isMainVariant: boolean,
            title: string,
            excerpt: string,
            averageRating: number,
            totalRatingCount: number,
            tags?: Array<string>,
            oldPrice: number,
            newPrice: number,
            availableStock: number,
            sku: number,
            description: string,
            descriptionImages: any,
            keyFacts: Array<{
                id: string,
                title: string,
                excerpt: string
            }>,
        }>
    }
}

const ProductDetails = ({ productInfo }: ProductInfo) => {

    let mainVariant = productInfo.productVariants.find((variant) => variant.isMainVariant === true);
    const [activeProduct, setActiveProduct] = useState(mainVariant)
    let otherVariants = productInfo.productVariants.filter((variant) => variant.id !== activeProduct?.id)
    let ratingAverageFloor = Math.floor(activeProduct?.averageRating as number)

    return (
        <>
        <Header menubarIcon={icons.menubarIcon} logo={icons.logo} shoppingCart={icons.shoppingCart} user={icons.user} listItems={listItems}/>
                < ShopBanner actions banner = {images.bg}/>
            <div className="section section--with-wave">
                <div className="container">
                    <div className="product-details">
                        <div className="product-details__slider">
                            <div className="product-details__slider__slider-item">
                                <figure>
                                    <Image src={activeProduct?.image} alt = {activeProduct?.title}/>
                                </figure>
                            </div>
                            <div className="product-details__slider__slider-thumbs">
                                {productInfo.productVariants.map(variant => (
                                    <div onClick= {() => setActiveProduct(variant)} key = {variant.id} className="product-details__slider__slider-thumbs__thumb active">
                                    <figure>
                                        <Image src={variant.image} alt = {variant.title}/>
                                    </figure>
                                </div>
                                ))}
                            </div>
                        </div>
                        <div className="product-details__body">
                            <h3>{activeProduct?.title}</h3>
                            <p>
                                {activeProduct?.excerpt}
                            </p>
                            <div className="product-details__body__total-voting">
                                <span> {activeProduct?.averageRating} </span>
                                <div className="stars">
                                    <figure>
                                        <Image src={images.star} alt = "star"/>
                                    </figure>
                                    <figure>
                                        <Image src={images.star} alt = "star"/>
                                    </figure>
                                    <figure>
                                        <Image src={images.star} alt = "star"/>
                                    </figure>
                                    <figure>
                                        <Image src={images.star} alt = "star"/>
                                    </figure>
                                    <figure>
                                        <Image src={images.halfStart} alt = "star"/>
                                    </figure>
                                </div>
                                <p>({activeProduct?.totalRatingCount} Ratings)</p>
                            </div>
                            <div className="product-details__body__weight">
                                {/* <button type="button" className="btn-outline-weight">Hello</button>
                                <button type="button" className="btn-outline-weight">Hello</button>
                                <button type="button" className="btn-outline-weight">Hello</button> */}
                                {productInfo.productVariants.map(variant => (
                                   <button onClick= {() => setActiveProduct(variant)} key = {variant.id} type="button" className="btn-outline-weight">{variant.title}</button> 
                                ))}
                            </div>
                            <div className="product-details__body__price">
                                <p className="grey-text">$ {activeProduct?.oldPrice}</p>
                                <p className="dark-text">$ {activeProduct?.newPrice}</p>
                                <span className="discount orange-bg"> {activeProduct && Math.floor((((activeProduct.oldPrice - activeProduct.newPrice) / activeProduct.oldPrice) * 100 )) }% Off </span>
                            </div>
                            <div className="product-details__body__quantity">
                                <div className="quantity__left-side">
                                    <div className="qty_input">
                                        <button
                                            className="qty-count qty-count--minus"
                                            data-action="minus"
                                            type="button"
                                        >
                                            <figure>
                                                <Image src={icons.minusIcon}  alt = "minusIcon"/>
                                            </figure>
                                        </button>
                                        <input
                                            className="product-qty"
                                            type="number"
                                            name="product-qty"
                                            min="0"
                                            max="10"
                                            value="1"
                                        />
                                        <button
                                            className="qty-count qty-count--add"
                                            data-action="add"
                                            type="button"
                                        >
                                            <figure>
                                                <Image src={icons.plusIcon} alt= "plus-icon" />
                                            </figure>
                                        </button>
                                    </div>
                                    <div className="unit-number">
                                        <p>
                                            SKU:
                                            <span> {activeProduct?.availableStock} </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="quantity__action">
                                    <button className="btn-green">Add to Cart</button>
                                </div>
                            </div>
                            <div className="product-details__body__subscribe">
                                <p>Subscribe to save {activeProduct && Math.floor((((activeProduct.oldPrice - activeProduct.newPrice) / activeProduct.oldPrice) * 100 )) } %</p>
                                <div className="subscribe__action">
                                    <button className="btn-grey">SUBSCRIBE</button>
                                    <span className="discount orange-bg"> {activeProduct && Math.floor((((activeProduct.oldPrice - activeProduct.newPrice) / activeProduct.oldPrice) * 100 )) } % Off </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section section--no-top-padding">
                <div className="container">
                    <div className="product-info">
                        <div className="tabs">
                            <div className="tabs__links">
                                <ul>
                                    <li>
                                        <a href="#" className="active">Product Details</a>
                                    </li>
                                    <li>
                                        <a href="#">Reviews</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tabs__content">
                                <h3>About</h3>
                                <p>
                                   {activeProduct?.description}
                                </p>
                                <div className="tabs__content__Image">
                                    <figure>
                                        <Image src={activeProduct?.descriptionImages} alt = ""/>
                                    </figure>
                                </div>
                                <div className="tabs__content__key-facts">
                                    <h3>Key Facts</h3>
                                    <ul>
                                        {activeProduct?.keyFacts.map(fact => (
                                             <li key = {fact.id}>
                                             <figure>
                                                 <Image src={icons.checkIcon} alt = "checked" />
                                             </figure>
                                             <h4>{fact.title} -</h4>
                                             <p>
                                                 {fact.excerpt}
                                             </p>
                                         </li>
                                        ))}
                                       
                             
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="nutrition-facts">
                            <div className="nutrition-facts__title">
                                <figure>
                                    <Image src={icons.nutritionIcon} alt = 'nutrition' />
                                </figure>
                                <h4>Nutrition Facts</h4>
                            </div>
                            <div className="nutrition-facts__content">
                                <div className="nutrition-facts__content__head">
                                    <span> Per 80z Serving </span>
                                    <h3>
                                        Calories
                                        <span> 93 </span>
                                    </h3>
                                </div>
                                <div className="nutrition-facts__content__table">
                                    <table>
                                        <tr>
                                            <th colSpan={1}></th>
                                            <th>Value</th>
                                            <th className="colored-cell">Daliy%</th>
                                        </tr>
                                        <tr>
                                            <td className="colored-cell ingredient-title" colSpan={5}>
                                                <div className="sub-title">
                                                    <div className="icon"></div>
                                                    Energy
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Total Carbohydrates</td>
                                            <td>39.2g</td>
                                            <td className="colored-cell">12%</td>
                                        </tr>
                                        <tr>
                                            <td>Dietary Fiber</td>
                                            <td>15.6g</td>
                                            <td className="colored-cell">60%</td>
                                        </tr>
                                        <tr>
                                            <td>Sugars</td>
                                            <td>6.4g</td>
                                            <td className="colored-cell">8%</td>
                                        </tr>
                                        <tr>
                                            <td>Protein</td>
                                            <td>17.2</td>
                                            <td className="colored-cell">34%</td>
                                        </tr>
                                        <tr>
                                            <td className="colored-cell ingredient-title" colSpan={5}>
                                                <div className="sub-title">
                                                    <div className="icon"></div>
                                                    Energy
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Total Carbohydrates</td>
                                            <td>39.2g</td>
                                            <td className="colored-cell">12%</td>
                                        </tr>
                                        <tr>
                                            <td>Dietary Fiber</td>
                                            <td>15.6g</td>
                                            <td className="colored-cell">60%</td>
                                        </tr>
                                        <tr>
                                            <td>Sugars</td>
                                            <td>6.4g</td>
                                            <td className="colored-cell">8%</td>
                                        </tr>
                                        <tr>
                                            <td>Protein</td>
                                            <td>17.2</td>
                                            <td className="colored-cell">34%</td>
                                        </tr>
                                        <tr>
                                            <td className="colored-cell ingredient-title" colSpan={5}>
                                                <div className="sub-title">
                                                    <div className="icon"></div>
                                                    Energy
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Total Carbohydrates</td>
                                            <td>39.2g</td>
                                            <td className="colored-cell">12%</td>
                                        </tr>
                                        <tr>
                                            <td>Dietary Fiber</td>
                                            <td>15.6g</td>
                                            <td className="colored-cell">60%</td>
                                        </tr>
                                        <tr>
                                            <td>Sugars</td>
                                            <td>6.4g</td>
                                            <td className="colored-cell">8%</td>
                                        </tr>
                                        <tr>
                                            <td>Protein</td>
                                            <td>17.2</td>
                                            <td className="colored-cell">34%</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RecentNewsSection title= {recentNewsInfo.title} icon ={recentNewsInfo.icon} iconText= {recentNewsInfo.iconText} cardItems= {recentNewsInfo.cardItems}/>
                <Features features= {features}/>
                <Footer footerInfo= {footerInfo}/>
        </>
    )
}

export default ProductDetails;
