import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProfile } from '../store/actions/profileActions';

import history from '../helpers/history';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import Select from '../components/UI/Select';

export default () => {
  const dispatch = useDispatch();

  const [ fname, setFName ] = useState('');
  const [ mname, setMName ] = useState('');
  const [ lname, setLName ] = useState('');
  const [ birthday, setBirthday ] = useState('');
  const [ sex, setSex ] = useState('Male');

  const getAge = bday => {
    var today = new Date();
    var birthDate = new Date(bday);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age = age - 1;
    }
    return age;
  };

  const nextSectionHandler = () => {
    const details = {
      birthday : new Date(birthday).toDateString().split(' ').filter((_, i) => i > 0).join(', '),
      age      : getAge(birthday),
      sex      : sex,
      name     : `${lname.toUpperCase()}, ${fname} ${mname.toUpperCase()}`
    };
    dispatch(addProfile(details));
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
