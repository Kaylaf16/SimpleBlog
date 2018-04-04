import React from 'react';
import {render} from 'react-dom';
import { Route } from 'react-router-dom';
import {HashRouter} from 'react-router-dom';
import Home from './home.jsx';
import Posts from './posts.jsx';


const Routes = () => (

  <HashRouter>
    <div className = "app">
    <Route exact path="/" component={Home} />
    <Route exact path="/postings" component={Posts} />
    </div>
  </HashRouter>

);

render(<Routes/>, document.getElementById('app'));
