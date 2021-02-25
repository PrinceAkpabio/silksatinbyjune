import React from "react";
import { bannerReducer, initialBannerState } from "./bannerReducer";
const Store = React.createContext();

export const useStore = () => React.useContext(Store);

export const StoreProvider = ({
  children,
  // bannerReducer,
  // initialBannerState,
}) => {
  const [bannerState, dispatch] = React.useReducer(
    bannerReducer,
    initialBannerState
  );
  return (
    <Store.Provider value={[bannerState, dispatch]}>{children}</Store.Provider>
  );
};
