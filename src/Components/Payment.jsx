import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Components/Payment.scss'
import { useStateValue } from '../Utils/StateProvider'
import CheckoutProduct from './Checkout/CheckoutProduct';
import CurrencyFormat from 'react-currency-format'
import { getCartTotal } from '../Utils/Reducer';
import Button from './Common/Button';
import axios from '../Utils/Axios';

function Payment() {

    const [{ cart, user }, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState('');
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState('');
    const navigate = useNavigate();

    /* Whenever the cart value changes it will run the function. */
    useEffect(() => {
        const getClientSecret = async () => {
            const resp = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getCartTotal(cart) * 100}/`
            });
            setClientSecret(resp.data.clientSecret);
        }
        getClientSecret();
    }, [cart])

    console.log('Secret', clientSecret)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: { 
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            /* paymentIntent = payment confirmation */
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            
            navigate('/orders', { replace: true });
        })
    }

    const handleChange = e => {
        // Listen for changes in the CardElement and
        // display any errors as the customer types their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

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
                        {/* Stripe */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment_priceContainer">
                                <CurrencyFormat 
                                    renderText={(value) => 
                                        (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                    decimalScale={2}
                                    value={getCartTotal(cart)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                {/* <Button disabled={ processing || disabled || succeeded } text={processing ? <p>Processing</p> : "Buy Now"} /> */}
                                <button disabled={ processing || disabled || succeeded } >
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {/* Errors */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
