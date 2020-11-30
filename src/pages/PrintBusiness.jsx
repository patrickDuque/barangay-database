import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useSelector } from 'react-redux';

import Button from '../components/UI/Button';
import Business from '../components/Business';
import Spinner from '../components/UI/Spinner';

import history from '../helpers/history';

export default () => {
  const business = useSelector(state => state.business.businesses);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content : () => componentRef.current
  });

  console.log(business.filter(p => p._id === history.location.pathname.split('/')[2])[0]);

  return (
    <div className='PrintPage' style={{ backgroundColor: business ? 'white' : '#181c3a' }}>
      {business ? (
        <Business
          ref={componentRef}
          business={business.filter(p => p._id === history.location.pathname.split('/')[2])[0]}
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
