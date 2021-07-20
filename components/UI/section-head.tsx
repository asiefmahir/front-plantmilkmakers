import Image from 'next/image'
interface SectionHeadProps {
    icon: any,
    title: string
}
export const SectionHead = ({icon, title}: SectionHeadProps) => {
    return (
        <div className="section__head">
        <figure>
            <Image src={icon} alt = "Section Break" />
        </figure>
        <div className="product__details__title">
            <h2>
                {title}
            </h2>
        </div>
    </div>
    )
}