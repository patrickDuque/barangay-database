import React from 'react';
import TableItems from './TableItems';

export default props => {
  const tableItems = props.profiles.map(profile => (
    <TableItems
      name={profile.name}
      address={profile.address}
      contactNum={profile.contactNumber}
      birthday={profile.birthday}
      age={profile.age}
      sex={profile.sex}
      key={profile.id}
      id={profile.id}
    />
  ));

  return (
    <table className='TableComponent uk-table uk-table-responsive'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Contact Num</th>
          <th>Birthday</th>
          <th>Age</th>
          <th>Sex</th>
          <th>Menu</th>
        </tr>
      </thead>
      <tbody>{tableItems}</tbody>
    </table>
  );
};