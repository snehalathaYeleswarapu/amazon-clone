/**
 * This file is to declare all application level states - to use later in application
 *  in INITIAL states --> declare states going to use (basket,user)
 *  the REDUCER fnc - takes in action and state. The state and action is provided so that the reducer can perform operations on the state.
 *  export REDUCER in INDEX.js file
 */
export const initialState = {
  basket: [],
  user: null,
};

// Selector

export const getBasketTotal = basket =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        // spread operator (...) so that previous state is not lost.we add items to the basket array in our state in reducer.
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: [],
      };
    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex(
        basketItem => basketItem.id === action.id,
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${
            action.id
          }) as its not in basket!`,
        );
      }

      return {
        ...state,
        basket: newBasket,
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
