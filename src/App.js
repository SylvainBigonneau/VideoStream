import React from 'react';
import './App.css';
import IndexPage from './containers/IndexPage'
import VideoPage from './containers/VideoPage'
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={IndexPage} />
        <Route path="/:id" component={VideoPage} />
      </div>
    </BrowserRouter>
  );
};

export default App;