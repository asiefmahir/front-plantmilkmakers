import Image from 'next/image';
import { useStoreState } from 'easy-peasy';

import { Features } from '../components/Shop/features';
import { ShopBanner } from '../components/Shop/shop-banner';
import { Footer } from '../components/UI/footer';
import { Header } from '../components/UI/header';
import { images, icons } from '../public/images';
import { features, footerInfo, listItems } from './shop';

const OrderSuccess = () => {

    const orderInfo = useStoreState((state : any) => state.order.order);
    console.log(orderInfo);
    
    const cartItems = useStoreState((state: any) => state.cart.items);


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
                            <a> Your Mail </a> to see the Order Invoice
                        </p>
                    </div>
                    <div className="total-details">
                        <div className="grid five gap-20">
                            <div className="grid__item">
                                <span> ORDER NUMBER: </span>
                                <h5>{orderInfo.id}</h5>
                            </div>
                            <div className="grid__item">
                                <span> DATE: </span>
                                <h5>{orderInfo.date}</h5>
                            </div>
                            <div className="grid__item">
                                <span> EMAIL: </span>
                                <h5>{orderInfo.userEmail}</h5>
                            </div>
                            <div className="grid__item">
                                <span> TOTAL: </span>
                                <h5>${orderInfo.totalPrice}</h5>
                            </div>
                            <div className="grid__item">
                                <span> PAYMENT METHOD: </span>
                                <h5>{orderInfo.paymentMethod}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="order-details">
                        <div className="order-details__title">
                            <h4>Your Order Details</h4>
                        </div>
                        <ul>
                            <li>
                                <h5>Price ({Object.keys(cartItems).length} items)</h5>
                                <span> $ {orderInfo.grossPrice} </span>
                            </li>
                            <li>
                                <h5>Delivery Charge</h5>
                                <span> $ {orderInfo.deliveryCharge} </span>
                            </li>
                            <li>
                                <h5>Delivery Charge</h5>
                                <span> $ {orderInfo.totalPrice} </span>
                            </li>
                        </ul>
                    </div>
                    <div className="methods">
                        <ul>
                            <li>
                                <h5>Shipping Method</h5>
                                <span> {orderInfo.shippingMethod} </span>
                            </li>
                            <li>
                                <h5>Payment Method</h5>
                                <span> {orderInfo.paymentMethod} </span>
                            </li>
                            {orderInfo.deliveryNote && (
                                <li>
                                <h5>Delivery Notes</h5>
                                <span> {orderInfo.deliveryNote} </span>
                            </li>
                            )}
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