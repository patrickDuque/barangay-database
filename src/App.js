// Libraries
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// SASS
import './sass/App.scss';

//Components
import Navbar from './components/UI/NavItems';
import MainMenu from './pages/MainMenu';
import AddProfile from './pages/AddProfile';
import AddAddress from './pages/AddAddress';
import AddOtherDetails from './pages/AddOtherDetails';
import PrintProfile from './pages/PrintProfile';
import PrintId from './pages/PrintId';
import PrintBusiness from './pages/PrintBusiness';
import PrintTricycle from './pages/PrintTricycle';
import SignIn from './pages/SignIn';
import Businesses from './pages/Businesses';
import AddBusiness from './pages/AddBusiness';
import Tricycles from './pages/Tricycles';
import AddTricycle from './pages/AddTricycle';

function App() {
  const user = useSelector(state => state.user.user);

  let routes = (
    <Switch>
      <Route path='/signin' component={SignIn} />
    </Switch>
  );

  if (user) {
    routes = (
      <Switch>
        <Route path='/signin' component={SignIn} />
        <Route path='/add-profile/address/other-details' exact component={AddOtherDetails} />
        <Route path='/add-profile/address' exact component={AddAddress} />
        <Route path='/add-profile' exact component={AddProfile} />
        <Route path='/all-business' exact component={Businesses} />
        <Route path='/all-tricycle' exact component={Tricycles} />
        <Route path='/add-business' exact component={AddBusiness} />
        <Route path='/add-tricycle' exact component={AddTricycle} />
        <Route path='/profiles/:id' component={PrintProfile} />
        <Route path='/id/:id' component={PrintId} />
        <Route path='/business/:id' component={PrintBusiness} />
        <Route path='/tricycle/:id' component={PrintTricycle} />
        <Route path='/' exact component={MainMenu} />
      </Switch>
    );
  }

  return (
    <div className='App uk-padding uk-grid'>
      {!user && <Redirect to='/signin' />}
      <div className='uk-width-1-5'>
        <Navbar />
      </div>
      <div className='uk-width-4-5'>{routes}</div>
    </div>
  );
}

export default App;
