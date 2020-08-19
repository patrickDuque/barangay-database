import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
  let button = (
    <button disabled={props.disabled} className='ButtonComponent' {...props}>
      {props.children}
    </button>
  );
  if (props.to) {
    button = (
      <Link to={props.to}>
        <button className='ButtonComponent'>{props.children}</button>
      </Link>
    );
  }
  return button;
};
