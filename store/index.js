import {createStore} from 'easy-peasy'

import {cartModel} from './cartModel';
import {categoryModel} from './categoryModel';
import {orderModel} from './orderModel';
import {recentViewedProducts} from './recentViewedProducts';
import {userModel} from './userModel'

const store = createStore({
    cart: cartModel,
    category: categoryModel,
    user: userModel,
    order: orderModel,
    recentViewedProducts: recentViewedProducts
})

export default store;