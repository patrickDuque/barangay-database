// Libraries
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// SASS
import './sass/App.scss';

//Components
import Navbar from './components/UI/NavItems';
import MainMenu from './pages/MainMenu';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className='App uk-padding uk-grid'>
      <div className='uk-width-1-5'>
        <Navbar />
      </div>
      <div className='uk-width-expand'>
        <Switch>
          <Route path='/signin' component={SignIn} />
          <Route path='/' exact component={MainMenu} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
