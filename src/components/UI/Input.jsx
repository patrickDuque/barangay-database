import React from 'react';

export default props => (
  <div className='InputComponent uk-margin'>
    <label htmlFor={props.id}>{props.label} : </label>
    <input {...props} id={props.id} />
  </div>
);
