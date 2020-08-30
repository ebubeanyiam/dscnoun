import React, { useState } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import Sidebar from "./components/Sidebar";

import Community from "./components/community/Community";

import { auth, db, provider, timestamp } from "./firebase/config";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState(null);
  const [navOpen, setNavOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const googleLogin = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        if (res.additionalUserInfo.isNewUser) {
          db.collection("users").doc(res.user.uid).set({
            name: res.user.displayName,
            photoUrl: res.user.photoURL,
            email: res.user.email,
            joined: timestamp(),
          });
        }
        localStorage.setItem("userID", res.user.uid);
        localStorage.setItem("userphotoUrl", res.user.photoURL);
        localStorage.setItem("userFullName", res.user.displayName);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const LogOut = () => {
    auth.signOut();
  };

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
        <Header
          user={user}
          setNavOpen={setNavOpen}
          googleLogin={googleLogin}
          LogOut={LogOut}
        />
        <Sidebar
          user={user}
          navOpen={navOpen}
          setNavOpen={setNavOpen}
          googleLogin={googleLogin}
          LogOut={LogOut}
        />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/community" component={Community} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
