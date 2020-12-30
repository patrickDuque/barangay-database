import React, { Component } from 'react';
import moment from 'moment';

import styled from 'styled-components';

const Background = styled.div`
  background: url(https://barangaybackend.s3-ap-southeast-1.amazonaws.com/bamboo.jpg) no-repeat !important;
  background-size: cover;
  font-family: 'Baloo Tamma 2';
`;

const Picture = styled.img`
  border-radius: 10px;
  border: 1px solid black;
  height: 150px;
  width: 150px;
`;

const ThumbMark = styled.div`
  border: 1px solid black;
  height: 96px;
  width: 150px;
  background-color: white !important;
`;

const Logo = styled.img`
  height: 90px;
  width: 90px;
`;

const PageContainer = styled.div`
  border: 1px solid black;
  border-radius: 20px;
`;

const Span = styled.span`
  font-weight: bold;
  text-transform: capitalize;
`;

const Headline = styled.h4`font-size: 14px;`;

const Paragraph = styled.p`font-size: 12px;`;

export default class extends Component {
  render() {
    const date = moment();
    return (
      <Background imageUrl={require('../assets/images/bamboo.jpg')} className='uk-padding'>
        <div className='uk-flex uk-flex-between uk-padding-small'>
          <Logo src='https://barangaybackend.s3-ap-southeast-1.amazonaws.com/meyc-logo.jpg' alt='brgy-logo' />
          <div className='uk-text-center'>
            <Headline className='uk-margin-remove'>REPUBLIC OF THE PHILIPPINES</Headline>
            <Headline className='uk-margin-remove'>PROVINCE OF BULACAN</Headline>
            <Headline className='uk-margin-remove'>CITY OF MEYCAUAYAN BULACAN</Headline>
            <Headline className='uk-margin-remove'>BARANGAY PANDAYAN</Headline>
          </div>
          <Logo src='https://barangaybackend.s3-ap-southeast-1.amazonaws.com/logo.jpg' alt='brgy-logo' />
        </div>
        <Headline className='uk-text-center uk-margin-remove-top uk-margin-medium-bottom'>
          <strong>OFFICE OF THE BARANGAY CHAIRMAN</strong>
        </Headline>
        <div className='uk-flex uk-flex-between'>
          <PageContainer className='uk-padding-small'>
            <Headline className='uk-margin-remove'>
              <strong>TO WHOM IT MAY CONCERN:</strong>
            </Headline>
            <Paragraph className='uk-margin-remove'>
              This is to certify that this person whose name. right thumb mark{' '}
            </Paragraph>
            <Paragraph className='uk-margin-remove'>
              and picture appear hereon has requested a record and Barangay
            </Paragraph>
            <Paragraph className='uk-margin-remove'>
              clearance from this office and result/s is/are listed below:
            </Paragraph>
            <div className='uk-margin-top'>
              <Paragraph className='uk-margin-remove'>
                NAME: <Span>{this.props.profile.name}</Span>
              </Paragraph>
              <Paragraph className='uk-margin-remove'>
                Address: <Span>{this.props.profile.address}</Span>
              </Paragraph>
              <Paragraph className='uk-margin-remove'>
                Date of birth: <Span>{this.props.profile.birthday}</Span>
              </Paragraph>
              <Paragraph className='uk-margin-remove'>
                Place of birth: <Span>{this.props.profile.birthplace}</Span>
              </Paragraph>
              <Paragraph className='uk-margin-remove'>
                Purpose: <Span>{this.props.purpose}</Span>
              </Paragraph>
              <Paragraph className='uk-margin-remove'>
                Remarks: <Span>No Derogatory Records as of Date</Span>
              </Paragraph>
              <Paragraph className='uk-margin-remove'>
                Place of Issue: <Span>Barangay Pandayan, Meycauayan, Bulacan</Span>
              </Paragraph>
              <Paragraph className='uk-margin-remove'>
                Date of Issue: <Span>{date.format('MMMM D YYYY')}</Span>
              </Paragraph>
              <Paragraph className='uk-margin-remove'>
                Barangay ID: <Span>{this.props.profile._id}</Span>
              </Paragraph>
            </div>
          </PageContainer>
          <div>
            <Picture className='uk-margin-bottom' src={`${this.props.profile.picture}`} alt='display pic' />
            <ThumbMark className='uk-margin-remove' />
            <Paragraph className='uk-margin-remove uk-text-center'>Right Thumb Mark</Paragraph>
          </div>
        </div>
        <div className='uk-flex uk-flex-between'>
          <ul className='uk-margin-top'>
            <li>
              <Paragraph className='uk-margin-remove'>
                Valid for three (3) months. Expiration Date:{' '}
                <strong>{date.add(3, 'months').format('MMMM D YYYY')}</strong>
              </Paragraph>
            </li>
            <li>
              <Paragraph className='uk-margin-remove'>
                Not valid without the official Seal and Authorized Signature
              </Paragraph>
            </li>
          </ul>
          <div className='uk-margin-top uk-text-center'>
            <Headline className='uk-margin-remove'>
              <strong>Judge Rolando L. Bulan (Ret.)</strong>
            </Headline>
            <Headline className='uk-margin-remove'>Punong Barangay</Headline>
          </div>
        </div>
      </Background>
    );
  }
}
