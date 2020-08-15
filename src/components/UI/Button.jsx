import React from 'react';

export default props => (
  <button className='ButtonComponent' {...props}>
    {props.children}
  </button>
);
