import React from "react";
import { Switch, useRouteMatch, Route } from "react-router-dom";
import ShopPageCategory from "../components/shop_page_category";

const ShopPage = () => {
  const { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <ShopPageCategory />
        </Route>
        <Route path={`${path}/:shopId`}>
          <ShopPageCategory />
        </Route>
      </Switch>
    </div>
  );
};

export default ShopPage;
