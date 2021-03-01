import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/footer/footer";
import Naviagtion from "./components/navigation/naviagtion";
import HomePage from "./pages/home_page";
import ShopPage from "./pages/shop_page";
function App() {
  return (
    <div>
      <Naviagtion />
      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
