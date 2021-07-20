import { action, persist } from 'easy-peasy';

export const recentViewedProducts = 
    {
        items: [],
    
        addToItems: action((state, payload) => {
            const existingItem =  state.items.find((item) => item.id === payload.id);
            if(!existingItem) {
                state.items = [payload, ...state.items]
            }
        })
    }