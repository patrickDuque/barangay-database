// Libraries
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// SASS
import './sass/App.scss';

//Components
import Navbar from './components/UI/NavItems';
import MainMenu from './pages/MainMenu';
import AddProfile from './pages/AddProfile';
import AddAddress from './pages/AddAddress';
import AddOtherDetails from './pages/AddOtherDetails';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className='App uk-padding uk-grid'>
      <div className='uk-width-1-5'>
        <Navbar />
      </div>
      <div className='uk-width-4-5'>
        <Switch>
          <Route path='/signin' component={SignIn} />
          <Route path='/add-profile/address/other-details' component={AddOtherDetails} />
          <Route path='/add-profile/address' component={AddAddress} />
          <Route path='/add-profile' component={AddProfile} />
          <Route path='/' exact component={MainMenu} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
