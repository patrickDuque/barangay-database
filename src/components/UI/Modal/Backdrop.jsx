import React from 'react';

export default props => (props.show ? <div onClick={props.remove} className='BackdropComponent' /> : null);
