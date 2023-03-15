import React from 'react';
import '../Styles/Components/Subtotal.scss';
import CurrencyFormat from 'react-currency-format'
import Button from './Common/Button';
import InputField from './Common/InputField';

function Subtotal() {
  return (
    <div className='subtotal'>
      <CurrencyFormat 
        renderText={(value)=> (
            <>
                <p>Subtotal ({value} items): <strong>{value}</strong></p>
                <small className='subtotal_gift'>
                    <InputField type='checkbox' class='checkout_input' /> This order contains a gift
                </small>
            </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <Button class='checkout_button' text='Proceed to Checkout' />
    </div>
  )
}

export default Subtotal
