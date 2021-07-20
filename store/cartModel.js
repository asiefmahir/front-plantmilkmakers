import { action, persist } from 'easy-peasy';
import shortid from 'shortid';


export const cartModel = 
    {
        items: {},
        addToCart: action((state, payload) => {
           const item = {};
           item.id = shortid.generate();
           item.title = payload.title;
           item.image = payload.image;
           item.price = payload.price;

           state.items[item.id] = item;
        }),

        removeFromCart: action((state, payload) => {
            delete state.items[payload];
        }),

        updatePriceOfaItem: action((state, payload) => {
            state.items[payload.id].price = payload.price || item.price;
            // state.items.totalCost += payload.price
        }),

        updateTotalCost : action((state, payload) => {
            state.items.totalCost = payload.totalCost
        })


    }