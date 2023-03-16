import React from 'react';
import '../../Styles/Components/Checkout/Subtotal.scss';
import CurrencyFormat from 'react-currency-format'
import Button from '../Common/Button';
import InputField from '../Common/InputField';
import { useStateValue } from '../../Utils/StateProvider';
import { getCartTotal } from '../../Utils/Reducer';

function Subtotal() {

  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
      <CurrencyFormat 
        renderText={(value) => 
          (
          <>
                <p>Subtotal ({cart.length} items): <strong>{value}</strong></p>
                <small className='subtotal_gift'>
                    <InputField type='checkbox' class='checkout_input' /> This order contains a gift
                </small>
            </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <Button class='full_widthButton' text='Proceed to Checkout' />
    </div>
  )
}

export default Subtotal
