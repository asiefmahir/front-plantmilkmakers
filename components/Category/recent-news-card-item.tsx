import Image from 'next/image'

interface RecentNewsCardItemProps {
    id: string,
        title: string,
        excerpt: string,
        image: any

}

export const RecentNewsCardItem = ({id, title, excerpt, image}: RecentNewsCardItemProps) => {
    return (
        <div className="card">
        <a href="#">
            <div className="card__image">
                <figure className= "card__figure">
                    <Image src= {image} alt = {title} />
                </figure>
            </div>
            <div className="card__title">
                <h3>{title}</h3>
            </div>
            <div className="card__content">
                <p>
                    {excerpt}
                </p>
            </div>
        </a>
    </div>
    )
}