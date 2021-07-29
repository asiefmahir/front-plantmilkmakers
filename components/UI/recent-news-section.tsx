import Image from 'next/image'
import { RecentNewsCards } from '../Category/grid-card'

interface RecentNewsSectionProps {
    title: string,
    icon: any,
    iconText: string,
    cardItems : Array<{
        id: string,
        title: string,
        excerpt: string,
        image: any
    }>
    
}

export const RecentNewsSection = ({icon, title, iconText, cardItems}: RecentNewsSectionProps) => {
    return (
        <div className="section">
        <div className="container">
            <div className="section__head section__head--left">
                <div className="section__head__title">
                    {title}
                </div>
                <div className="section__head__link">
                    <a>
                      {iconText}
                      <Image src={icon} alt="" />
                    </a>
                </div>
            </div>
            <RecentNewsCards cardItems = {cardItems}/>
          
        </div>
    </div>
    )
}