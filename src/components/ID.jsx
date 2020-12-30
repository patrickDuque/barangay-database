import React, { Component } from 'react';
import moment from 'moment';

import styled from 'styled-components';

const Background = styled.div`font-family: 'Baloo Tamma 2';`;

const Paragraph = styled.p`font-size: 9px;`;

const NameContainer = styled.div`
  font-size: 15px;
  padding: 3px;
  background-color: white;
`;

const Name = styled.p`font-size: 18px;`;

const Image = styled.img`
  border: 1px solid black;
  height: 95px;
  width: 95px;
`;

const ThumbMark = styled.div`
  border-radius: 10px;
  border: 1px solid black;
  height: 60px;
  width: 95px;
  background-color: white !important;
`;

const Logo = styled.img`
  height: 40px;
  width: 40px;
`;

const PageContainer = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  padding: 0;
  width: 350px;
  height: 200px;
  background: url(https://barangaybackend.s3-ap-southeast-1.amazonaws.com/bamboo.jpg) no-repeat !important;
`;

const Main = styled.div`align-items: flex-end;`;

const Header = styled.p`
  font-size: 12px;
  font-weight: bold;
`;

const Span = styled.span`
  font-weight: bold;
  text-transform: capitalize;
`;

export default class extends Component {
  render() {
    console.log(this.props.profile);
    const date = moment();
    return (
      <Background className='uk-padding uk-background-cover'>
        <div className='uk-text-center uk-grid'>
          <PageContainer className='uk-position-relative'>
            <div className='uk-flex uk-flex-between uk-padding-small'>
              <Logo src='https://barangaybackend.s3-ap-southeast-1.amazonaws.com/meyc-logo.jpg' alt='brgy-logo' />
              <div className='uk-text-center'>
                <Header className='uk-margin-remove'>CITY OF MEYCAUAYAN BULACAN</Header>
                <Header className='uk-margin-remove'>BARANGAY PANDAYAN ID CARD</Header>
              </div>
              <Logo src='https://barangaybackend.s3-ap-southeast-1.amazonaws.com/logo.jpg' alt='brgy-logo' />
            </div>
            <Main className='uk-flex uk-flex-around'>
              <Image src={this.props.profile.picture} alt='img' />
              <NameContainer className='uk-text-center'>
                <Name className='uk-margin-remove uk-text-left'>{this.props.profile.name}</Name>
                <Paragraph className='uk-margin-remove uk-text-left'>
                  ID Number: <Span>{this.props.profile._id}</Span>
                </Paragraph>
                <Paragraph className='uk-margin-remove uk-text-left'>{this.props.profile.address}</Paragraph>
                <Paragraph className='uk-margin-remove uk-text-left'>
                  Barangay Pandayan, City of Meycauayan, Bulacan
                </Paragraph>
              </NameContainer>
            </Main>
          </PageContainer>
          <PageContainer className='uk-position-relative'>
            <div className='uk-flex uk-flex-around uk-margin-top'>
              <div>
                <ThumbMark />
                <Paragraph className='uk-margin-remove'>RIGHT THUMB MARK</Paragraph>
              </div>
              <div className='uk-text-left'>
                <Paragraph className='uk-margin-remove'>
                  Birthdate: <span>{this.props.profile.birthday}</span>
                </Paragraph>
                <Paragraph className='uk-margin-remove'>
                  Status: <span>{this.props.status ? this.props.status : 'Single'}</span>
                </Paragraph>
                <Paragraph className='uk-margin-remove'>
                  Sector: <span>{this.props.profile.sector}</span>
                </Paragraph>
                <Paragraph className='uk-margin-remove'>
                  Date of Issue: <span>{date.format('MMMM D YYYY')}</span>
                </Paragraph>
              </div>
            </div>
            <div className='uk-margin-small-top uk-padding-small'>
              <Paragraph className='uk-margin-remove-bottom uk-text-center'>__________________________</Paragraph>
              <Paragraph className='uk-margin-remove uk-text-center'>Signature</Paragraph>
            </div>
            <div className='uk-flex uk-flex-around'>
              <div>
                <Paragraph className='uk-margin-remove uk-text-left'>
                  Contact Person: <Span>{this.props.contactPerson}</Span>
                </Paragraph>
                <Paragraph className='uk-margin-remove uk-text-left'>
                  Contact Number:{' '}
                  <Span>{this.props.contactNumber ? this.props.contactNumber : `(+63)___-___-____`}</Span>
                </Paragraph>
              </div>
              <div>
                <Paragraph className='uk-margin-remove'>
                  <strong>Judge Rolando L. Bulan (Ret.)</strong>
                </Paragraph>
                <Paragraph className='uk-margin-remove'>Punong Barangay</Paragraph>
              </div>
            </div>
          </PageContainer>
        </div>
      </Background>
    );
  }
}
