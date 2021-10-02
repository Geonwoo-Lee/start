import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UrlOverview from './pages/UrlOverview';
import Team from './pages/Team';
import React from 'react'
import Games from './pages/Games'
import GameInven from './pages/GameInven'
import Works from './pages/Works'
import Music from './pages/Music'
import Etc from './pages/Etc'
import Private from './pages/Private'

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/urls/all' exact component={UrlOverview} />
        <Route path='/urls/games' exact component={Games} />
        <Route path='/urls/gameinven' exact component={GameInven} />
        <Route path='/urls/works' exact component={Works} />
        <Route path='/urls/music' exact component={Music} />
        <Route path='/urls/etc' exact component={Etc} />
        <Route path='/private' exact component={Private} />
        <Route path='/team' exact component={Team} />
      </Switch>
    </Router>
  );
}

export default App;
