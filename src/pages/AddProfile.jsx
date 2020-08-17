import React, { useRef, useCallback, useState } from 'react';
import history from '../helpers/history';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import Select from '../components/UI/Select';

export default () => {
  const [ fname, setFName ] = useState('');
  const [ mname, setMName ] = useState('');
  const [ lname, setLName ] = useState('');
  const [ birthday, setBirthday ] = useState('');
  const [ sex, setSex ] = useState('');

  const nextSectionHandler = () => {
    const details = {
      name     : `${lname.toUpperCase()}, ${fname} ${mname}`,
      birthday : new Date(birthday).toDateString().split(' ').filter((_, i) => i > 0).join(' '),
      sex      : sex
    };
    console.log(details);
    history.push('/add-profile/address');
  };

  return (
    <div className='AddProfilePage uk-position-relative'>
      <div className='AddProfile uk-padding uk-position-center'>
        <div className='uk-padding-remove uk-margin-medium-top'>
          <Input type='text' id='fname' label='First Name' value={fname} onChange={e => setFName(e.target.value)} />
          <Input type='text' id='mname' label='Middle Name' value={mname} onChange={e => setMName(e.target.value)} />
          <Input type='text' id='lname' label='Last Name' value={lname} onChange={e => setLName(e.target.value)} />
          <Input
            type='date'
            id='birthday'
            label='Birthday'
            value={birthday}
            onChange={e => setBirthday(e.target.value)}
          />
          <Select
            label='Sex'
            id='sex'
            options={[ 'Male', 'Female' ]}
            value={sex}
            onChange={e => setSex(e.target.value)}
          />
        </div>
        <div className='uk-text-center'>
          <Button onClick={nextSectionHandler}>Next</Button>
        </div>
      </div>
    </div>
  );
};
