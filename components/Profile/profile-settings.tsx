import Image from 'next/image';
import { useState } from 'react';

import { icons } from '../../public/images';

export const ProfileSettings = ({ user }: any) => {

    

    const handleChange = (e) => {
        [e.target.name] = e.target.value
    }

    return (
        <div className="account-setting__content">
            <div className="account-setting__content__title">
                <h4>Profile Setting</h4>
            </div>
            <div className="account-setting__content__changable">
                <div className="changeable__img">
                    <figure>
                        <Image src={user.profilePhoto} alt={user.name} />
                    </figure>
                </div>
                <div className="changeable__actions">
                    <button className="btn-green">Upload</button>
                    <button className="btn-outline-green">Remove</button>
                </div>
            </div>
            <div className="account-setting__content__accounts">
                <div>
                    <h5>Linked Accounts</h5>
                    <div className="accounts__linked">
                        <figure>
                            <Image src={icons.googleIcon} alt="google" />
                        </figure>
                        <p>Recent Viewed products</p>
                    </div>
                </div>
                <div className="account-setting__content__accounts__action">
                    <button className="btn-outline-green">Remove</button>
                </div>
            </div>
            <div className="account-setting__content__form">
                <div>
                    <h3>Personal Details</h3>
                    <div className="grid two">
                        <div className="field">
                            <label> First Name </label>
                            <input
                                type="text"
                                className="custom-input"
                                placeholder="Enter Your First Name"
                            />
                        </div>
                        <div className="field">
                            <label> Last Name </label>
                            <input
                                type="text"
                                className="custom-input"
                                placeholder="Enter Your Last Name"
                            />
                        </div>
                        <div className="field">
                            <label> Display Name </label>
                            <input
                                type="text"
                                className="custom-input"
                                placeholder="Enter Your Street Address"
                            />
                        </div>
                        <div className="field gender">
                            <h5>Gender</h5>
                            <div className="d-flex">
                                <label className="custom-radio" htmlFor="male">
                                    <input type="radio" id="male" name="gender" />
                                    <div className="content">
                                        <h5>Male</h5>
                                    </div>
                                </label>
                                <label className="custom-radio ml-20" htmlFor="female">
                                    <input type="radio" id="female" name="gender" />
                                    <div className="content">
                                        <h5>Female</h5>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="field">
                            <label> Email address </label>
                            <input
                                type="text"
                                className="custom-input"
                                placeholder="Enter Your City Name"
                            />
                        </div>
                        <div className="field">
                            <label> Mobile Number </label>
                            <input
                                type="number"
                                className="custom-input"
                                placeholder="Enter Your Number"
                            />
                        </div>
                        <div className="field">
                            <label> Set Password </label>
                            <input
                                type="password"
                                className="custom-input"
                                placeholder="Enter Password"
                            />
                        </div>
                        <div className="field">
                            <label> Email address </label>
                            <input
                                type="password"
                                className="custom-input"
                                placeholder="Enter Repeat Password"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Shipping Address</h3>
                    <div className="grid two">
                        <div className="field">
                            <label>Street Address</label>
                            <input
                                type="text"
                                className="custom-input"
                                placeholder="Enter Your Street Address"
                            />
                        </div>
                        <div className="field">
                            <label> Apartment, suite, etc. (Optional)</label>
                            <input
                                type="text"
                                className="custom-input"
                                placeholder="Enter Your Apartment, suite, etc"
                            />
                        </div>
                        <div className="field">
                            <label> City </label>
                            <input
                                type="text"
                                className="custom-input"
                                placeholder="Enter Your City"
                            />
                        </div>
                        <div className="field">
                            <label> State </label>
                            <input
                                type="text"
                                className="custom-input"
                                placeholder="Enter Your State"
                            />
                        </div>
                    </div>
                    <label className="custom-checkbox mt-30" htmlFor="same-address">
                        <input type="checkbox" id="same-address" />
                        <div className="content">
                            <h5>Same as shipping address</h5>
                        </div>
                    </label>
                </div>
                <div className="account-setting__content__form__action">
                    <button className="btn-green">Upload</button>
                </div>
            </div>
        </div>
    )
}