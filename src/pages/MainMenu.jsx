import React, { useState } from 'react';
import axios from '../api/axios';

import Table from '../components/Table';
import Input from '../components/UI/Input';
import ErrorHandler from '../hoc/ErrorHandler';
import Modal from '../components/UI/Modal/Modal';

export default ErrorHandler(props => {
  const [ profiles, setProfiles ] = useState([
    {
      name          : 'DUQUE, Patrick Jason SAN JOSE',
      address       : '139 Ruby Drive, St. Francis, Pandayan',
      contactNumber : '09176365214',
      id            : '3213asd',
      age           : 22,
      sex           : 'Male',
      birthday      : 'November 17, 1997'
    },
    {
      name          : 'DELA PENA, Joy Alelou SABINIANO',
      address       : '133 Onyx Drive, St. Francis, Pandayan',
      contactNumber : '09269051094',
      id            : '3213ass',
      age           : 23,
      sex           : 'Female',
      birthday      : 'August 4, 1997'
    },
    {
      name          : 'DUQUE, Lance Gabriel SAN JOSE',
      address       : '139 Ruby Drive, St. Francis, Pandayan',
      contactNumber : 'No contact number',
      id            : '3213add',
      age           : 14,
      sex           : 'Male',
      birthday      : 'March 13, 2000'
    },
    {
      name          : 'DUQUE, Aldrie Joshua SAN JOSE',
      address       : '139 Ruby Drive, St. Francis, Pandayan',
      contactNumber : '09176365214',
      id            : '3213agd',
      age           : 22,
      sex           : 'Male',
      birthday      : 'September 20, 1995'
    },
    {
      name          : 'DELA PENA, Macario Jr. GARCIA',
      address       : '1 Pelican St., St. Francis, Pandayan',
      contactNumber : 'No contact number',
      id            : '321123agd',
      age           : 55,
      sex           : 'Male',
      birthday      : 'February 7, 1968'
    }
  ]);

  const [ searchbar, setSearchBar ] = useState('');
  const [ show, setShow ] = useState(true);

  const sortName = (a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  };

  const filteredProfile = profiles
    .filter(profile => profile.name.toLowerCase().includes(searchbar.toLowerCase()))
    .sort(sortName);

  return (
    <div className='MainMenuPage'>
      <div className='uk-flex uk-flex-between uk-padding'>
        <Input
          id='searchbar'
          label='Search'
          type='text'
          value={searchbar}
          onChange={e => setSearchBar(e.target.value)}
        />
        <h3 className='uk-margin-remove uk-text-right' style={{ color: 'white' }}>
          Count: {filteredProfile.length}
        </h3>
      </div>
      <Table profiles={filteredProfile} />
      {/* <Modal show={show} removeModal={() => setShow(false)} /> */}
    </div>
  );
}, axios);
