export const initialState = {
  basket: [
    {
      id: "2134",
      title: "Apple iPhone 14 Pro Max (256 GB) - Deep Purple",
      price: "1,43,990,",
      rating: 4,
      image: "https://m.media-amazon.com/images/I/71yzJoE7WlL._SX679_.jpg",
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0)
  


const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("cant remove product");
      }

      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
