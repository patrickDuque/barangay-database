import React, { useRef, useState } from 'react';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';
import { connect } from 'react-redux';

import Button from '../components/UI/Button';
import Profile from '../components/Profile';
import Spinner from '../components/UI/Spinner';
import Input from '../components/UI/Input';

import history from '../helpers/history';

class PrintProfile extends React.Component {
  state = {
    purpose : ''
  };
  render() {
    return (
      <div className='PrintPage' style={{ backgroundColor: this.props.profile ? 'white' : '#181c3a' }}>
        <div className='uk-margin-top'>
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
        </div>
        {this.props.profile ? (
          <Profile
            ref={el => (this.componentRef = el)}
            profile={this.props.profile.filter(p => p._id === history.location.pathname.split('/')[2])[0]}
            purpose={this.state.purpose}
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
