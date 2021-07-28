import { action, persist } from 'easy-peasy';
import shortid from 'shortid';

export const orderModel =
    {
        order: {},

        addOrder: action((state, payload) => {
            state.order.id = shortid.generate()
            state.order.userEmail = payload.userEmail
            state.order.firstName = payload.userEmail
            state.order.lastName = payload.lastName
            state.order.password = payload.password
            state.order.confirmPassword = payload.confirmPassword
            state.order.shippingAddress = {
                streetAddress: payload.streetAddress,
                apartment: payload.apartment|| '',
                city: payload.city,
                State: payload.State
            }
            state.order.date = new Date().toDateString()

            state.order.grossPrice = payload.grossPrice
            state.order.deliveryCharge = payload.deliveryCharge;
            state.order.totalPrice = state.order.grossPrice + state.order.deliveryCharge;
            state.order.shippingMethod = payload.shippingMethod;
            state.order.shippingPrice = payload.shippingPrice
            state.order.paymentMethod = payload.paymentMethod;
            state.order.deliveryNote = payload.deliveryNote;
            state.order.cardHolderName = payload.cardHolderName || '';
            state.order.cardExpiryDate = payload.cardExpiryDate || '';
            state.order.cardCVV = payload.cardCVV || '';

        })
    }