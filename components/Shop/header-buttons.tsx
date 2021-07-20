import Image from 'next/image'
import Link from 'next/link'

interface HeaderButtonsProps {
    shoppingCart: any,
    user: any
}

export const HeaderButtons = ({shoppingCart, user}: HeaderButtonsProps) => {
    return (
        <div className="header__buttons">
        <div className="header__cart-btn">
          <a>
            <figure>
              <Image src={shoppingCart} alt="Cart" />
            </figure>
            <span> 0 </span>
          </a>
        </div>
        <div className="header__user-btn">
          <Link href = "/user-profile" >
            <a>
            <Image src={user} alt="User Count" />
            </a>
          </Link>
        </div>
        <div className="header__signin-btn">
        <a className="btn-green">
            {/* <Image src={user} alt="User Count" /> */}
            <span>Sign In</span>
          </a>
        </div>
        
      </div>
    )
}