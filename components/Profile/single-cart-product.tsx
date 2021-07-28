import Image from 'next/image';
import { action, useStoreActions, useStoreState } from 'easy-peasy';
import { useState } from 'react'
import { icons } from '../../public/images';

export const SingleCartProduct = ({ product, removeProductFromCart }) => {

    const updatePriceOfAItem = useStoreActions((actions : any) => actions.cart.updatePriceOfAItem);
    const updateUnitofAItem = useStoreActions((actions) => actions.cart.updateUnitOfAItem)
    console.log(product);
    
    console.log(removeProductFromCart);

    const update = (quantitySetter, callback) => {
        
    }
    
    const [quantity, setQuantity] = useState(product.unit)
    return (
        <tr key={product.id}>
            <td>
                <div className="product">
                    <Image
                        src={product.image}
                        className="product-img"
                        alt="ss"
                    />
                    <p>{product.title}</p>
                </div>
            </td>
            <td>$ {product.unitPrice}</td>
            <td>
                <div className="qty_input">
                    <button
                        className="qty-count qty-count--minus"
                        data-action="minus"
                        type="button"
                    >
                        <figure onClick = {() => {
                            setQuantity(prev => prev - 1)
                            updatePriceOfAItem({id: product.id, cartPrice: product.unitPrice * quantity})
                        }}>
                            <Image src={icons.minusIcon} alt="Minus" />
                        </figure>
                    </button>
                    <input
                        className="product-qty"
                        type="number"
                        name="product-qty"
                        value={quantity}
                        onChange={(e) => {
                            setQuantity(Number(e.target.value))
                            updatePriceOfAItem({id: product.id, cartPrice: product.unitPrice * quantity})
                        }}
                    //   min="0"
                    //   max="10"
                    //   value="1"
                    />
                    <button
                        className="qty-count qty-count--add"
                        data-action="add"
                        type="button"
                    >
                        <figure onClick = {() => {
                            setQuantity((prev) => prev + 1);
                            
                            updatePriceOfAItem({id: product.id, cartPrice: product.unitPrice * (quantity + 1)})
                            updateUnitofAItem({id: product.id, unit: quantity + 1})

                        }}>
                            <Image src={icons.plusIcon} alt="Plus" />
                        </figure>
                    </button>
                </div>
            </td>
            <td>$ {product.unitPrice * quantity} </td>
            <td onClick={() => {
                console.log('Clicked');
                console.log(product.id);
                
                removeProductFromCart(product.id)
            }} className="remove">
                <svg viewBox="0 0 11.6 11.6">
                    <use xlinkHref="images/sprite.svg#times"></use>
                </svg>
            </td>
        </tr>
    )
}