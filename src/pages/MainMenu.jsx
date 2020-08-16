import React, { useState } from 'react';
import Table from '../components/Table';

export default props => {
  const [ profiles, setProfiles ] = useState([
    {
      name          : 'Pat Jason Duque',
      address       : '139 Ruby Drive, St. Francis, Pandayan',
      contactNumber : '09176365214',
      id            : '3213asd'
    },
    {
      name          : 'Joy Alou Dela Pena',
      address       : '139 Ruby Drive, St. Francis, Pandayan',
      contactNumber : '09176365214',
      id            : '3213ass'
    },
    {
      name          : 'Chipo Duque',
      address       : '139 Ruby Drive, St. Francis, Pandayan',
      contactNumber : '09176365214',
      id            : '3213add'
    },
    {
      name          : 'Aldrie Duque',
      address       : '139 Ruby Drive, St. Francis, Pandayan',
      contactNumber : '09176365214',
      id            : '3213agd'
    }
  ]);

  return (
    <div className='MainMenuPage'>
      <Table profiles={profiles} />
    </div>
  );
};
