import React, { Component } from 'react';
import moment from 'moment';

import Logo from '../assets/images/logo.jfif';
import MeycLogo from '../assets/images/meyc-logo.jfif';

export default class extends Component {
  render() {
    const date = moment();
    return (
      <div className='ProfilePage uk-padding'>
        <div className='uk-flex uk-flex-between uk-padding'>
          <img src={MeycLogo} alt='brgy-logo' height='96px' />
          <div className='uk-text-center'>
            <h4 className='uk-margin-remove'>REPUBLIC OF THE PHILIPPINES</h4>
            <h4 className='uk-margin-remove'>PROVINCE OF BULACAN</h4>
            <h4 className='uk-margin-remove'>CITY OF MEYCAUAYAN BULACAN</h4>
            <h4 className='uk-margin-remove'>BARANGAY PANDAYAN</h4>
          </div>
          <img src={Logo} alt='brgy-logo' height='96px' />
        </div>
        <h3 className='uk-text-center uk-margin-remove-top uk-margin-medium-bottom'>OFFICE OF THE BARANGAY CHAIRMAN</h3>
        <div className='uk-flex uk-flex-between'>
          <div className='ProfilePageContent uk-padding'>
            <h4 className='uk-margin-remove'>TO WHOM IT MAY CONCERN:</h4>
            <p className='uk-margin-remove'>This is to certify that this person whose name. right thumb mark </p>
            <p className='uk-margin-remove'>and picture appear hereon has requested a record and Barangay</p>
            <p className='uk-margin-remove'>clearance from this office and result/s is/are listed below:</p>
            <div className='uk-margin-top'>
              <p className='uk-margin-remove'>
                NAME: <span>{this.props.profile.name}</span>
              </p>
              <p className='uk-margin-remove'>
                Address: <span>{this.props.profile.address}</span>
              </p>
              <p className='uk-margin-remove'>
                Date of birth: <span>{this.props.profile.birthday}</span>
              </p>
              <p className='uk-margin-remove'>
                Place of birth: <span>{this.props.profile.birthplace}</span>
              </p>
              <p className='uk-margin-remove'>Purpose:</p>
              <p className='uk-margin-remove'>
                Remarks: <span>No Derogatory Records as of Date</span>
              </p>
              <p className='uk-margin-remove'>CTC No.:</p>
              <p className='uk-margin-remove'>
                Place of Issue: <span>Barangay Pandayan, Meycauayan, Bulacan</span>
              </p>
              <p className='uk-margin-remove'>
                Date of Issue: <span>{date.format('MMMM D YYYY')}</span>
              </p>
            </div>
          </div>
          <div>
            <img
              className='ProfilePagePicture uk-margin-bottom'
              src={`http://localhost:5000/uploads/${this.props.profile.picture}`}
              alt='display pic'
            />
            <div className='RightThumbMark uk-margin-remove' />
            <p className='uk-margin-remove uk-text-center'>Right Thumb Mark</p>
          </div>
        </div>
        <div className='uk-flex uk-flex-between'>
          <ul className='uk-margin-top'>
            <li>
              Valid for three (3) months. Expiration Date:{' '}
              <strong>{date.add(3, 'months').format('MMMM D YYYY')}</strong>
            </li>
            <li>Not valid without the official Seal and Authorized Signature</li>
          </ul>
          <div className='uk-margin-top uk-text-center'>
            <h4 className='uk-margin-remove'>Judge Rolando L. Bulan(Ret.)</h4>
            <h5 className='uk-margin-remove'>Barangay Chairman</h5>
          </div>
        </div>
      </div>
    );
  }
}
