import Image from 'next/image';
import { useState } from 'react'
import { icons } from '../../public/images';

export const SingleCartProduct = ({ product, removeProductFromCart }) => {
    const [quantity, setQuantity] = useState(1)
    return (
        <tr key={product.id}>
            <td>
                <div className="product">
                    <Image
                        src={product.image}
                        className="product-img"
                        alt=""
                    />
                    <p>{product.title}</p>
                </div>
            </td>
            <td>$ {product.price}</td>
            <td>
                <div className="qty_input">
                    <button
                        className="qty-count qty-count--minus"
                        data-action="minus"
                        type="button"
                    >
                        <figure onClick = {() => setQuantity(prev => prev - 1)}>
                            <Image src={icons.minusIcon} alt="Minus" />
                        </figure>
                    </button>
                    <input
                        className="product-qty"
                        type="number"
                        name="product-qty"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                    //   min="0"
                    //   max="10"
                    //   value="1"
                    />
                    <button
                        className="qty-count qty-count--add"
                        data-action="add"
                        type="button"
                    >
                        <figure onClick = {() => setQuantity((prev) => prev + 1)}>
                            <Image src={icons.plusIcon} alt="Plus" />
                        </figure>
                    </button>
                </div>
            </td>
            <td>$ {product.price * quantity} </td>
            <td onClick={() => removeProductFromCart(product.id)} className="remove">
                <svg viewBox="0 0 11.6 11.6">
                    <use xlinkHref="images/sprite.svg#times"></use>
                </svg>
            </td>
        </tr>
    )
}