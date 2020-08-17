import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { TiThMenu } from 'react-icons/ti';
import { FaUserPlus, FaUser } from 'react-icons/fa';
import { GoSignIn, GoSignOut } from 'react-icons/go';
import { IconContext } from 'react-icons';

export default props => {
  const [ user, setUser ] = useState(true);

  const toggleUser = () => {
    setUser(!user);
  };

  let auth = (
    <React.Fragment>
      <div className='uk-margin-xlarge-bottom' />
      <div>
        <li className='NavItem'>
          <NavLink to='/signin'>
            <IconContext.Provider value={{ size: '2em' }}>
              <GoSignIn />
            </IconContext.Provider>
          </NavLink>
        </li>
      </div>
    </React.Fragment>
  );

  if (user) {
    auth = (
      <React.Fragment>
        <div className='uk-margin-xlarge-bottom'>
          <h4>
            Main Menu <TiThMenu />
          </h4>
          <li className='NavItem'>
            <NavLink to='/' exact>
              All Profiles <FaUser />
            </NavLink>
          </li>
          <li className='NavItem'>
            <NavLink to='/add-profile'>
              Add Profile <FaUserPlus />
            </NavLink>
          </li>
        </div>
        <div>
          <li className='NavItem'>
            <NavLink to='/signin' onClick={toggleUser}>
              <IconContext.Provider value={{ size: '2em' }}>
                <GoSignOut />
              </IconContext.Provider>
            </NavLink>
          </li>
        </div>
      </React.Fragment>
    );
  }

  return (
    <ul className='NavItemsComponent'>
      <div className='BarangayLogo'>
        <img src={Logo} alt='barangay-logo' height='80px' />
      </div>
      {auth}
    </ul>
  );
};
