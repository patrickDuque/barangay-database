import React from 'react';
import Backdrop from './Backdrop';

export default React.memo(props => {
  return (
    <React.Fragment>
      <Backdrop show={props.show} remove={props.removeModal} />
      <div
        className='ModalComponent'
        style={{
          transform : props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity   : props.show ? '1' : '0'
        }}>
        {props.children}
      </div>
    </React.Fragment>
  );
}, (prevProps, nextProps) => nextProps.show === prevProps.show && nextProps.children === prevProps.children);
