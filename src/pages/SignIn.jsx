import React, { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../store/actions/userActions';

import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import Spinner from '../components/UI/Spinner';

export default () => {
  const dispatch = useDispatch();
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const loading = useSelector(state => state.user.loading);

  const handleSignIn = e => {
    e.preventDefault();
    dispatch(signIn({ username, password }));
  };

  let form = <Spinner />;

  if (!loading) {
    form = (
      <React.Fragment>
        <div className='uk-margin-bottom SignInIcon'>
          <IconContext.Provider value={{ size: '4em' }}>
            <FaUserAlt />
          </IconContext.Provider>
        </div>
        <div className='SignInForm uk-padding-large'>
          <form onSubmit={handleSignIn}>
            <Input
              onChange={e => setUsername(e.target.value)}
              value={username}
              type='text'
              id='adminusername'
              label='Username'
            />
            <Input
              onChange={e => setPassword(e.target.value)}
              value={password}
              type='password'
              id='adminpassword'
              label='Password'
            />
            <div className='uk-text-right'>
              <Button type='submit'>Sign In</Button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }

  return (
    <div className='SignInPage uk-position-relative'>
      <div className='uk-position-center'>{form}</div>
    </div>
  );
};
