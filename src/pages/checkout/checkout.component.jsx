import React from 'react';
import './checkout.styles.scss';
import { createStructuredSelector } from 'reselect';

// Components 
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';

// Redux
import { connect } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors.js';

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    { cartItems.map(cartItem =>
      <CheckoutItem cartItem={ cartItem } key={ cartItem.id } />
    )
    }
    <div className='total'>
      <span>TOTAL: ${ total }</span>
    </div>
    <div className='test-warning'>
      **Please use the following test credit card for transactions**
      <br />
      4242 4242 4242 4242 - Exp: 01/21 - CV Code: 123
    </div>
    <StripeButton price={ total } />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);