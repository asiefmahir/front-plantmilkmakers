import Image from 'next/image'
import { CategoryCard } from '../Category/category-card'
// import { CategoryWidget } from '../Category/category-widget'

export const RecentViewsProducts = ({categories}) => {
    return (
        <div className = "account-setting__content">
            <div className="grid two">
            {/* <CategoryWidget />
             */}
             
             {categories.map(category => (
                 <CategoryCard key = {category.id} item= {category} />
             ))}
            </div>  
        </div>
    )
}