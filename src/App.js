import React, { useState } from "react";
import { Header } from "./commons/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home, Movies, News } from "./pages";
import { SearchBar } from "./commons/SearchBar";
import { SingleNews } from "./pages/SingleNews";
import { SingleMovie } from "./pages/SingleMovie";
import { LogIn } from "./components/Login";

function App() {
  const [loginModal, setLoginModal] = useState(false);
  return (
    <div>
      <Router>
        <Header logInOnClick={() => setLoginModal((v) => !v)} />
        <SearchBar />
        {loginModal && <LogIn />}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/news" component={News} />
          <Route path="/news/:path" component={SingleNews} />
          <Route path="/movies/:path" component={SingleMovie} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
