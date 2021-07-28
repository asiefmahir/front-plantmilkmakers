import Image from 'next/image'
import { useRouter } from 'next/router'

interface CategoryItem {
    item: {
        id: string,
        label: string,
        image: any,
        title: string,
        excerpt: string,
        oldPrice: number,
        newPrice: number
    }
}

export const CategoryCard = ({ item }: CategoryItem) => {

    const router = useRouter()

    return (
        <div onClick={() => router.push('/product-details')} className="ingredient">
            <a>
                <div className="ingredient__label">
                    {item.label}
                </div>
                <div className="ingredient__image">
                    <figure>
                        <Image src={item.image} alt={item.title} />
                    </figure>
                </div>
                <div className="ingredient__title">
                    <h3>
                        {item.title}
                    </h3>
                </div>
                <div className="ingredient__content">
                    <p>
                        {item.excerpt}
                    </p>
                    <p className="price">
                        <span>
                            ${item.oldPrice}
                        </span> From ${item.newPrice}
                    </p>
                </div>
                <div className="ingredient__overlay">
                    <button onClick={() => router.push('/shop')} className="btn-white">
                        ADD TO CART
                    </button>
                </div>
            </a>
        </div>
    )
}