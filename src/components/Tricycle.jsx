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

const Headline = styled.h4`font-size: 17px;`;

const Paragraph = styled.p`font-size: 15px;`;

export default class extends Component {
	render() {
		const date = moment();
		console.log(this.props.tricycle);
		return (
			<Background className='uk-padding-small'>
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
							This is to certify that {this.props.tricycle.name}, with address at {this.props.tricycle.address},
						</Paragraph>
						<Paragraph className='uk-margin-remove'>Pandayan, City of Meycauayan, Bulacan.</Paragraph>
						<Paragraph className='uk-margin-remove'>Is the owner of a tricycle with specifications:</Paragraph>
						<div className='uk-margin-auto'>
							<Paragraph className='uk-margin-remove'>
								Brand: <Span>{this.props.tricycle.brand}</Span>
							</Paragraph>
							<Paragraph className='uk-margin-remove'>
								Color: <Span>{this.props.tricycle.color}</Span>
							</Paragraph>
							<Paragraph className='uk-margin-remove'>
								Year Model: <Span>{this.props.tricycle.model}</Span>
							</Paragraph>
							<Paragraph className='uk-margin-remove'>
								Plate Number: <Span>{this.props.tricycle.plateNumber}</Span>
							</Paragraph>
							<Paragraph className='uk-margin-remove'>
								Body Number: <Span>{this.props.tricycle.bodyNumber}</Span>
							</Paragraph>
							<Paragraph className='uk-margin-remove'>
								Affiliation: <Span>{this.props.tricycle.affiliation}</Span>
							</Paragraph>
							<Paragraph className='uk-margin-remove'>
								Motor Number: <Span>{this.props.tricycle.motorNumber}</Span>
							</Paragraph>
							<Paragraph className='uk-margin-remove'>
								Place of Issue: <Span>Barangay Pandayan, Meycauayan, Bulacan</Span>
							</Paragraph>
							<Paragraph className='uk-margin-remove'>
								Amount: <Span>₱{this.props.amount}</Span>
							</Paragraph>
							<Paragraph className='uk-margin-remove'>
								Date of Issue: <Span>{date.format('MMMM D YYYY')}</Span>
							</Paragraph>
						</div>
					</PageContainer>
					<div>
						<Picture className='uk-margin-bottom' src={`${this.props.tricycle.picture}`} alt='display pic' />
						<ThumbMark className='uk-margin-remove' />
						<Paragraph className='uk-margin-remove uk-text-center'>Right Thumb Mark</Paragraph>
					</div>
				</div>
				<Paragraph className='uk-margin-small'>
					This clearance is hereby granted for the purpose of securing <Span>"{this.props.purpose}"</Span>
				</Paragraph>
				<Paragraph className='uk-margin-remove'>
					Issued <Span>{date.format('MMMM D YYYY')}</Span>
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
