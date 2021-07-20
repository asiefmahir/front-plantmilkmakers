import { useState } from "react"

export const ProductCartInput = () => {
    const [quantity, setQuantity] = useState(1)
    return (
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
    )
}