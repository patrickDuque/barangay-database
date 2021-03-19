import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useSelector } from 'react-redux';

import Button from '../components/UI/Button';
import Business from '../components/Business';
import Spinner from '../components/UI/Spinner';
import Input from '../components/UI/Input';

import history from '../helpers/history';

export default () => {
	const business = useSelector(state => state.business.businesses);
	const [ purpose, setPurpose ] = useState('');
	const [ amount, setAmount ] = useState('');

	const componentRef = useRef();
	const handlePrint = useReactToPrint({
		content : () => componentRef.current,
		print   : () => window.print()
	});

	console.log(business.filter(p => p._id === history.location.pathname.split('/')[2])[0]);

	return (
		<div className='PrintPage' style={{ backgroundColor: business ? 'white' : '#181c3a' }}>
			<div className='uk-flex uk-flex-between'>
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
			{business ? (
				<Business
					ref={componentRef}
					business={business.filter(p => p._id === history.location.pathname.split('/')[2])[0]}
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
