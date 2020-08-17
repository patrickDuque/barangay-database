import React, { useRef, useEffect } from 'react';
import { BsThreeDots } from 'react-icons/bs';

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

  const editProfile = () => {
    console.log(props.userId);
  };

  return (
    <div ref={wrapperRef} className='DropdownComponent'>
      <BsThreeDots onClick={props.openDropdown} />
      {props.show && (
        <ul className='DropdownList'>
          <li>View</li>
          <li onClick={editProfile}>Edit</li>
          <li>Delete</li>
        </ul>
      )}
    </div>
  );
});
