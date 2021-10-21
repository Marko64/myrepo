import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Homepage from './HomePage';
import About from './AboutPage';
import Articles from './ArticlesPage';
import Article from './ArticlePage';

export default function App() {
  return (
    <Router>
      <div>
       <Switch>
          <Route path="/" exact >
            <Homepage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/articles">
            <Articles />
          </Route>
          <Route path="/article">
            <Article />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}