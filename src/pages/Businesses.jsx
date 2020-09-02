import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../components/UI/Input';
import TableBusinesses from '../components/TableBusinesses';
import Spinner from '../components/UI/Spinner';

import { getBusinesses } from '../store/actions/businessActions';

export default () => {
  const dispatch = useDispatch();
  const [ searchbar, setSearchbar ] = useState('');
  const businesses = useSelector(state => state.business.businesses);
  const loading = useSelector(state => state.business.loading);

  useEffect(
    () => {
      dispatch(getBusinesses());
    },
    [ dispatch ]
  );

  const filteredBusiness = businesses.filter(
    business =>
      business.name.toLowerCase().includes(searchbar.toLowerCase()) ||
      business.address.toLowerCase().includes(searchbar.toLowerCase()) ||
      business.owner.toLowerCase() === searchbar.toLowerCase()
  );

  let table = <Spinner />;
  if (!loading) {
    table = (
      <React.Fragment>
        <div className='uk-flex uk-flex-between uk-padding'>
          <Input
            id='searchbar'
            label='Search'
            type='text'
            value={searchbar}
            onChange={e => setSearchbar(e.target.value)}
          />
        </div>
        <TableBusinesses items={filteredBusiness} />
      </React.Fragment>
    );
  }

  return <div className='BusinessesPage'>{table}</div>;
};
