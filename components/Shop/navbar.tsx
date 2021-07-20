import Link from 'next/link';

import { listItemsProps } from '../../interfaces';

export const Navbar = ({ listItems }: listItemsProps) => {
    return (
        <ul>
            {listItems.map(item => (
                <li key={item.id}>
                    <Link href={item.href}>
                        <a> {item.title} </a>
                    </Link>
                </li>
            ))}
        </ul>
    )
}