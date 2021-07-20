import { action, persist } from 'easy-peasy';
import shortid from 'shortid';

export const orderModel =
    {
        order: {},

        addOrder: action((state, payload) => {
            state.order.id = shortid.generate()
            state.order.userEmail = payload.userEmail
            state.order.date = new Date().toDateString()

            state.order.grossPrice = action.payload.grossPrice
            state.order.deliveryCharge = action.payload.deliveryCharge;
            state.order.totalPrice = state.order.grossPrice + state.order.deliveryCharge;
            state.order.shippingMethod = payload.shippingMethod;
            state.order.paymentMethod = payload.paymentMethod;
            state.order.deliveryNote = payload.deliveryNote;
        })
    }