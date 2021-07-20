import { SectionHead } from "../UI/section-head"
import { CategoryCard } from "./category-card"

interface CategoryWidgetProps {
    icon: any,
    title: string,
    categoryItems: Array<{
        id: string,
        label: string,
        image: any,
        title: string,
        excerpt: string,
        oldPrice: number,
        newPrice: number
    }>

}

export const CategoryWidget = ({icon, title, categoryItems} : CategoryWidgetProps ) => {
    return (
        <div className="section section--with-wave">
            <div className="container">
               <SectionHead icon={icon} title= {title}/>
                <div className="section__content">
                    <div className="grid three">
                        {/* <CategoryCard /> */}
                        {categoryItems.map(item => (
                            <CategoryCard key= {item.id} item = {item}/>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}