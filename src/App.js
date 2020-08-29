import React, { useState } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { auth } from "./firebase/config";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

const App = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  auth.onAuthStateChanged((user) => {
    setUser(user);
    setIsLoading(false);
  });

  if (isLoading) {
    return <Preloader />;
  }
  return (
    <Router>
      <div className="App">
        <Header user={user} />
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
