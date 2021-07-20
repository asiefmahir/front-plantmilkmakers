import Link from 'next/link'

interface FooterColumnProps {
    // id: string
    type?: string,
    columnTitle: string,
    columnItems: Array<{
        id: string,
        href?: any,
        children: HTMLElement,
    }>
}

export const FooterColumns = ({type, columnTitle, columnItems }: FooterColumnProps) => {
    return (
        <div className="column">
            <div className="column__title">
                <h3>{columnTitle}</h3>
            </div>
            <div className="column__content">
                <ul className ={type && 'social-media'}>
                    {columnItems?.map(item => (
                        <li key={item.id}>
                            <Link href={item.href}>
                                <a>
                                    {item.children}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            {type && (<p>Our community is growing. Join us!</p>)}
        </div>
    )
}