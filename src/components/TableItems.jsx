import React, { useState } from 'react';
import Dropdown from './UI/Dropdown';

export default props => {
  const [ show, setShow ] = useState(false);

  const handleToggleDropDown = () => {
    setShow(!show);
  };

  const handleRemoveDropDown = () => {
    setShow(false);
  };

  return (
    <tr className='TableItemsComponent'>
      <td>{props.name}</td>
      <td>{props.address}</td>
      <td>{props.contactNum}</td>
      <td className='TableItemMenu'>
        <Dropdown userId={props.id} show={show} closeDropdown={handleRemoveDropDown} openDropdown={handleToggleDropDown} />
      </td>
    </tr>
  );
};
