import shopItem1 from "../assets/images/shopItems1.jpg";
import shopItem2 from "../assets/images/shopItems2.jpg";
import shopItem3 from "../assets/images/shopItems3.jpg";
import shopItem4 from "../assets/images/shopItems4.jpg";
import shopItem5 from "../assets/images/shopItems5.jpg";

export const SHOP_ACTIONS = {
  ADD_ITEM: "ADD_ITEM_TO_CART",
  CHANGE_ITEM_COLOR: "CHANGE_ITEM_COLOR",
  NEXT: "NEXT",
  PREV: "PREV",
};

export const initialShopState = {
  cart: {
    items: [],
  },
  homepageShopContent: {
    image: shopItem3,
    text: "Shop the full collection",
  },
  slideIndex: 0,
  homepageShop: [
    {
      product_image: shopItem1,
      product_name: "Gia Overall",
      product_price: "45",
      product_colors: ["#C192B2", "#D81212"],
    },
    {
      product_image: shopItem2,
      product_name: "Pink Splash",
      product_price: "115",
      product_colors: ["#C192B2"],
    },
    {
      product_image: shopItem3,
      product_name: "Gia Scarf",
      product_price: "35",
      product_colors: ["#C192B2"],
    },
    {
      product_image: shopItem4,
      product_name: "Gia One-piece",
      product_price: "45",
      product_colors: ["#C192B2", "#D81212"],
    },
    {
      product_image: shopItem5,
      product_name: "Gia Overall",
      product_price: "45",
      product_colors: ["#C192B2", "#D81212"],
    },
    {
      product_image: shopItem2,
      product_name: "Pink Splash",
      product_price: "115",
      product_colors: ["#C192B2"],
    },
  ],
};

export const shopReducer = (state, action) => {
  switch (action.type) {
    case SHOP_ACTIONS.ADD_ITEM:
      return {
        ...state,
        homepageShop: [...state.homepageShop],
        cart: {
          ...state.cart,
          items: [...state.cart.items, action.item],
        },
      };
    case SHOP_ACTIONS.CHANGE_ITEM_COLOR:
      return {
        ...state,
        homepageShop: [...state.homepageShop],
      };
    case SHOP_ACTIONS.NEXT:
      return {
        ...state,
        slideIndex: (state.slideIndex + 1) % state.homepageShop.length,
      };
    case SHOP_ACTIONS.PREV:
      return {
        ...state,
        slideIndex:
          state.slideIndex === 0
            ? state.homepageShop.length - 1
            : state.slideIndex - 1,
      };
    default:
      return state;
  }
};
