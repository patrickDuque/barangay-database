import React, { Component } from 'react';
import moment from 'moment';

import styled from 'styled-components';

const Background = styled.div`
  background: url(https://barangaybackend.s3-ap-southeast-1.amazonaws.com/bamboo.jpg) no-repeat !important;
  font-family: 'Baloo Tamma 2';
`;

const Picture = styled.img`
  border-radius: 10px;
  border: 1px solid black;
  height: 150px;
  width: 150px;
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
      <Background className='uk-padding'>
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
        <div className='uk-flex uk-flex-right'>
          <Picture className='uk-margin-bottom' src={`${this.props.business.picture}`} alt='display pic' />
        </div>
        <Headline className='uk-margin-remove'>
          <strong>TO WHOM IT MAY CONCERN:</strong>
        </Headline>
        <Headline className='uk-margin-remove-top'>
          This is to certify that the establishment below has requested for a Barangay Business Clearance from this
          office with details listed below:
        </Headline>
        <div>
          <PageContainer className='uk-padding-small'>
            <Paragraph className='uk-margin-remove'>
              Establishment: <Span>{this.props.business.name}</Span>
            </Paragraph>
            <Paragraph className='uk-margin-remove'>
              Address: <Span>{this.props.business.address}</Span>
            </Paragraph>
            <Paragraph className='uk-margin-remove'>
              Nature of Business: <Span>{this.props.business.nature}</Span>
            </Paragraph>
            <Paragraph className='uk-margin-remove'>
              Existence: <Span>{this.props.business.existence}</Span>
            </Paragraph>
            <Paragraph className='uk-margin-remove'>
              Owner: <Span>{this.props.business.owner}</Span>
            </Paragraph>
            <Paragraph className='uk-margin-remove'>
              Requesting Person: <Span>{this.props.business.requestingPerson}</Span>
            </Paragraph>
            <Paragraph className='uk-margin-remove'>
              Purpose: <Span>{this.props.purpose}</Span>
            </Paragraph>
            <Paragraph className='uk-margin-remove'>
              Amount: <Span>₱{this.props.amount}</Span>
            </Paragraph>
            <Paragraph className='uk-margin-remove'>
              Date of Issue: <Span>{date.format('MMMM D YYYY')}</Span>
            </Paragraph>
          </PageContainer>
        </div>
        <Paragraph>
          This clearance is done in accordance with Barangay Ordinance no. 92-3 dated March 15, 1994. And is issued to{' '}
          <Span>{this.props.business.requestingPerson}</Span> whose picture appears herein.
        </Paragraph>
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
              <strong>Judge Rolando L. Bulan(Ret.)</strong>
            </Headline>
            <Headline className='uk-margin-remove'>Punong Barangay</Headline>
          </div>
        </div>
      </Background>
    );
  }
}
