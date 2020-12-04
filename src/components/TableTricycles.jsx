import React from 'react';
import TableItemsTricycle from './TableItemsTricycle';

export default props => {
  const tableItems = props.items.map(item => <TableItemsTricycle key={item._id} item={item} />);

  return (
    <table className='TableComponent uk-table uk-table-responsive uk-margin-remove-top'>
      <thead>
        <tr>
          <th>Owner</th>
          <th>Brand</th>
          <th>Address</th>
          <th>Body Number</th>
          <th>Affiliation</th>
          <th>Year Model</th>
          <th>Menu</th>
        </tr>
      </thead>
      <tbody>{tableItems}</tbody>
    </table>
  );
};
