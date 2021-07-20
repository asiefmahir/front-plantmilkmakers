import { action, persist } from 'easy-peasy';
import shortid from 'shortid';

export const categoryModel =
    {
        category: {},

        changeCategoryName: action((state, payload) => {
            state.category.name = payload;
        }),

        changeCategoryProducts: action((state, payload) => {
            state.category.products = payload
        })

    }