import { action, persist } from 'easy-peasy';
import shortid from 'shortid';
import { images } from '../public/images';


export const cartModel = 
    {
        items: {
            // 'test' : {
            //     id: 'test',
            //     image: images.cardImage,
            //     title: 'Product 1',
            //     unitPrice: 25.00,
            //     cartPrice: 25.00
            // },
            // 'test1' : {
            //     id: 'test1',
            //     image: images.Product1,
            //     title: 'Product 1',
            //     unitPrice: 501.00,
            //     cartPrice: 501.00
            // },
            // totalCost: 25.00
        },
        addToCart: action((state, payload) => {
           const item = {};
           item.id = payload.id;
           item.title = payload.title;
           item.image = payload.image;
           item.unitPrice = payload.unitPrice;
           item.cartPrice = payload.cartPrice || payload.unitPrice;
           item.unit = payload.unit || 1;
           state.items[item.id] = item;
        }),

        removeFromCart: action((state, payload) => {
            delete state.items[payload];
        }),

        updateUnitOfAItem: action((state, payload) => {
            state.items[payload.id].unit = payload.unit
        }),

        updatePriceOfAItem: action((state, payload) => {
            console.log(payload.cartPrice);
            console.log(state.items);
            // const item = state.items[payload.id];
            // let oldPrice = item.price;
            state.items[payload.id].cartPrice = payload.cartPrice || state.items[payload.id].cartPrice;
            // state.items.totalCost = state.items.totalCost - oldPrice + item.price
            // state.items.totalCost += payload.price
        }),

        // updateTotalCost : action((state, payload) => {
        //     state.items.totalCost = payload.totalCost
        // })

        // getTotalCost: action((state, payload) => {
        //     let total = 0;
        //     Object.values(state.items).forEach((item) => total = total + item.price)
        // })


    }