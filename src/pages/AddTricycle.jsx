import React, { useRef, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Webcam from 'react-webcam';
import Input from '../components/UI/Input';
import Select from '../components/UI/Select';
import Button from '../components/UI/Button';
import Modal from '../components/UI/Modal/Modal';
import Spinner from '../components/UI/Spinner';

import { submitTricycle } from '../store/actions/tricycleActions';

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
  const [ contactNumber, setContactNumber ] = useState('');
  const [ brand, setBrand ] = useState('');
  const [ model, setModel ] = useState('2020');
  const [ plateNumber, setPlateNumber ] = useState('');
  const [ motorNumber, setMotorNumber ] = useState('');
  const [ color, setColor ] = useState('');
  const [ bodyNumber, setBodyNumber ] = useState('00');
  const [ affiliation, setAffiliation ] = useState('');
  const loading = useSelector(state => state.tricycle.loading);
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

  const submitTricycleHandler = () => {
    try {
      fetch(imgSrc).then(res => res.blob()).then(img => {
        const file = new File([ img ], 'profile.jpeg', {
          type : 'image/jpeg'
        });
        let form = new FormData();
        form.append('picture', file, `${name}.jpeg`);
        form.append('name', name);
        form.append('address', address);
        form.append('contactNumber', contactNumber ? contactNumber : '');
        form.append('brand', brand ? brand : '');
        form.append('model', model ? model : '2020');
        form.append('plateNumber', plateNumber ? plateNumber : '');
        form.append('motorNumber', motorNumber ? motorNumber : '');
        form.append('color', color ? color : '');
        form.append('bodyNumber', bodyNumber ? bodyNumber : '00');
        form.append('affiliation', affiliation ? affiliation : 'Others');
        dispatch(submitTricycle(form));
      });
    } catch (error) {
      console.log(error);
    }
  };

  let addBusiness = <Spinner />;

  if (!loading) {
    addBusiness = (
      <React.Fragment>
        <div className='AddTricycle'>
          <div className='uk-padding-remove uk-margin-medium-top uk-flex uk-flex-around'>
            <div>
              <Input type='text' id='owner' label='Owner' value={name} onChange={e => setName(e.target.value)} />
              <Input
                type='text'
                id='address-tricycle'
                label='Address'
                value={address}
                onChange={e => setAddress(e.target.value)}
              />
              <Input
                type='text'
                id='contact-number'
                label='Contact Number'
                value={contactNumber}
                onChange={e => setContactNumber(e.target.value)}
              />
              <Input type='text' id='brand' label='Brand' value={brand} onChange={e => setBrand(e.target.value)} />
              <Input
                type='number'
                id='model'
                label='Year Model'
                value={model}
                onChange={e => setModel(e.target.value)}
              />
            </div>
            <div>
              <Input
                type='number'
                id='body-number'
                label='Body Number'
                value={bodyNumber}
                onChange={e => setBodyNumber(e.target.value)}
              />
              <Input
                type='text'
                id='plate-number'
                label='Plate Number'
                value={plateNumber}
                onChange={e => setPlateNumber(e.target.value)}
              />
              <Input
                type='text'
                id='motor-number'
                label='Motor Number'
                value={motorNumber}
                onChange={e => setMotorNumber(e.target.value)}
              />
              <Input type='text' id='color' label='Color' value={color} onChange={e => setColor(e.target.value)} />
              <Select
                id='affiliation'
                label='Affiliation'
                options={[
                  'Others',
                  'Achievers’ TODA',
                  'Pandayan TODA',
                  'Topaz TODA',
                  'Barbershop',
                  'PSM TODA',
                  'Tri-wheels TODA (St. Francis Phase II B & C Terminal)',
                  'Tri-wheels TODA (Gladiola, St. Michael Homes Phase III)'
                ]}
                value={affiliation}
                onChange={e => setAffiliation(e.target.value)}
              />
            </div>
          </div>
        </div>
        {imgSrc ? (
          <div className='uk-flex'>
            <div className='uk-margin-auto'>
              <div className='AddProfileImage'>
                <img className='uk-padding-remove' src={imgSrc} alt='dp' />
              </div>
              <div className='uk-text-center uk-margin-top'>
                <Button onClick={submitTricycleHandler}>Submit</Button>
              </div>
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
      </React.Fragment>
    );
  }

  return <div className='AddTricyclePage'>{addBusiness}</div>;
};
