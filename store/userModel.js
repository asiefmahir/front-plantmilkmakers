import { action, persist } from 'easy-peasy';
import shortid from 'shortid';

export const userModel =
    {
        userInfo: {},
        
        updateUserInfo: action((state, payload) => {
            state.userInfo.firstName = payload.firstName;
            state.userInfo.lastName = payload.lastName;
            state.userInfo.displayName = payload.displayName;
            state.userInfo.gender = payload.gender;
            state.userInfo.email = payload.email;
            state.userInfo.mobile = payload.mobile;
            state.userInfo.password = payload.password;
            state.userInfo.shippingAddress = {
                streetAddress: payload.streetAddress,
                apartment: payload.apartment,
                city: payload.city,
                State: payload.State
            }
        })
    
    
    }