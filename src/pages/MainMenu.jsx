import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../api/axios';
import Table from '../components/Table';
import Input from '../components/UI/Input';
import Spinner from '../components/UI/Spinner';
import ErrorHandler from '../hoc/ErrorHandler';
import { getProfiles } from '../store/actions/profileActions';

export default ErrorHandler(() => {
	const dispatch = useDispatch();

	const [searchbar, setSearchBar] = useState('');
	const profiles = useSelector((state) => state.profile.profiles);
	const loading = useSelector((state) => state.profile.loading);

	useEffect(() => {
		if (profiles.length === 0) {
			dispatch(getProfiles());
		}
	}, [dispatch]);

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
		.filter(
			(profile) =>
				profile.name.toLowerCase().includes(searchbar.toLowerCase()) ||
				profile.address.toLowerCase().includes(searchbar.toLowerCase()) ||
				profile.sector.toLowerCase() === searchbar.toLowerCase() ||
				profile.sex.toLowerCase() === searchbar.toLowerCase() ||
				profile.age.toString() === searchbar ||
				profile._id.includes(searchbar.toLowerCase())
		)
		.sort(sortName);

	let mainPage = <Spinner />;

	if (!loading) {
		mainPage = (
			<React.Fragment>
				<div className="uk-flex uk-flex-between uk-padding">
					<Input id="searchbar" label="Search" type="text" value={searchbar} onChange={(e) => setSearchBar(e.target.value)} />
					<h3 className="uk-margin-remove uk-text-right">Count: {filteredProfile.length}</h3>
				</div>
				<Table profiles={filteredProfile} />
			</React.Fragment>
		);
	}

	return <div className="MainMenuPage">{mainPage}</div>;
}, axios);
