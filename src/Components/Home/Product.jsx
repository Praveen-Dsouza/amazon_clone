import React from 'react';
import '../../Styles/Components/Home/Product.scss';
import StarIcon from '@material-ui/icons/Star';
import Button from '../Common/Button';
import { useStateValue } from '../../Utils/StateProvider';

function Product({ id, title, image, price, rating }) {

    const [{ cart }, dispatch] = useStateValue();

    const addToCart = () => {
        // dispatch the item in the data layer
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id,
                title,
                image,
                price,
                rating
            },
        });
    }

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
                        <p><StarIcon className='ratingIcon' /></p>
                    ))}
                </div>
            </div>

            <img className='product_image' src={image} alt=''/>

            <Button class='cart_button' handleClick={addToCart} text='Add to Cart' />
        </div>
    )
}

export default Product
