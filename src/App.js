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
import Print from './pages/Print';
import SignIn from './pages/SignIn';

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
        <Route path='/profiles/:id' component={Print} />
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
