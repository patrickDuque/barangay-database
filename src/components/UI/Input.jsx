import React from 'react';

export default props => (
	<div className='InputComponent uk-margin'>
		<label className='uk-text-center' htmlFor={props.id} style={props.isId && { color: '#181c3a' }}>
			{props.label}
		</label>
		<input {...props} id={props.id} />
	</div>
);
