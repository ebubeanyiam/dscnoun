import React from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
