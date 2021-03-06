import React, {  useState } from "react";
import { Header } from "./commons/Header";
import { Route, Switch } from "react-router-dom";

import { Home, Movies, News } from "./pages";
import { SearchBar } from "./commons/SearchBar";
import { SingleNews } from "./pages/SingleNews";
import { SingleMovie } from "./pages/SingleMovie";
import LogIn from "./components/Login";
import { Community } from "./pages/Community";
import { getAuthStatus } from "./store/auth";
import { connect } from "react-redux";

function App({ status }) {
  const [loginModal, setLoginModal] = useState({
    status: false,
    signUp: false,
  });

  const setActive = (signUp) => {
    setLoginModal((v) => ({ status: !v.status, signUp }));
  };

  return (
    <div>
      {!!loginModal.status && (
        <LogIn
          signUp={loginModal.signUp}
          isOpen={loginModal.status}
          onRequestClose={() => setLoginModal((v) => ({ ...v, status: false }))}
        />
      )}

      <Header
        logInOnClick={() => setActive(false)}
        signUpOnClick={() => setActive(true)}
      />
      <SearchBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/news" component={News} />
        {<Route path="/community" component={Community} />}
        <Route path="/news/:path" component={SingleNews} />
        <Route path="/movies/:path" component={SingleMovie} />
      </Switch>
    </div>
  );
}
const mapStateToProps = (state) => ({
  status: getAuthStatus(state),
});
export default connect(mapStateToProps)(App);
