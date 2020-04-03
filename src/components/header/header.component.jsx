import React from 'react';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import './header.styles.scss';

// Redux
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

// Firebase 
import { auth } from '../../firebase/firebase.utils.js';

// Components
import { ReactComponent as Logo } from '../../assets/logo.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => {
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
        <CartIcon />
      </div>
      { hidden ? null :
        <CartDropdown />
      }
    </div>
  );
}

const mapStateToProps = state => createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);