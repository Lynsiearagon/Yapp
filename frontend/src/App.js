import React from "react";
import {Route, Switch} from 'react-router-dom';
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import SessionNavigation from "./components/Navigation/_navigationUtils";


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
          <Route>
            <SessionNavigation />
          </Route>
        </Switch>
    </>
  );
}

export default App;
