import React from 'react';

export default props => (
  <div className='InputComponent uk-margin'>
    <label className='uk-text-center' htmlFor={props.id}>
      {props.label}
    </label>
    <input {...props} id={props.id} />
  </div>
);
