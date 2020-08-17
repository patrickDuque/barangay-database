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
      <td>{props.birthday}</td>
      <td>{props.age}</td>
      <td>{props.sex}</td>
      <td className='TableItemMenu'>
        <Dropdown
          userId={props.id}
          show={show}
          closeDropdown={handleRemoveDropDown}
          openDropdown={handleToggleDropDown}
        />
      </td>
    </tr>
  );
};
