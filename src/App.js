import React from "react";
import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {Nav} from "./Nav";
import {HomePage} from "./HomePage";
import {AboutPage} from "./AboutPage";
import {Themes} from "./Themes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Nav />
        <Switch>
            <Route path="/" exact >
                <HomePage />
            </Route>
            <Route path="/about">
                <AboutPage />
            </Route>
            <Route path="/list">
                <Themes />
            </Route>
            <Redirect to="/" />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
