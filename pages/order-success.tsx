import Image from 'next/image';
import { Features } from '../components/Shop/features';
import { ShopBanner } from '../components/Shop/shop-banner';
import { Footer } from '../components/UI/footer';
import { Header } from '../components/UI/header';
import { images, icons } from '../public/images';
import { features, footerInfo, listItems } from './shop';

const OrderSuccess = () => {
    return (
        <div>
            <Header menubarIcon={icons.menubarIcon} logo={icons.logo} shoppingCart={icons.shoppingCart} user={icons.user} listItems={listItems} />
            < ShopBanner banner={images.bg} />
            <div className="section section--with-wave">
                <div className="container">
                    <div className="thanks-note">
                        <figure>
                            <Image src={icons.successIcon} alt="Tick" />
                        </figure>
                        <p>
                            Thank you. Your order has been received. Please check
                            <a href="#"> Your Mail </a> to see the Order Invoice
                        </p>
                    </div>
                    <div className="total-details">
                        <div className="grid five gap-20">
                            <div className="grid__item">
                                <span> ORDER NUMBER: </span>
                                <h5>XRQ4567</h5>
                            </div>
                            <div className="grid__item">
                                <span> DATE: </span>
                                <h5>April 22, 2021</h5>
                            </div>
                            <div className="grid__item">
                                <span> EMAIL: </span>
                                <h5>customer@demo.com</h5>
                            </div>
                            <div className="grid__item">
                                <span> TOTAL: </span>
                                <h5>$143.00</h5>
                            </div>
                            <div className="grid__item">
                                <span> PAYMENT METHOD: </span>
                                <h5>Credit Card</h5>
                            </div>
                        </div>
                    </div>
                    <div className="order-details">
                        <div className="order-details__title">
                            <h4>Your Order Details</h4>
                        </div>
                        <ul>
                            <li>
                                <h5>Price (4 items)</h5>
                                <span> $ 128.60 </span>
                            </li>
                            <li>
                                <h5>Delivery Charge</h5>
                                <span> $ 15.00 </span>
                            </li>
                            <li>
                                <h5>Delivery Charge</h5>
                                <span> $ 143.00 </span>
                            </li>
                        </ul>
                    </div>
                    <div className="methods">
                        <ul>
                            <li>
                                <h5>Shipping Method</h5>
                                <span> Ups Ground </span>
                            </li>
                            <li>
                                <h5>Payment Method</h5>
                                <span> Credit Card </span>
                            </li>
                            <li>
                                <h5>Delivery Notes</h5>
                                <span> Lorem Ipsum demo text </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Features features={features} />
            <Footer footerInfo={footerInfo} />
        </div>
    )
}

export default OrderSuccess