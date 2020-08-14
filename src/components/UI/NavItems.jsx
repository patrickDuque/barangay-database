import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { TiThMenu } from 'react-icons/ti';
import { FaUserPlus, FaUser } from 'react-icons/fa';

export default props => {
  return (
    <ul className='NavItemsComponent'>
      <div className='BarangayLogo'>
        <img src={Logo} alt='barangay-logo' height='80px' />
      </div>
      <div>
        <li className='NavItem'>
          <NavLink to='/' exact>
            Main Menu <TiThMenu />
          </NavLink>
        </li>
      </div>
      <div />
      <div />
      <div />
      <div>
        <li className='NavItem'>
          <NavLink to='/signin'>
            Sign In <FaUser />
          </NavLink>
        </li>
        <li className='NavItem'>
          <NavLink to='/signup'>
            Register <FaUserPlus />
          </NavLink>
        </li>
      </div>
    </ul>
  );
};
