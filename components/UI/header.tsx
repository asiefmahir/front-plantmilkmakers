import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Navbar } from '../Shop/navbar'
import { HeaderButtons } from '../Shop/header-buttons';
interface HeaderProps {
    menubarIcon: any,
    logo: any,
    shoppingCart: any,
    user: any,
    listItems: Array<{
        id: string,
        title: string,
        href: string
    }>;
}

export const Header = ({ menubarIcon, logo, shoppingCart, user, listItems }: HeaderProps) => {

    const router = useRouter()
    return (
        <header className="header">
            <div className="container">
                <button type="button" className="mobile-menu-toggle">
                    <Image src={menubarIcon} alt="Menu Bar" />
                </button>
                <div onClick = {() => router.push('/')} className="header__logo">
                    <a className="header__logo__link">
                        <figure>
                            <Image src={logo} alt="Plant Milk Makers" />
                        </figure>
                    </a>
                </div>
                <nav className="header__navbar">
                    <Navbar listItems={listItems} />
                </nav>
                <HeaderButtons shoppingCart={shoppingCart} user={user} />
            </div>
        </header>
    )
}

// export default Header;