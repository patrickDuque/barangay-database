import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useSelector } from 'react-redux';

import Button from '../components/UI/Button';
import Tricycle from '../components/Tricycle';
import Spinner from '../components/UI/Spinner';

import history from '../helpers/history';

export default () => {
  const tricycle = useSelector(state => state.tricycle.tricycles);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content : () => componentRef.current
  });

  return (
    <div className='PrintPage' style={{ backgroundColor: tricycle ? 'white' : '#181c3a' }}>
      {tricycle ? (
        <Tricycle
          ref={componentRef}
          tricycle={tricycle.filter(p => p._id === history.location.pathname.split('/')[2])[0]}
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
