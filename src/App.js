// Libraries
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// SASS
import './sass/App.scss';

//Components
import Navbar from './components/UI/NavItems';
import MainMenu from './pages/MainMenu';

function App() {
  return (
    <div className='App uk-padding uk-grid'>
      <div class='uk-width-1-5'>
        <Navbar />
      </div>
      <div class='uk-width-expand'>
        <Switch>
          <Route path='/' component={MainMenu} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
