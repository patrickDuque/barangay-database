import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useSelector } from 'react-redux';

import Button from '../components/UI/Button';
import Tricycle from '../components/Tricycle';
import Spinner from '../components/UI/Spinner';
import Input from '../components/UI/Input';

import history from '../helpers/history';

export default () => {
  const tricycle = useSelector(state => state.tricycle.tricycles);
  const [ purpose, setPurpose ] = useState('');
  const [ amount, setAmount ] = useState('');

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content : () => componentRef.current,
    print   : () => window.print()
  });

  return (
    <div className='PrintPage' style={{ backgroundColor: tricycle ? 'white' : '#181c3a' }}>
      <div className='uk-margin-top'>
        <Input
          isId
          label='Purpose'
          type='text'
          id='purpose'
          value={purpose}
          onChange={e => setPurpose(e.target.value)}
        />
        <Input isId label='Amount' type='number' id='amount' value={amount} onChange={e => setAmount(e.target.value)} />
      </div>
      {tricycle ? (
        <Tricycle
          ref={componentRef}
          tricycle={tricycle.filter(p => p._id === history.location.pathname.split('/')[2])[0]}
          purpose={purpose}
          amount={amount}
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
