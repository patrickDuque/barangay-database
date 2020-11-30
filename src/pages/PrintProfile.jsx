import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useSelector } from 'react-redux';

import Button from '../components/UI/Button';
import Profile from '../components/Profile';
import Spinner from '../components/UI/Spinner';

import history from '../helpers/history';

export default () => {
  const profile = useSelector(state => state.profile.profiles);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content : () => componentRef.current
  });

  return (
    <div className='PrintPage' style={{ backgroundColor: profile ? 'white' : '#181c3a' }}>
      {profile ? (
        <Profile
          ref={componentRef}
          profile={profile.filter(p => p._id === history.location.pathname.split('/')[2])[0]}
        />
      ) : (
        <Spinner />
      )}
      <div className='uk-text-right'>
        <Button onClick={handlePrint}>Print</Button>
      </div>
    </div>
  );
};
