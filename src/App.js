import {Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './navbar/Navbar';
import React from 'react';

import OverView from './components/overView/OverView';
import Movies from './movies/Movies';
import TvShows from './tvshows/TvShows';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route path='/overview'>
        <OverView />
      </Route>

      <Route path='/movies'>
        <Movies />
      </Route>

      <Route path='/tvshow'>
        <TvShows />
      </Route>
    </Switch>
    </>
  );
}

export default App;
