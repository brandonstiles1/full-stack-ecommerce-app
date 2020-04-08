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

// Styles
import { LogoContainer, OptionsContainer, OptionDiv, OptionLink, HeaderContainer } from './header.styles'

// Components
import { ReactComponent as Logo } from '../../assets/logo.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>
          SHOP
        </OptionLink>
        <OptionLink to='/contact'>
          CONTACT
        </OptionLink>
        {
          currentUser ?
            <OptionDiv onClick={ () => auth.signOut() }>
              SIGN OUT
            </OptionDiv>
            :
            <OptionLink to='/signin'>
              SIGN IN
            </OptionLink>
        }
        <CartIcon />
      </OptionsContainer>
      { hidden ? null :
        <CartDropdown />
      }
    </HeaderContainer>
  );
}

const mapStateToProps = state => createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);