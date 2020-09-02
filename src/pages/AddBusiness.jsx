import React, { useRef, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import Webcam from 'react-webcam';
import Input from '../components/UI/Input';
import Select from '../components/UI/Select';
import Button from '../components/UI/Button';
import Modal from '../components/UI/Modal/Modal';

import { submitBusiness } from '../store/actions/businessActions';

const videoConstraints = {
  width      : 1280,
  height     : 720,
  facingMode : 'user'
};

export default () => {
  const dispatch = useDispatch();
  const [ imgSrc, setImgSrc ] = useState(null);
  const [ showCamera, setShowCamera ] = useState(false);
  const [ name, setName ] = useState('');
  const [ address, setAddress ] = useState('');
  const [ existence, setExistence ] = useState('');
  const [ owner, setOwner ] = useState('');
  const [ requestingPerson, setRequestingPerson ] = useState('');
  const [ nature, setNature ] = useState('');
  const webcamRef = useRef(null);

  const capture = useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
      closeCameraHandler();
    },
    [ webcamRef ]
  );

  const closeCameraHandler = () => {
    setShowCamera(false);
  };

  const showCameraHandler = () => {
    setShowCamera(true);
  };

  const submitBusinessHandler = () => {
    try {
      fetch(imgSrc).then(res => res.blob()).then(img => {
        const file = new File([ img ], 'profile.jpeg', {
          type : 'image/jpeg'
        });
        let form = new FormData();
        form.append('picture', file, `${name}.jpeg`);
        form.append('name', name);
        form.append('address', address);
        form.append('nature', nature);
        form.append('existence', moment(existence).format('MMMM D YYYY'));
        form.append('owner', owner);
        form.append('requestingPerson', requestingPerson);
        dispatch(submitBusiness(form));
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='AddBusinessPage uk-flex uk-padding'>
      <div className='AddBusiness uk-padding'>
        <div className='uk-padding-remove uk-margin-medium-top'>
          <Input
            type='text'
            id='establishment'
            label='Establishment'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Input
            type='text'
            id='address-business'
            label='Address'
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
          <Input
            type='date'
            id='existence'
            label='Existence'
            value={existence}
            onChange={e => setExistence(e.target.value)}
          />
          <Input type='text' id='owner' label='Owner' value={owner} onChange={e => setOwner(e.target.value)} />
          <Input
            type='text'
            id='req-person'
            label='Requesting Person'
            value={requestingPerson}
            onChange={e => setRequestingPerson(e.target.value)}
          />
          <Select
            id='nature'
            label='Nature'
            options={[
              'Others',
              'Market',
              'Bakery',
              'Barbershop',
              'Food Stall',
              'Salon',
              'Hardware',
              'Convenience Store',
              'Restaurant',
              'Eatery',
              'Coffeshop'
            ]}
            value={nature}
            onChange={e => setNature(e.target.value)}
          />
        </div>
      </div>
      {imgSrc ? (
        <div className='uk-margin-auto'>
          <div className='AddProfileImage'>
            <img className='uk-padding-remove' src={imgSrc} alt='dp' />
          </div>
          <div className='uk-text-center uk-margin-top'>
            <Button onClick={submitBusinessHandler}>Submit</Button>
          </div>
        </div>
      ) : (
        <div className='AddProfileImage uk-position-relative uk-margin-auto'>
          <Button className='uk-position-center ImageCapture' onClick={showCameraHandler}>
            Open camera
          </Button>
        </div>
      )}
      <Modal show={showCamera} removeModal={closeCameraHandler}>
        {showCamera && (
          <React.Fragment>
            <Webcam
              audio={false}
              height={360}
              ref={webcamRef}
              screenshotFormat='image/jpeg'
              width={450}
              videoConstraints={videoConstraints}
              mirrored={true}
            />
            <div className='uk-text-center uk-margin-small-top'>
              <Button className='ImageCapture' onClick={capture}>
                Capture photo
              </Button>
            </div>
          </React.Fragment>
        )}
      </Modal>
    </div>
  );
};
