import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Dropdown from './UI/Dropdown';
import { deleteBusiness } from '../store/actions/businessActions';

export default props => {
  const dispatch = useDispatch();
  const [ show, setShow ] = useState(false);

  const handleToggleDropDown = () => {
    setShow(!show);
  };

  const handleRemoveDropDown = () => {
    setShow(false);
  };

  const deleteBusinessInfo = id => {
    dispatch(deleteBusiness(id));
  };

  return (
    <tr className='TableItemsComponent'>
      <td>{props.item.name}</td>
      <td>{props.item.nature}</td>
      <td>{props.item.address}</td>
      <td>{props.item.existence}</td>
      <td>{props.item.owner}</td>
      <td className='TableItemMenu'>
        <Dropdown
          to={`/business/${props.item._id}`}
          show={show}
          closeDropdown={handleRemoveDropDown}
          openDropdown={handleToggleDropDown}
          delete={() => deleteBusinessInfo(props.item._id)}
        />
      </td>
    </tr>
  );
};
