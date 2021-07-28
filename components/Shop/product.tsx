import Image from 'next/image'
import { useStoreActions } from 'easy-peasy'

import { images } from '../../public/images'

import { ProductProps } from '../../interfaces'


export const Product = ({index, productDetails }: ProductProps) => {
    const addToCart = useStoreActions((actions: any) => actions.cart.addToCart)
    
    return (
        <div className= {`section ${index === 2  && 'section--grey'}`}>
            <div className="container">
            <div className="section__head">
                <figure>
                    <Image src={images.separator} alt="Section Break" />
                </figure>
                <div className="product__details__title">
                    <h2>{productDetails.sectionTitle}</h2>
                </div>
            </div>
            <div className="section__content">
                <div className="product">
                    <div className="product__image">
                        <figure>
                            <Image src={productDetails.productImage} alt="New Product" />
                        </figure>
                    </div>
                    <div className="product__details">
                        <div className="product__details__head">
                            <h3>{productDetails.productTitle}</h3>
                            <span> {productDetails.productLabel} </span>
                        </div>
                        <div className="product__details__price product__details__price--grey">
                            <p className="product__details__price__old">$ {productDetails.oldPrice}</p>
                            <p className="product__details__price__new">$ {productDetails.newPrice}</p>
                            {productDetails.oldPrice !== productDetails.newPrice && (
                                <span className="discount"> {productDetails.oldPrice - productDetails.newPrice}$ Off </span>
                            )}
                        </div>
                        <p>
                            {productDetails.productDescription}
                        </p>
                        <div className="product__details__action">
                            <button onClick = {() => addToCart({id: productDetails.id, title: productDetails.productTitle, image: productDetails.productImage, unitPrice: productDetails.newPrice})} className="btn-big btn-outline-green">
                                Add to Cart
                            </button>
                            <button className="btn-big btn-green">BUY NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}