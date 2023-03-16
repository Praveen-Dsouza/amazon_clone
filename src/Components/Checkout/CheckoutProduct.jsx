import React from 'react';
import '../../Styles/Components/Checkout/CheckoutProduct.scss';
import StarIcon from '@material-ui/icons/Star';
import Button from '../Common/Button';
import { useStateValue } from '../../Utils/StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {

  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    // remove item from cart
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id
    })
  }

  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct_image' src={image} alt=''/>
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
            {Array(rating).fill().map((_, i) => (
                <p><StarIcon className='checkoutProduct_ratingIcon' /></p>
            ))}
        </div>
        <Button text='Remove from Cart' handleClick={removeFromCart} />
      </div>
    </div>
  )
}

export default CheckoutProduct
