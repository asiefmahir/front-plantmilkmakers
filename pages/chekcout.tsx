import Image from 'next/image';
import { useRouter } from 'next/router';
import { Features } from '../components/Shop/features';
import { ShopBanner } from '../components/Shop/shop-banner';
import { Footer } from '../components/UI/footer';
import { Header } from '../components/UI/header';
import { RecentNewsSection } from '../components/UI/recent-news-section';
import { icons, images } from '../public/images';
import { recentNewsInfo } from './category';
import { features, footerInfo, listItems } from './shop';

const Checkout = () => {

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
                  className="custom-input"
                  type="text"
                  placeholder="Email address"
                />
                <label
                  className="custom-checkbox mt-30 mb-30"
                  htmlFor="create-an-account"
                >
                  <input type="checkbox" id="create-an-account" />
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
                  className="custom-input"
                  type="password"
                  placeholder="********"
                />
              </div>
              <div className="field">
                <label> Confirm password </label>
                <input
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
                  className="custom-input"
                  type="text"
                  placeholder="Enter Your First Name"
                />
              </div>
              <div className="field">
                <label> Last Name </label>
                <input
                  className="custom-input"
                  type="text"
                  placeholder="Enter Your Last Name"
                />
              </div>
              <div className="field">
                <label> Street Address </label>
                <input
                  className="custom-input"
                  type="text"
                  placeholder="Enter Your Street Address"
                />
              </div>
              <div className="field">
                <label> Apartment (optional) </label>
                <input
                  className="custom-input"
                  type="text"
                  placeholder="Enter Your Apartment, suite, etc."
                />
              </div>
              <div className="field">
                <label> City </label>
                <input
                  className="custom-input"
                  type="text"
                  placeholder="Enter Your City Name"
                />
              </div>
              <div className="field">
                <label> State </label>
                <input
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
                    <input type="checkbox" id="create-an-account2" />
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
                  <input type="checkbox" id="terms-conditions" />
                  <div className="content">
                    <h5>I agree to the <a href="#">Terms & Conditions</a></h5>
                  </div>
                </label>
              </div>
            </div>
            <div className="checkout__form__actions">
              <button className="btn-grey">Back</button>
              <button className="btn-green">Place order</button>
            </div>
          </div>
          <div className="section section--grey">
            <div className="checkout">
              <div className="checkout__order-details">
                <div>
                  <h4>Your Order Details</h4>
                  <ul>
                    <li>
                      Price (4 items)
                      <span> $ 128.60 </span>
                    </li>
                    <li>
                      Delivery Charge
                      <span> $ 15.00 </span>
                    </li>
                    <li className="total-price">
                      Total Price
                      <span> $ 143.00 </span>
                    </li>
                  </ul>
                </div>
                <div className="options">
                  <h4>Shipping option</h4>
                  <ul>
                    <li>
                      <label className="custom-radio" htmlFor="standard">
                        <input type="radio" id="standard" name="shipping-option" />
                        <div className="content">
                          <h5>Standard</h5>
                          <p>Usually it takes 2 days</p>
                        </div>
                        <span className="price"> $ 12.60 </span>
                      </label>
                    </li>
    
                    <li>
                      <label className="custom-radio" htmlFor="ground">
                        <input type="radio" id="ground" name="shipping-option" />
                        <div className="content">
                          <h5>UPS Ground</h5>
                          <p>Usually it takes 2 days</p>
                        </div>
                        <span className="price"> $ 12.60 </span>
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="paymeny-option">
                  <h4>Payment Option</h4>
                  <div className="fields">
                    <div className="field">
                      <label className="custom-checkbox mb-30" htmlFor="pay-with-card">
                        <input type="checkbox" id="pay-with-card" />
                        <div className="content">
                          <h5>Pay with your Card</h5>
                          <p>All transactions are secure and encrypted.</p>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="fields fields--card">
                    <div className="field">
                      <label> Cardholder Name </label>
                      <input
                        type="text"
                        className="custom-input"
                        placeholder="Enter Cardholder Name"
                      />
                    </div>
                    <div className="grid two">
                      <div className="field">
                        <label> Expire Date </label>
                        <input
                          type="text"
                          className="custom-input"
                          placeholder="05    /    21"
                        />
                      </div>
                      <div className="field">
                        <label> CVV </label>
                        <input type="text" className="custom-input" placeholder="123" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="payment-methods">
                  <ul>
                    <li>
                      <div className="d-flex align-items-center">
                        <label className="custom-radio" htmlFor="payPal">
                          <input type="radio" id="payPal" name="payment-method" />
                          <div className="content">
                            <h5>Paypal</h5>
                          </div>
                        </label>
                        <div className="payment-methods__img">
                          <figure>
                            <Image src={icons.paypalIcon} alt = "" />
                          </figure>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <label className="custom-radio" htmlFor="apple-pay">
                          <input
                            type="radio"
                            id="apple-pay"
                            name="payment-method"
                          />
                          <div className="content">
                            <h5>Apple Pay</h5>
                          </div>
                        </label>
                        <div className="payment-methods__img">
                          <figure>
                            <Image src={icons.appleStoreIcon} alt = "" />
                          </figure>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <label className="custom-radio" htmlFor="google-pay">
                          <input
                            type="radio"
                            id="google-pay"
                            name="payment-method"
                          />
                          <div className="content">
                            <h5>Google Pay</h5>
                          </div>
                        </label>
                        <div className="payment-methods__img">
                          <figure>
                            <Image src={icons.playStoreIcon} alt = "" />
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
            <RecentNewsSection title= {recentNewsInfo.title} icon ={recentNewsInfo.icon} iconText= {recentNewsInfo.iconText} cardItems= {recentNewsInfo.cardItems}/>
                <Features features= {features}/>
                <Footer footerInfo= {footerInfo}/>
        </div>
    )
}

export default Checkout;