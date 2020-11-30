import React, { Component } from 'react';
import moment from 'moment';

import Logo from '../assets/images/logo.jfif';
import MeycLogo from '../assets/images/meyc-logo.jfif';

export default class extends Component {
  render() {
    console.log(this.props.profile);
    const date = moment();
    return (
      <div className='IdPage uk-padding'>
        <div className='uk-text-center uk-grid'>
          <div className='IdPageContent'>
            <div className='uk-flex uk-flex-between uk-padding-small'>
              <img src={MeycLogo} alt='brgy-logo' height='48px' />
              <div className='uk-text-center IdHeader'>
                <p className='uk-margin-remove'>REPUBLIC OF THE PHILIPPINES</p>
                <p className='uk-margin-remove'>PROVINCE OF BULACAN</p>
                <p className='uk-margin-remove'>CITY OF MEYCAUAYAN BULACAN</p>
                <p className='uk-margin-remove'>BARANGAY PANDAYAN</p>
              </div>
              <img src={Logo} alt='brgy-logo' height='48px' />
            </div>
            <div className='uk-margin-small'>
              <h6 className='uk-margin-remove'>Barangay Identification Card</h6>
              <p className='uk-margin-remove'>
                Barangay ID: <span>{this.props.profile._id}</span>
              </p>
            </div>
            <div className='uk-flex uk-flex-around uk-flex-center IdMain'>
              <img className='IdPagePicture' src={this.props.profile.picture} alt='img' />
              <div className='uk-text-center'>
                <p className='uk-margin-remove'>{this.props.profile.name}</p>
                <p className='uk-margin-remove'>{this.props.profile.address}</p>
              </div>
            </div>
            <div className='uk-margin-top'>
              <p className='uk-margin-remove uk-text-center'>__________________________</p>
              <p className='uk-margin-remove uk-text-center'>Signature</p>
            </div>
          </div>
          <div className='IdPageContent uk-position-relative'>
            <div className='uk-flex uk-flex-around uk-margin-top'>
              <div className='IdHeader'>
                <div className='IdPagePicture' />
                <p className='uk-margin-remove'>RIGHT THUMB MARK</p>
              </div>
              <div className='uk-text-left IdHeader'>
                <p className='uk-margin-remove'>
                  Date of birth: <span>{this.props.profile.birthday}</span>
                </p>
                <p className='uk-margin-remove'>
                  Place of birth: <span>{this.props.profile.birthplace}</span>
                </p>
                <p className='uk-margin-remove'>
                  Occupation: <span>{this.props.profile.occupation}</span>
                </p>
                <p className='uk-margin-remove'>
                  Sector: <span>{this.props.profile.sector}</span>
                </p>
                <p className='uk-margin-remove'>
                  Sex: <span>{this.props.profile.sex}</span>
                </p>
                <p className='uk-margin-remove'>
                  Year Transfered: <span>{this.props.profile.transfer}</span>
                </p>
                <p className='uk-margin-remove'>
                  Date of Issue: <span>{date.format('MMMM D YYYY')}</span>
                </p>
              </div>
            </div>
            <div className='uk-divider-icon uk-margin-remove' />
            <p className='uk-margin-remove'>IN CASE OF EMERGENCY</p>
            <div className='uk-divider-icon uk-margin-remove' />
            <p className='uk-margin-remove'>
              Contact Number:{' '}
              {this.props.profile.contactNumber ? this.props.profile.contactNumber : `(+63)___-___-____`}
            </p>
            <div className='uk-position-bottom'>
              <p className='uk-margin-remove'>HON. ROLANDO L. BULACAN</p>
              <p className='uk-margin-remove'>Punong Barangay</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
