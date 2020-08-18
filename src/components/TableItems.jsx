import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Dropdown from './UI/Dropdown';
import { deleteProfile } from '../store/actions/profileActions';

export default props => {
  const dispatch = useDispatch();
  const [ show, setShow ] = useState(false);

  const handleToggleDropDown = () => {
    setShow(!show);
  };

  const handleRemoveDropDown = () => {
    setShow(false);
  };

  const deleteProfileInfo = id => {
    dispatch(deleteProfile(id));
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
          delete={() => deleteProfileInfo(props.id)}
        />
      </td>
    </tr>
  );
};
