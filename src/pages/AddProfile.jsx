import React, { useRef, useCallback, useState } from 'react';
import Modal from '../components/UI/Modal/Modal';
import Input from '../components/UI/Input';
import Webcam from 'react-webcam';

const videoConstraints = {
  width      : 1280,
  height     : 720,
  facingMode : 'user'
};

export default () => {
  const [ showCamera, setShowCamera ] = useState(false);
  const [ imgSrc, setImgSrc ] = useState(null);
  const [ name, setName ] = useState('');
  const webcamRef = useRef(null);

  const capture = useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    },
    [ webcamRef ]
  );

  const closeCameraHandler = () => {
    setShowCamera(false);
  };

  const showCameraHandler = () => {
    setShowCamera(true);
  };

  return (
    <div className='AddProfileComponent uk-position-relative'>
      <div className='uk-grid uk-position-center'>
        {imgSrc ? (
          <img className='AddProfileImage uk-padding-remove' src={imgSrc} alt='dp' />
        ) : (
          <div className='AddProfileImage uk-position-relative'>
            <button className='uk-position-center ImageCapture' onClick={showCameraHandler}>
              Open camera
            </button>
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
                <button className='ImageCapture' onClick={capture}>
                  Capture photo
                </button>
              </div>
            </React.Fragment>
          )}
        </Modal>
        <div className='uk-width-expand'>
          <Input type='text' id='fname' label='First Name' />
          <Input type='text' id='mname' label='Middle Name' />
          <Input type='text' id='lname' label='Last Name' />

          <Input type='text' id='address' label='Address' />
          <Input type='date' id='birthday' label='Birthday' />
          <Input type='number' id='contact-number' label='Contact' />
        </div>
      </div>
    </div>
  );
};
