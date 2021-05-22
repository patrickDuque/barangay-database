import FormData from 'form-data';
import React, { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Webcam from 'react-webcam';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import Modal from '../components/UI/Modal/Modal';
import Select from '../components/UI/Select';
import Spinner from '../components/UI/Spinner';
import { submitProfile } from '../store/actions/profileActions';

const videoConstraints = {
	width: 1280,
	height: 720,
	facingMode: 'user',
};

export default () => {
	const dispatch = useDispatch();

	const [showCamera, setShowCamera] = useState(false);
	const [imgSrc, setImgSrc] = useState(null);
	const [contactNumber, setContactNumber] = useState('');
	const [birthplace, setBirthplace] = useState('');
	const [occupation, setOccupation] = useState('');
	const [transfer, setTransfer] = useState('');
	const [sector, setSector] = useState('None');

	const name = useSelector((state) => state.profile.name);
	const address = useSelector((state) => state.profile.address);
	const birthday = useSelector((state) => state.profile.birthday);
	const sex = useSelector((state) => state.profile.sex);
	const loading = useSelector((state) => state.profile.loading);

	const webcamRef = useRef(null);

	const capture = useCallback(() => {
		const imageSrc = webcamRef.current.getScreenshot();
		setImgSrc(imageSrc);
		closeCameraHandler();
	}, [webcamRef]);

	const closeCameraHandler = () => {
		setShowCamera(false);
	};

	const showCameraHandler = () => {
		setShowCamera(true);
	};

	const submitProfileHandler = async () => {
		try {
			fetch(imgSrc)
				.then((res) => res.blob())
				.then((img) => {
					const file = new File([img], 'profile.jpeg', {
						type: 'image/jpeg',
					});
					let form = new FormData();
					form.append('picture', file, `${name}.jpeg`);
					form.append('sector', sector);
					form.append('contactNumber', contactNumber === '' ? 'No contact number' : contactNumber);
					form.append('occupation', occupation === '' ? 'None' : occupation);
					form.append('birthplace', birthplace === '' ? 'None' : birthplace);
					form.append('name', name);
					form.append('address', address);
					form.append('birthday', birthday);
					form.append('sex', sex);
					form.append('transfer', transfer === '' ? new Date().getFullYear() : transfer);
					dispatch(submitProfile(form));
				});
		} catch (error) {
			console.log(error);
		}
	};

	let otherDetails = <Spinner />;

	if (!loading) {
		otherDetails = (
			<React.Fragment>
				{imgSrc ? (
					<div className="AddProfileImage uk-margin-auto">
						<img className="uk-padding-remove" src={imgSrc} alt="dp" />
					</div>
				) : (
					<div className="AddProfileImage uk-position-relative uk-margin-auto">
						<Button className="uk-position-center ImageCapture" onClick={showCameraHandler}>
							Open camera
						</Button>
					</div>
				)}
				<Modal show={showCamera} removeModal={closeCameraHandler}>
					{showCamera && (
						<React.Fragment>
							<Webcam
								audio={false}
								ref={webcamRef}
								screenshotFormat="image/jpeg"
								videoConstraints={videoConstraints}
								mirrored={true}
								forceScreenshotSourceSize={true}
							/>
							<div className="uk-text-center uk-margin-small-top">
								<Button className="ImageCapture" onClick={capture}>
									Capture photo
								</Button>
							</div>
						</React.Fragment>
					)}
				</Modal>
				<div className="uk-grid uk-margin-medium-bottom uk-margin-medium-top">
					<div className="uk-width-auto">
						<Input type="text" id="contactNumber" label="Contact Number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
						<Input type="text" id="occupation" label="Occupation" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
						<Input type="text" id="transfer" label="Year Tranferred" value={transfer} onChange={(e) => setTransfer(e.target.value)} />
					</div>
					<div className="uk-width-auto">
						<Input type="text" id="birthplace" label="Place of Birth" value={birthplace} onChange={(e) => setBirthplace(e.target.value)} />
						<Select
							label="Sector"
							id="sector"
							options={['None', 'Senior Citizen', 'PWD', 'Solo Parent', 'OFW', 'Minor', 'Farmer', 'TODA', 'JODA', 'UV', 'BUS']}
							value={sector}
							onChange={(e) => setSector(e.target.value)}
						/>
					</div>
				</div>
				<div className="uk-text-center">
					<Button to="/add-profile/address">Previous</Button>
					<Button onClick={submitProfileHandler}>Submit</Button>
				</div>
			</React.Fragment>
		);
	}

	return <div className="AddOtherDetailsPage uk-padding">{otherDetails}</div>;
};
