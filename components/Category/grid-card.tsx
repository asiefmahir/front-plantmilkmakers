import { RecentNewsCardItem } from './recent-news-card-item';

interface RecentNewsCardsProps {
    cardItems : Array<{
        id: string,
        title: string,
        excerpt: string,
        image: any
    }>
}

export const RecentNewsCards = ({cardItems}: RecentNewsCardsProps) => {
    return (
        <div className="section__content">
        <div className="grid four">
            {cardItems.map(card => (
                <RecentNewsCardItem key = {card.id} id = {card.id} title= {card.title} excerpt = {card.excerpt} image= {card.image}/>
            ))}
        </div>
    </div>
    )
}