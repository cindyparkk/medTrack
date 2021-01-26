import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AddMed from "pages/add-med";

const Main = () => {
    return (
      <Switch> {/* The Switch decides which component to show based on the current URL.*/}
        <Route exact path='/add-med' component={AddMed}></Route>
      </Switch>
    );
  }
  
  export default Main;