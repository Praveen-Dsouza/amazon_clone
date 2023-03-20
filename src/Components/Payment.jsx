import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Components/Payment.scss'
import { useStateValue } from '../Utils/StateProvider'
import CheckoutProduct from './Checkout/CheckoutProduct';

function Payment() {

    const [{ cart, user }, dispatch] = useStateValue();

    return (
        <div className='payment'>
            <div className="payment_container">

                <h1>
                    Checkout (
                        <Link to='/checkout'>{cart?.length} items</Link>
                    )
                </h1>

                {/* Delivery address */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>123 ABC Lane</p>
                        <p>San Francisco, CA</p>
                    </div>
                </div>

                {/* Review Items */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment_items">
                        {cart.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment method */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
