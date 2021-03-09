import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ShoppingCart from "./views/examples/ShoppingCart.js"
import SelectedItem from "views/examples/SelectedItem.js";
import SelectedItemModal from "views/examples/SelectedItemModal.js";
import AuthService from "./views/services/auth.service"

const App = () => {
    const [currentUser, setCurrentUser] = React.useState(undefined);
    const [blah, setBlah] = React.useState("blah not set");

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            // console.log(blah);
            // setBlah("BLAH HAS BEEN SET");
            // console.log(blah);
            // setCurrentUser(user);
            // console.log(user);
            // console.log(currentUser);

            // console.log("USER LOGGED IN")
            console.log(user)
            console.log("USER LOGGED IN")
        } else {
           // console.log("NO CURRENT USER")
            // console.log("NO CURRENT USER")
            console.log("NO CURRENT USER")

        }
        
    
    }, []);

    return (
        <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
        <Route
        path="/shopping-cart"
        render={(props) => <ShoppingCart {...props} />}
      />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={() => <ProfilePage />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
            <Route
        path="/selected-item"
        render={(props) => <SelectedItem {...props} />}
      />
                  <Route
        path="/selected-item-modal"
        render={(props) => <SelectedItemModal {...props} />}
      />
      <Redirect to="/landing-page" />
    </Switch>
    )
}

export default App
