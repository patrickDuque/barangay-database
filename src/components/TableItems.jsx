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
      <td>{props.profile.name}</td>
      <td>{props.profile.address}</td>
      <td>{props.profile.contactNumber}</td>
      <td>{props.profile.birthday}</td>
      <td>{props.profile.age}</td>
      <td>{props.profile.sex}</td>
      <td className='TableItemMenu'>
        <Dropdown
          profile={props.profile}
          userId={props.profile._id}
          show={show}
          closeDropdown={handleRemoveDropDown}
          openDropdown={handleToggleDropDown}
          delete={() => deleteProfileInfo(props.profile._id)}
        />
      </td>
    </tr>
  );
};
