import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_36SUcq5ImUoSG2DV2iIFgyan';

  const onToken = token => {
    console.log(token);
    alert('Payment successful');
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='eCommerce App Ltd.'
      billingAddress
      shippingaddress
      image='https://svgshare.com/i/CUz.svg'
      amount={ priceForStripe }
      panelLabel='Pay Now'
      token={ onToken }
      stripeKey={ publishableKey }
    />
  );
}

export default StripeButton;