// == Import npm
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// == Import
import './styles.css';
import Home from 'src/containers/Home';
import Wish from 'src/containers/Wish';
import ProfileField from 'src/containers/ProfileField';
import About from 'src/components/About';
import Error from 'src/components/Error';
import PickyMood from 'src/containers/PickyMood';
import SignIn from 'src/containers/SignIn';
import SignUp from 'src/containers/SignUp';
import PickyLucky from 'src/containers/pickyLucky'


// == Composant

function App (props) {
  // When the app opens, we get all the platforms to be able to use the logos anywhere
  useEffect(() => {
    props.loadPlatforms();
  }, []);

  return (
<<<<<<< HEAD
  <div className="app">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/wish">
            <Wish />
          </Route>
          <Route exact path="/mood">
            <PickyMood />
          </Route>
          <Route exact path="/signIn">
            <SignIn />
          </Route>
          <Route exact path="/signUp">
            <SignUp />
          </Route>
          <Route exact path="/profil">
            <ProfileField />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
=======
    <div className="app">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/wish">
        <Wish />
      </Route>
      <Route exact path="/mood">
        <PickyMood />
      </Route>
      <Route exact path="/signIn">
        <SignIn />
      </Route>
      <Route exact path="/signUp">
        <SignUp />
      </Route>
      <Route exact path="/profil">
        <ProfileField />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/pickyLucky">
        <PickyLucky/>
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
>>>>>>> 7d068f07f4164ef2f19c367c13e5b1b51309f6e0
  </div>
  );
};

// == Export
export default App;
