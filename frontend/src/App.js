import React from "react";
import {Route, Switch} from 'react-router-dom';
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import SeeYouSoonPage from "./components/SeeYouSoonPage"
import Footer from "./components/Footer";
import RestaurantIndexPage from "./components/RestaurantIndexPage"
import RestaurantShowPage from "./components/RestaurantShowPage"
import WriteAReview from "./components/WriteAReview";

function App() {
  return (
    <>
      <Navigation />
        <Switch>
          <Route path='/login'>
            <LoginFormPage />
          </Route>
          <Route path='/signup'>
            <SignupFormPage />
          </Route>
          <Route path='/seeyousoon'>
            <SeeYouSoonPage />
          </Route>
          <Route path='/restaurants/:restaurantId/write-a-review'>
            <WriteAReview />
          </Route>
          <Route path='/restaurants/:restaurantId'>
            <RestaurantShowPage />
          </Route>
          <Route path='/restaurants'>
            <RestaurantIndexPage />
          </Route>
          <Route path='/'>
            <SplashPage />
          </Route>
        </Switch>
      <Footer />
    </>
  );
}

export default App;
