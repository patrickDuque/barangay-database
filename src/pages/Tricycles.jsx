import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../components/UI/Input';
import TableTricycle from '../components/TableTricycles';
import Spinner from '../components/UI/Spinner';

import { getTricycles } from '../store/actions/tricycleActions';

export default () => {
  const dispatch = useDispatch();
  const [ searchbar, setSearchbar ] = useState('');
  const tricycles = useSelector(state => state.tricycle.tricycles);
  const loading = useSelector(state => state.tricycle.loading);

  useEffect(
    () => {
      dispatch(getTricycles());
    },
    [ dispatch ]
  );

  const filteredTricycles = tricycles.filter(
    tricycle =>
      tricycle.name.toLowerCase().includes(searchbar.toLowerCase()) ||
      tricycle.address.toLowerCase().includes(searchbar.toLowerCase()) ||
      tricycle.affiliation.toLowerCase().includes(searchbar.toLowerCase())
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
        <TableTricycle items={filteredTricycles} />
      </React.Fragment>
    );
  }

  return <div className='BusinessesPage'>{table}</div>;
};
