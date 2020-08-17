import React, { useState } from 'react';
import history from '../helpers/history';

import Input from '../components/UI/Input';
import Button from '../components/UI/Button';

export default () => {
  const [ num, setNum ] = useState('');
  const [ street, setStreet ] = useState('');
  const [ subdivision, setSubdivision ] = useState('');
  const [ phase, setPhase ] = useState('');

  const nextSectionHandler = () => {
    const details = {
      address : `${num} ${street}, ${subdivision}, ${phase}`
    };
    console.log(details);
    history.push('/add-profile/address/other-details');
  };

  return (
    <div className='AddAddressPage uk-position-relative'>
      <div className='AddAddress uk-padding uk-position-center'>
        <Input type='number' id='num' label='No.' value={num} onChange={e => setNum(e.target.value)} />
        <Input type='text' id='street' label='Street' value={street} onChange={e => setStreet(e.target.value)} />
        <Input
          type='text'
          id='subdivision'
          label='Subdivision'
          value={subdivision}
          onChange={e => setSubdivision(e.target.value)}
        />
        <Input type='text' id='phase' label='Phase' value={phase} onChange={e => setPhase(e.target.value)} />
        <div className='uk-text-center'>
          <Button to='/add-profile'>Previous</Button>
          <Button onClick={nextSectionHandler}>Next</Button>
        </div>
      </div>
    </div>
  );
};
