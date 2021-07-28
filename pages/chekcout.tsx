import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useStoreState, useStoreActions, action } from 'easy-peasy';

import { Features } from '../components/Shop/features';
import { ShopBanner } from '../components/Shop/shop-banner';
import { Footer } from '../components/UI/footer';
import { Header } from '../components/UI/header';
import { RecentNewsSection } from '../components/UI/recent-news-section';
import { icons, images } from '../public/images';
import { recentNewsInfo } from './category';
import { features, footerInfo, listItems } from './shop';

const Checkout = () => {


  const userInfo = useStoreState((state: any) => state.user.userInfo)
  // console.log(userInfo);
  const cartItems = useStoreState((state: any) => state.cart.items);

  const addOrder = useStoreActions((actions : any) => actions.order.addOrder)

  let sum = 0;

  Object.values(cartItems).forEach(item  => sum += item.cartPrice)

  const [user, setUser] = useState({
    firstName: userInfo?.firstName || '',
    lastName: userInfo?.lastName || '',
    userEmail: userInfo?.email || '',
    password: userInfo?.password || '',
    confirmPassword: userInfo?.password || '',
    streetAddress: userInfo?.shippingAddress?.streetAddress || '',
    apartment: userInfo?.shippingAddress?.apartment || '',
    city: userInfo?.shippingAddress?.city || '',
    State: userInfo?.shippingAddress?.State || '',
    deliveryNote: '',
    paymentMethod: 'PayPal',
    cardHolderName: '',
    cardExpiryDate: '',
    cardCvv: '',
    shippingMethod: 'Standard',
    deliveryCharge: 12.60,
    totalItems: Object.keys(cartItems).length,
    grossPrice: sum
  })

  const [showCardOption, setShowCardOption] = useState(false)


  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const router = useRouter()

  return (
    <div>
      <Header menubarIcon={icons.menubarIcon} logo={icons.logo} shoppingCart={icons.shoppingCart} user={icons.user} listItems={listItems} />
      < ShopBanner banner={images.bg} />
      <div className="section section--with-wave">
        <div className="container">
          <div className="checkout">
            <div className="checkout__form">
              <div className="checkout__form__actions signin">
                <button className="btn-green">REGISTER</button>
                <button className="btn-outline-green">LOGIN</button>
              </div>
              <div className="fields">
                <div className="field">
                  <label> Email address </label>
                  <input
                    value={user.userEmail}
                    name='userEmail'
                    onChange={(e) => handleChange(e)}
                    className="custom-input"
                    type="text"
                    placeholder="Email address"
                  />
                  <label
                    className="custom-checkbox mt-30 mb-30"
                    htmlFor="create-an-account"
                  >
                    <input
                      onChange={(e) => handleChange(e)} type="checkbox" id="create-an-account" />
                    <div className="content">
                      <h5>Create an Account</h5>
                    </div>
                  </label>
                </div>
              </div>
              <div className="fields grid two">
                <div className="field">
                  <label> Password </label>
                  <input
                    value={user.password}
                    name="password"
                    onChange={(e) => handleChange(e)}
                    className="custom-input"
                    type="password"
                    placeholder="********"
                  />
                </div>
                <div className="field">
                  <label> Confirm password </label>
                  <input
                    value={user.password}
                    name="confirmPassword"
                    onChange={(e) => handleChange(e)}
                    className="custom-input"
                    type="password"
                    placeholder="********"
                  />
                </div>
              </div>
              <div className="fields grid two">
                <div className="field">
                  <label> First Name </label>
                  <input
                    value={user.firstName}

                    name="firstName"
                    onChange={(e) => handleChange(e)}
                    className="custom-input"
                    type="text"
                    placeholder="Enter Your First Name"
                  />
                </div>
                <div className="field">
                  <label> Last Name </label>
                  <input
                    name="lastName"
                    value={user.lastName}

                    onChange={(e) => handleChange(e)}
                    className="custom-input"
                    type="text"
                    placeholder="Enter Your Last Name"
                  />
                </div>
                <div className="field">
                  <label> Street Address </label>
                  <input
                    value={user.streetAddress}

                    name="streetAddress"

                    onChange={(e) => handleChange(e)}
                    className="custom-input"
                    type="text"
                    placeholder="Enter Your Street Address"
                  />
                </div>
                <div className="field">
                  <label> Apartment (optional) </label>
                  <input
                    value={user.apartment}

                    name="apartment"

                    onChange={(e) => handleChange(e)}
                    className="custom-input"
                    type="text"
                    placeholder="Enter Your Apartment, suite, etc."
                  />
                </div>
                <div className="field">
                  <label> City </label>
                  <input
                    name="city"
                    value={user.city}

                    onChange={(e) => handleChange(e)}
                    className="custom-input"
                    type="text"
                    placeholder="Enter Your City Name"
                  />
                </div>
                <div className="field">
                  <label> State </label>
                  <input
                    name="State"
                    value={user.State}

                    onChange={(e) => handleChange(e)}
                    className="custom-input"
                    type="text"
                    placeholder="Enter Your State Name"
                  />
                </div>
              </div>
              <div className="fields">
                <div className="field big-field">
                  <label> Delivery Instructions/Additional note </label>
                  <textarea
                    onChange={(e) => handleChange(e)}
                    name="deliveryNote"
                    value={user.deliveryNote}

                    className="custom-input"
                    //   type="text"
                    placeholder="Enter Your Additional note"
                  ></textarea>
                </div>
              </div>
              <div className="fields">
                <div className="field">
                  <div className="checkbox">
                    <h4>Billing address</h4>
                    <label className="custom-checkbox mb-30" htmlFor="create-an-account2">
                      <input
                        onChange={(e) => handleChange(e)} type="checkbox" id="create-an-account2" />
                      <div className="content">
                        <h5>Create an Account</h5>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="fields">
                <div className="field field__term">
                  <label className="custom-checkbox mb-30" htmlFor="terms-conditions">
                    <input
                      onChange={(e) => handleChange(e)} type="checkbox" id="terms-conditions" />
                    <div className="content">
                      <h5>I agree to the <a href="#">Terms & Conditions</a></h5>
                    </div>
                  </label>
                </div>
              </div>
              <div className="checkout__form__actions">
                <button className="btn-grey">Back</button>
                <button onClick = {() => {
                  if(user.userEmail && user.paymentMethod && user.grossPrice !== 0) {
                    addOrder(user)
                    router.push('/order-success')
                  } else {
                    alert(`Please fillUp the required fields (eg: Payment Method, Shipping Option, Your Email) `)
                  }
                }} className="btn-green">Place order</button>
              </div>
            </div>
            <div className="section section--grey">
              <div className="checkout">
                <div className="checkout__order-details">
                  <div>
                    <h4>Your Order Details</h4>
                    <ul>
                      <li>
                        Price ({user.totalItems} items)
                        <span> $ {user.grossPrice} </span>
                      </li>
                      <li>
                        Delivery Charge
                        <span> $ {user.deliveryCharge} </span>
                      </li>
                      <li className="total-price">
                        Total Price
                        <span> $ {user.grossPrice + user.deliveryCharge} </span>
                      </li>
                    </ul>
                  </div>
                  <div className="options">
                    <h4>Shipping option</h4>
                    <ul>
                      <li>
                        <label className="custom-radio" htmlFor="standard">
                          <input
                            value = "Standard"
                            onChange={(e) => {
                              handleChange(e)
                              setUser({...user, deliveryCharge: 12.60})
                            }} type="radio" id="standard" name="shippingOption" />
                          <div className="content">
                            <h5>Standard</h5>
                            <p>Usually it takes 2 days</p>
                          </div>
                          <span className="price"> $ 12.60 </span>
                        </label>
                      </li>

                      <li>
                        <label className="custom-radio" htmlFor="ground">
                          <input
                          value = "UPS Ground"
                          onChange={(e) => {
                            handleChange(e)
                            setUser({...user, deliveryCharge: 13.40})
                          }} type="radio" id="ground" name="shippingOption" />
                          <div className="content">
                            <h5>UPS Ground</h5>
                            <p>Usually it takes 2 days</p>
                          </div>
                          <span className="price"> $ 13.40 </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="paymeny-option">
                    <h4>Payment Option</h4>
                    <div className="fields">
                      <div className="field">
                        <label className="custom-checkbox mb-30" htmlFor="pay-with-card">
                          <input
                            name = "paymentMethod"
                            value = "Credit Card"
                            checked={showCardOption}
                            onChange={(e) => {
                              setShowCardOption(!showCardOption)
                              handleChange(e)
                            }} type="checkbox" id="pay-with-card" />
                          <div className="content">
                            <h5>Pay with your Card</h5>
                            <p>All transactions are secure and encrypted.</p>
                          </div>
                        </label>
                      </div>
                    </div>
                    {showCardOption && (
                      <div className="fields fields--card">
                        <div className="field">
                          <label> Cardholder Name </label>
                          <input
                            name = 'cardHolderName'
                            value = {user.cardHolderName}
                            onChange={(e) => handleChange(e)}
                            type="text"
                            className="custom-input"
                            placeholder="Enter Cardholder Name"
                          />
                        </div>
                        <div className="grid two">
                          <div className="field">
                            <label> Expire Date </label>
                            <input
                            value = {user.cardExpiryDate}
                            name = "cardExpiryDate"
                              onChange={(e) => handleChange(e)}
                              type="text"
                              className="custom-input"
                              placeholder="05    /    21"
                            />
                          </div>
                          <div className="field">
                            <label> CVV </label>
                            <input
                            value = {user.cardCvv}
                            name = "cardCvv"

                              onChange={(e) => handleChange(e)} type="text" className="custom-input" placeholder="123" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="payment-methods">
                    <ul>
                      <li>
                        <div className="d-flex align-items-center">
                          <label className="custom-radio" htmlFor="payPal">
                            <input
                              value = "PayPal"
                              onChange={(e) => handleChange(e)} type="radio" id="payPal" name="paymentMethod" />
                            <div className="content">
                              <h5>Paypal</h5>
                            </div>
                          </label>
                          <div className="payment-methods__img">
                            <figure>
                              <Image src={icons.paypalIcon} alt="" />
                            </figure>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center">
                          <label className="custom-radio" htmlFor="apple-pay">
                            <input
                              value = "Apple Pay"
                              onChange={(e) => handleChange(e)}
                              type="radio"
                              id="apple-pay"
                              name="paymentMethod"
                            />
                            <div className="content">
                              <h5>Apple Pay</h5>
                            </div>
                          </label>
                          <div className="payment-methods__img">
                            <figure>
                              <Image src={icons.appleStoreIcon} alt="" />
                            </figure>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center">
                          <label className="custom-radio" htmlFor="google-pay">
                            <input
                              value = "Google Pay"
                              onChange={(e) => handleChange(e)}
                              type="radio"
                              id="google-pay"
                              name="paymentMethod"
                            />
                            <div className="content">
                              <h5>Google Pay</h5>
                            </div>
                          </label>
                          <div className="payment-methods__img">
                            <figure>
                              <Image src={icons.playStoreIcon} alt="" />
                            </figure>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          

        </div>
      </div>
      <RecentNewsSection title={recentNewsInfo.title} icon={recentNewsInfo.icon} iconText={recentNewsInfo.iconText} cardItems={recentNewsInfo.cardItems} />
      <Features features={features} />
      <Footer footerInfo={footerInfo} />
    </div>
  )
}

export default Checkout;