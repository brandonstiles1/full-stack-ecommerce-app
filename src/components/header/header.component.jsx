import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

// Firebase 
import { auth } from '../../firebase/firebase.utils.js';

import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = ({ currentUser }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {
          currentUser ?
            <div className='option' onClick={ () => auth.signOut() }>
              SIGN OUT
            </div>
            :
            <Link className='option' to='/signin'>
              SIGN IN
            </Link>
        }
      </div>

    </div>
  );
}

export default Header;