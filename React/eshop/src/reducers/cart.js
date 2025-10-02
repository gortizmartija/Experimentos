export const intialStateCart = [];
export const reducerCart = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;
  switch (actionType) {
    case 'ADD_TO_CART': {
      const { id } = actionPayload;
      const productInCartIndex = state.findIndex((item) => item.id == id);
      if (productInCartIndex >= 0) {
        const newState = structuredClone(state);
        newState[productInCartIndex].quantity += 1;
        /*
        // ⚡ usando el spread operator y slice
        const newState = [
        ...state.slice(0, productInCartIndex),
        { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },
        ...state.slice(productInCartIndex + 1)
      ]
        */
        return newState;
      }
      return [
        ...state,
        {
          ...actionPayload,
          quantity: 1,
        },
      ];
    }
    case 'REMOVE_FROM_CART': {
      const { id } = actionPayload;
      return state.filter((item) => item.id !== id);
    }
    case 'CLEAR_CART': {
      return intialStateCart;
    }
  }
  return state;
};
