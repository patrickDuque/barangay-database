import React, { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import history from '../helpers/history';

import Input from '../components/UI/Input';
import Button from '../components/UI/Button';

export default () => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSignIn = e => {
    e.preventDefault();
    console.log({ username, password });
    history.push('/');
  };

  return (
    <div className='SignInPage uk-position-relative'>
      <div className='uk-position-center'>
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
      </div>
    </div>
  );
};
