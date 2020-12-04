import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.jfif';
import { TiThMenu } from 'react-icons/ti';
import { FaUserPlus, FaUser, FaBusinessTime, FaBicycle } from 'react-icons/fa';
import { GoSignIn, GoSignOut } from 'react-icons/go';
import { MdBusinessCenter } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/actions/userActions';

export default props => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user.user);

  const logoutUser = () => {
    dispatch(logout());
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
          <li className='NavItem'>
            <NavLink to='/all-business'>
              All Businesses <MdBusinessCenter />
            </NavLink>
          </li>
          <li className='NavItem'>
            <NavLink to='/add-business'>
              Add Business <FaBusinessTime />
            </NavLink>
          </li>
          <li className='NavItem'>
            <NavLink to='/all-tricycle'>
              All Tricycles <FaBicycle />
            </NavLink>
          </li>
          <li className='NavItem'>
            <NavLink to='/add-tricycle'>
              Add Tricycles <FaBicycle />
            </NavLink>
          </li>
        </div>
        <div>
          <li className='NavItem'>
            <NavLink to='/signin' onClick={logoutUser}>
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
