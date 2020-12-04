import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Dropdown from './UI/Dropdown';
import { deleteTricycle } from '../store/actions/tricycleActions';

export default props => {
  const dispatch = useDispatch();
  const [ show, setShow ] = useState(false);

  const handleToggleDropDown = () => {
    setShow(!show);
  };

  const handleRemoveDropDown = () => {
    setShow(false);
  };

  const deleteTricycleInfo = id => {
    dispatch(deleteTricycle(id));
  };

  return (
    <tr className='TableItemsComponent'>
      <td>{props.item.name}</td>
      <td>{props.item.brand}</td>
      <td>{props.item.address}</td>
      <td>{props.item.bodyNumber}</td>
      <td>{props.item.affiliation}</td>
      <td>{props.item.model}</td>
      <td className='TableItemMenu'>
        <Dropdown
          to={`/tricycle/${props.item._id}`}
          show={show}
          closeDropdown={handleRemoveDropDown}
          openDropdown={handleToggleDropDown}
          delete={() => deleteTricycleInfo(props.item._id)}
        />
      </td>
    </tr>
  );
};
