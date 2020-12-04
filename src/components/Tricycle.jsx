import React, { Component } from 'react';
import moment from 'moment';

import Logo from '../assets/images/logo.jfif';
import MeycLogo from '../assets/images/meyc-logo.jfif';

export default class extends Component {
  render() {
    const date = moment();
    console.log(this.props.tricycle);
    return (
      <div className='BusinessPage uk-padding'>
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
        <h4 className=''>TO WHOM IT MAY CONCERN:</h4>
        <p className='uk-margin-remove'>This is to certify that {this.props.tricycle.name}</p>
        <p className='uk-margin-remove'>
          with address at {this.props.tricycle.address} Pandayan, City of Meycauayan, Bulacan
        </p>
        <p className='uk-margin-remove'>Is the owner of a tricycle with specifications:</p>
        <div className='uk-flex uk-flex-between'>
          <div className='BusinessPageContent uk-padding'>
            <div className=''>
              <p className='uk-margin-remove'>
                Brand: <span>{this.props.tricycle.brand}</span>
              </p>
              <p className='uk-margin-remove'>
                Color: <span>{this.props.tricycle.color}</span>
              </p>
              <p className='uk-margin-remove'>
                Year Model: <span>{this.props.tricycle.model}</span>
              </p>
              <p className='uk-margin-remove'>
                Plate Number: <span>{this.props.tricycle.plateNumber}</span>
              </p>
              <p className='uk-margin-remove'>
                Body Number: <span>{this.props.tricycle.bodyNumber}</span>
              </p>
              <p className='uk-margin-remove'>
                Affiliation: <span>{this.props.tricycle.affiliation}</span>
              </p>
              <p className='uk-margin-remove'>
                Motor Number: <span>{this.props.tricycle.motorNumber}</span>
              </p>
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
              className='BusinessPagePicture uk-margin-bottom'
              src={`${this.props.tricycle.picture}`}
              alt='display pic'
            />
            <div className='RightThumbMark uk-margin-remove' />
            <p className='uk-margin-remove uk-text-center'>Right Thumb Mark</p>
          </div>
        </div>
        <p className='uk-margin-medium'>
          This clearance is hereby granted for the purpose of securing "Motorized Tricycle Operator's Permit" from the
          City Franchising Unit of the Office of the Mayor, City of Meycauayan Bulacan for the year{' '}
          {date.format('YYYY')}
        </p>
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
            <h5 className='uk-margin-remove'>Punong Barangay</h5>
          </div>
        </div>
      </div>
    );
  }
}
