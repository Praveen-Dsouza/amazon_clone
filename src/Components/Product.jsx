import React from 'react';
import '../Styles/Components/Product.scss';
import StarIcon from '@material-ui/icons/Star';

function Product({ id, title, image, price, rating }) {

    return (
        <div className='product'>
            <div className="product_info">
                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_, i) => (
                        <p><StarIcon className='product_ratinIcon' /></p>
                    ))}
                </div>
            </div>

            <img className='product_image' src={image} alt=''/>

            <button className='add_to_cart_button'>Add to Cart</button>
        </div>
    )
}

export default Product
