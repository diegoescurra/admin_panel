import { createContext, useReducer } from "react";

const list = [];

const initialState = {
  order: [],
  object: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "show": {
      const categories = action.payload ? action.payload : [];
      const newState = {
        order: categories.map((category) => category.id_categoria),
        object: categories.reduce(
          (object, category) => ({
            ...object,
            [category.id_categoria]: category,
          }),
          {}
        ),
      };

      return newState;
    }

    case "add": {
        console.log(action.payload)
      const id = action.payload.id_categoria;
      const newState = {
        order: [...state.order, id],
        object: { ...state.object, [id]: { id, ...action.payload } },
      };
      return newState;
    }
    default:
      throw new Error();
  }
}

reducer(initialState, { type: "show", payload: list });

export const CategoryContext = createContext(null);

export const CategoryProvider = ({ children }) => {
  const [stateCategory, dispatchCategory] = useReducer(reducer, initialState);
  return (
    <CategoryContext.Provider value={[stateCategory, dispatchCategory]}>
      {children}
    </CategoryContext.Provider>
  );
};
