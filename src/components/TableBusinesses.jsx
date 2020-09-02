import React from 'react';
import TableItemsBusinesses from './TableItemsBusinesses';

export default props => {
  const tableItems = props.items.map(item => <TableItemsBusinesses key={item._id} item={item} />);

  return (
    <table className='TableComponent uk-table uk-table-responsive uk-margin-remove-top'>
      <thead>
        <tr>
          <th>Establishment</th>
          <th>Nature</th>
          <th>Address</th>
          <th>Existence</th>
          <th>Owner</th>
          <th>Menu</th>
        </tr>
      </thead>
      <tbody>{tableItems}</tbody>
    </table>
  );
};
