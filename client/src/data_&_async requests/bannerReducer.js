import bannerimage from "../assets/images/bannerImage.jpg";

export const ACTIONS = {
  SCROLL_LEFT: "SCROLL_LEFT",
  SCROLL_RIGHT: "SCROLL_RIGHT",
};

export const initialBannerState = {
  bannerContent: [
    {
      bannerImage: bannerimage,
      bannerText1: "SUMMER",
      bannerText2: "COLLECTION",
    },
    {
      bannerImage: bannerimage,
      bannerText1: "SPRING",
      bannerText2: "COLLECTION",
    },
    {
      bannerImage: bannerimage,
      bannerText1: "WINTER",
      bannerText2: "COLLECTION",
    },
  ],
};

export const scrollLeft = (bannerContent) => ({
  type: ACTIONS.SCROLL_LEFT,
  bannerContent,
});

export const scrollRight = (bannerContent) => ({
  type: ACTIONS.SCROLL_RIGHT,
  bannerContent,
});

export const bannerReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SCROLL_LEFT:
      return { ...state, bannerContent: [...state.bannerContent] };
    case ACTIONS.SCROLL_RIGHT:
      return { ...state, bannerContent: [...state.bannerContent] };
    default:
      return state;
  }
};
