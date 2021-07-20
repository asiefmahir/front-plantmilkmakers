
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Category } from '../../interfaces'

interface CategoryItemProps {
    key: string,
    category: Category
}
export const CategoryItem = ({key, category}: CategoryItemProps) => {

    const router = useRouter()

    return (
        <div onClick = {() => router.push('/category')} key = {key} className="card card--category">
            <a>
                <div className="card__image">
                    <figure>
                        <Image src={category.image} alt= {category.title} />
                    </figure>
                </div>
                <div className="card__title">
                    <h3>{category.title}</h3>
                </div>
            </a>
        </div>
    )
}