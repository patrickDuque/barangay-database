import React, { useRef, useEffect } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import history from '../../helpers/history';

const useOutsideAlerter = (ref, closeDropdown) => {
  useEffect(
    () => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          closeDropdown();
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    },
    [ ref, closeDropdown ]
  );
};

export default React.memo(props => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.closeDropdown);
  return (
    <div ref={wrapperRef} className='DropdownComponent'>
      <BsThreeDots onClick={props.openDropdown} />
      {props.show && (
        <ul className='DropdownList'>
          <li onClick={() => history.push(props.to)}>View</li>
          <li onClick={props.delete}>Delete</li>
        </ul>
      )}
    </div>
  );
});
