import React from 'react';
import '../Styles/Components/Product.scss';

function Product() {
  return (
    <div className='product'>
        <div className="product_info">
            <p>The lean startup</p>
            <p className='product_price'>
                <small>$</small>
                <strong>19.99</strong>
            </p>
            <div className="product_rating">
                <p>*</p>
            </div>
        </div>

        <img className='product_image' src='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' alt=''/>

        <button className='add_to_cart_button'>Add to Cart</button>
    </div>
  )
}

export default Product
