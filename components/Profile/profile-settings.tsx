import Image from 'next/image';
import { useState } from 'react';
import { action, useStoreActions } from 'easy-peasy'

import { icons } from '../../public/images';

export const ProfileSettings = ({ userData }: any) => {
    const updateUserInfo = useStoreActions((actions: any) => actions.user.updateUserInfo)

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        displayName: '',
        gender: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: '',
        streetAddress: '',
        apartment: '',
        city: '',
        State: ''
    })
    // console.log(user);



    const handleChange = (e) => {
        // [e.target.name] = e.target.value;
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <div className="account-setting__content">
            <div className="account-setting__content__title">
                <h4>Profile Setting</h4>
            </div>
            <div className="account-setting__content__changable">
                <div className="changeable__img">
                    <figure>
                        <Image src={userData.profilePhoto} alt={userData.name} />
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
                                value={user.firstName}
                                onChange={(e) => handleChange(e)}
                                type="text"
                                name="firstName"
                                className="custom-input"
                                placeholder="Enter Your First Name"

                            />
                        </div>
                        <div className="field">
                            <label> Last Name </label>
                            <input
                                onChange={(e) => handleChange(e)}
                                value={user.lastName}
                                type="text"
                                name="lastName"
                                className="custom-input"
                                placeholder="Enter Your Last Name"
                            />
                        </div>
                        <div className="field">
                            <label> Display Name </label>
                            <input
                                onChange={(e) => handleChange(e)}
                                type="text"
                                name="displayName"
                                value={user.displayName}
                                className="custom-input"
                                placeholder="Enter Your Street Address"
                            />
                        </div>
                        <div className="field gender">
                            <h5>Gender</h5>
                            <div className="d-flex">
                                <label className="custom-radio" htmlFor="male">
                                    <input
                                        value="Male" onChange={(e) => handleChange(e)} type="radio" id="male" name="gender" />
                                    <div className="content">
                                        <h5>Male</h5>
                                    </div>
                                </label>
                                <label className="custom-radio ml-20" htmlFor="female">
                                    <input
                                        value="Female"
                                        onChange={(e) => handleChange(e)} type="radio" id="female" name="gender" />
                                    <div className="content">
                                        <h5>Female</h5>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="field">
                            <label> Email address </label>
                            <input
                                value={user.email}
                                onChange={(e) => handleChange(e)}
                                type="text"
                                name="email"
                                className="custom-input"
                                placeholder="Enter Your City Name"
                            />
                        </div>
                        <div className="field">
                            <label> Mobile Number </label>
                            <input
                                onChange={(e) => handleChange(e)}
                                value={user.mobile}
                                type="number"
                                name="mobile"
                                className="custom-input"
                                placeholder="Enter Your Number"
                            />
                        </div>
                        <div className="field">
                            <label> Set Password </label>
                            <input
                                onChange={(e) => handleChange(e)}
                                value={user.password}
                                type="password"
                                name="password"
                                className="custom-input"
                                placeholder="Enter Password"
                            />
                        </div>
                        <div className="field">
                            <label> Confirm Your Password </label>
                            <input
                                onChange={(e) => handleChange(e)}
                                value={user.confirmPassword}
                                type="password"
                                name="confirmPassword"
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
                                onChange={(e) => handleChange(e)}
                                value={user.streetAddress}
                                type="text"
                                name="streetAddress"
                                className="custom-input"
                                placeholder="Enter Your Street Address"
                            />
                        </div>
                        <div className="field">
                            <label> Apartment, suite, etc. (Optional)</label>
                            <input
                                onChange={(e) => handleChange(e)}
                                value={user.apartment}
                                type="text"
                                name="apartment"
                                className="custom-input"
                                placeholder="Enter Your Apartment, suite, etc"
                            />
                        </div>
                        <div className="field">
                            <label> City </label>
                            <input
                                onChange={(e) => handleChange(e)}
                                value={user.city}
                                type="text"
                                name="city"
                                className="custom-input"
                                placeholder="Enter Your City"
                            />
                        </div>
                        <div className="field">
                            <label> State </label>
                            <input
                                onChange={(e) => handleChange(e)}
                                value={user.State}
                                type="text"
                                name="State"
                                className="custom-input"
                                placeholder="Enter Your State"
                            />
                        </div>
                    </div>
                    <label className="custom-checkbox mt-30" htmlFor="same-address">
                        <input
                            onChange={(e) => handleChange(e)} type="checkbox" id="same-address" />
                        <div className="content">
                            <h5>Same as shipping address</h5>
                        </div>
                    </label>
                </div>
                <div className="account-setting__content__form__action">
                    <button className="btn-green" onClick={() => {
                        updateUserInfo(user);
                        // setUser({
                        //     firstName: '',
                        //     lastName: '',
                        //     displayName: '',
                        //     gender: '',
                        //     email: '',
                        //     mobile: '',
                        //     password: '',
                        //     confirmPassword: '',
                        //     streetAddress: '',
                        //     apartment: '',
                        //     city: '',
                        //     State: ''
                        // }
                        // )
                    }} >Upload</button>
                </div>
            </div>
        </div>
    )
}