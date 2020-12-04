import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useSelector } from 'react-redux';

import Button from '../components/UI/Button';
import ID from '../components/ID';
import Spinner from '../components/UI/Spinner';
import Input from '../components/UI/Input';
import Select from '../components/UI/Select';

import history from '../helpers/history';

export default () => {
  const profile = useSelector(state => state.profile.profiles);
  const [ contactPerson, setContactPerson ] = useState('');
  const [ contactNumber, setContactNumber ] = useState('');
  const [ status, setStatus ] = useState('');

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content : () => componentRef.current
  });

  return (
    <div className='PrintPage' style={{ backgroundColor: profile ? 'white' : '#181c3a' }}>
      <div className='uk-margin-top'>
        <Input
          isId
          label='Contact Person'
          type='text'
          id='contactPerson'
          value={contactPerson}
          onChange={e => setContactPerson(e.target.value)}
        />
        <Select
          isId
          id='status'
          label='Civil Status'
          options={[ 'Single', 'Married' ]}
          value={status}
          onChange={e => setStatus(e.target.value)}
        />
        <Input
          isId
          label='Contact Number'
          type='text'
          id='contactNumber'
          value={contactNumber}
          onChange={e => setContactNumber(e.target.value)}
        />
      </div>
      {profile ? (
        <div className='uk-margin-large-left'>
          <ID
            ref={componentRef}
            profile={profile.filter(p => p._id === history.location.pathname.split('/')[2])[0]}
            contactNumber={contactNumber}
            contactPerson={contactPerson}
            status={status}
          />
        </div>
      ) : (
        <Spinner />
      )}
      <div className='uk-text-right'>
        <Button onClick={handlePrint}>Print</Button>
      </div>
    </div>
  );
};
