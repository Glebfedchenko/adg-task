import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { store } from "../redux/store/store";
import Layout from "./Layout";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Layout} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
