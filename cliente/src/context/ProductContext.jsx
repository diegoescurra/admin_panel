import { createContext, useReducer } from 'react';

const list = [];

const initialState = {
    order: [],
    object: {}
}

function reducer(state, action) {
    switch(action.type) {
        
        case 'show' : {
            const products = action.payload;
            const newState = {
                order : products.map(product => product.id_producto),
                object: products.reduce((object, product) => ({...object, [product.id_producto]: product}), {})
            };
            return newState;

        }
        
        case 'add' : {
            const id = action.payload.id_producto;
            const newState = {
                order : [...state.order, id],
                object : {
                    ...state.object,
                    [id] : {id, ...action.payload}
                }
            }
            return newState;

        }

        default: 
        throw new Error();
    }
}

reducer(initialState, {type: 'show', payload: list});

export const Context = createContext(null);

export const ProductProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  )
}
