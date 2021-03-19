import React from 'react';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';
import { connect } from 'react-redux';

import Button from '../components/UI/Button';
import Profile from '../components/Profile';
import Spinner from '../components/UI/Spinner';
import Input from '../components/UI/Input';

import history from '../helpers/history';

class PrintProfile extends React.Component {
	state = {
		purpose  : '',
		ctc      : '',
		ctcDate  : '',
		ctcPlace : ''
	};
	render() {
		return (
			<div className='PrintPage' style={{ backgroundColor: this.props.profile ? 'white' : '#181c3a' }}>
				<div className='uk-margin-top uk-flex'>
					<div>
						<Input
							isId
							label='Purpose'
							type='text'
							id='purpose'
							value={this.state.purpose}
							onChange={e =>
								this.setState({
									purpose : e.target.value
								})}
						/>
						<Input
							isId
							label='Ctc'
							type='text'
							id='ctc'
							value={this.state.ctc}
							onChange={e =>
								this.setState({
									ctc : e.target.value
								})}
						/>
					</div>
					<div>
						<Input
							isId
							label='Date'
							type='date'
							id='ctcDate'
							value={this.state.ctcDate}
							onChange={e =>
								this.setState({
									ctcDate : e.target.value
								})}
						/>
						<Input
							isId
							label='Place'
							type='text'
							id='ctcPlace'
							value={this.state.ctcPlace}
							onChange={e =>
								this.setState({
									ctcPlace : e.target.value
								})}
						/>
					</div>
				</div>
				{this.props.profile ? (
					<Profile
						ref={el => (this.componentRef = el)}
						profile={this.props.profile.filter(p => p._id === history.location.pathname.split('/')[2])[0]}
						purpose={this.state.purpose}
						ctc={this.state.ctc}
						ctcDate={this.state.ctcDate}
						ctcPlace={this.state.ctcPlace}
					/>
				) : (
					<Spinner />
				)}
				<div className='uk-text-right'>
					<ReactToPrint content={() => this.componentRef} print={async () => await HTMLIFrameElement.print()}>
						<PrintContextConsumer>
							{({ handlePrint }) => <Button onClick={handlePrint}>Print</Button>}
						</PrintContextConsumer>
					</ReactToPrint>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		profile : state.profile.profiles
	};
};

export default connect(mapStateToProps, null)(PrintProfile);
