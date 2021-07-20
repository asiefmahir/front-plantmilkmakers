import Image from 'next/image';
import {useState} from 'react'
import router, { useRouter } from 'next/router';

import { icons } from '../../public/images';
import { SingleCartProduct } from './single-cart-product';

export const Cart = ({cartProducts}) => {
    const [availbleProducts, setAvailableProducts] = useState(cartProducts);

    const removeProductFromCart = (id) => {
        const newAvailableProducts = availbleProducts.filter((product) => product.id !== id);
        setAvailableProducts(newAvailableProducts)
    }
    const router = useRouter()

    return (
        <div className="account-setting__content">
            <div className="account-setting__content__title">
              <h4>Product list in your cart</h4>
            </div>
            <div className="product-table-container">
              <table>
                <thead>
                  <tr>
                    <th>PRODUCT NAME</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>

                    {availbleProducts.map(product => (
                        <SingleCartProduct key= {product.id}  product= {product} removeProductFromCart= {removeProductFromCart}/>
                    ))}
                  
                 
                </tbody>
              </table>
            </div>
            <div className="apply-coupon">
              <h5>Coupon code is here</h5>
              <input
                type="text"
                className="custom-input"
                placeholder="Enter your coupon code"
              />
              <button type="button" className="btn-darkBlue">
                Apply Coupon Code
              </button>
            </div>
            <div className="grid three gap-20 buttons mt-50">
              <button onClick = {() => router.push('/chekcout')} type="button" className="btn-green btn-big">Checkout</button>
              <button type="button" className="btn-outline-green btn-big">CheckEmail to a friend out</button>
              <button type="button" className="btn-outline-green btn-big">Continue Shopping</button>
            </div>
          </div>
    )
}