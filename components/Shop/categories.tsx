import Image from 'next/image'
import { Category } from '../../interfaces'
import { CategoryItem } from './categoryItem'

interface ShopCategoriesProps {
    categories: Array<Category>
}
export const ShopCategories = ({categories}: ShopCategoriesProps) => {
    return (
        <div>
            <div className="container">
                <div className="section__head">
                    <div className="section__head__title">
                        <h2>Shop Categories</h2>
                    </div>
                </div>
                <div className="section__content">
                    <div className="grid three">
                        {categories.map(category => (
                            <CategoryItem key ={category.id} category = {category}/>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}