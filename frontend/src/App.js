import React from "react";
import {Route, Switch} from 'react-router-dom';
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import SeeYouSoonPage from "./components/SeeYouSoonPage"


function App() {
  return (
    <>
      <Navigation />
        <SplashPage />
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
        </Switch>
    </>
  );
}

export default App;
