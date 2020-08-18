import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import history from '../helpers/history';
import { addAddress } from '../store/actions/profileActions';

import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import Select from '../components/UI/Select';

export default () => {
  const dispatch = useDispatch();

  const [ num, setNum ] = useState('');
  const [ street, setStreet ] = useState('');
  const [ subdivision, setSubdivision ] = useState('');
  const [ phase, setPhase ] = useState('I');

  const nextSectionHandler = () => {
    const details = {
      address : `${num} ${street}, ${subdivision}, ${phase}`
    };
    dispatch(addAddress(details.address));
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
        <Select
          id='phase'
          label='Phase'
          options={[ 'I', 'II', 'II B', 'II C', 'III', 'Annex' ]}
          value={phase}
          onChange={e => setPhase(e.target.value)}
        />
        <div className='uk-text-center'>
          <Button to='/add-profile'>Previous</Button>
          <Button onClick={nextSectionHandler}>Next</Button>
        </div>
      </div>
    </div>
  );
};
