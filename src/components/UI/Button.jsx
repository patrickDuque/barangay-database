import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
  let button = (
    <button className='ButtonComponent' {...props}>
      {props.children}
    </button>
  );
  if (props.to) {
    button = (
      <button className='ButtonComponent'>
        <Link to={props.to}>{props.children}</Link>
      </button>
    );
  }
  return button;
};
