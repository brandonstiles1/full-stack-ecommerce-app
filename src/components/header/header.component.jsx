import React from 'react';
import { createStructuredSelector } from 'reselect';

// Redux
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

// Firebase 
import { auth } from '../../firebase/firebase.utils.js';

// Styles
import { LogoContainer, OptionsContainer, OptionLink, HeaderContainer } from './header.styles'

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
            <OptionLink as='div' onClick={ () => auth.signOut() }>
              SIGN OUT
            </OptionLink>
            :
            <OptionLink to='/signin'>
              SIGN IN
            </OptionLink>
        }
        <CartIcon />
      </OptionsContainer>
      {
        hidden ? null :
          <CartDropdown />
      }
    </HeaderContainer >
  );
}

const mapStateToProps = state => createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);