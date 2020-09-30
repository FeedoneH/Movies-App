import React from "react";
import { Header } from "./commons/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Movies, News } from "./pages";
import { SearchBar } from "./commons/SearchBar";
import styled from "styled-components";
import { SingleNews } from "./pages/SingleNews";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <SearchBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/news" component={News} />
          <Route path='/news/:' component={SingleNews}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
