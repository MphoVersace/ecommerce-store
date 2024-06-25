import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ShippingAddress from './Shipping';
import PaymentMethod from './Cardpayment';
import OrderSummary from './OrderSummary';



const Checkout = () => {
    const location = useLocation();
    const { cartItems } = location.state || { cartItems: [] };

    const initialShippingDetails = {
        fullName: 'John Maker',
        addressLine1: '123 Plae Ground Street',
        addressLine2: 'Vermont',
        city: 'California',
        state: 'CA',
        zipCode: '90001',
        country: 'United States of America',
    };

    const initialPaymentDetails = {
        mastercardNumber: 'Master Card ending in 1252',
        giftCardBalance: '$53.21 gift card balance',
        billingAddress: 'same as shipping address',
    };

    const [shippingDetails, setShippingDetails] = useState(initialShippingDetails);
    const [paymentDetails, setPaymentDetails] = useState(initialPaymentDetails);

    const calculateTotal = () => {
        const itemsTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const shippingCost = 10.00; // Example shipping cost
        const estimatedGST = (itemsTotal + shippingCost) * 0.05; // Example GST calculation at 5%
        const giftCardBalance = parseFloat(paymentDetails.giftCardBalance.replace('$', '')) || 0;
        const total = itemsTotal + shippingCost + estimatedGST - giftCardBalance;
        return total.toFixed(2);
    };

    return (
        <div className="main-container">
            <div className="container">
                <h2>Checkout</h2>

                {/* Shipping Address Section */}
                <div className="section">
                    <h3>Shipping Address</h3>
                    <div className="section-content">
                        <ShippingAddress
                            shippingDetails={shippingDetails}
                            setShippingDetails={setShippingDetails}
                            readOnly={false}
                        />
                    </div>
                    <div className="section-actions">
                        <Link to="/address">
                            <button className="change-button">Change</button>
                        </Link>
                    </div>
                </div>

                {/* Payment Method Section */}
                <div className="section payment-section">
                    <h3>Payment Method</h3>
                    <div className="section-content">
                        <PaymentMethod
                            paymentDetails={paymentDetails}
                            setPaymentDetails={setPaymentDetails}
                            readOnly={false} 
                        />
                    </div>
                    <div className="section-actions">
                        <Link to="/payment">
                            <button className="change-button">Change</button>
                        </Link>
                    </div>
                </div>

                {/* Review Your Bag Section */}
                <div className="section" id="review-your-bag">
                    <h3>Review Your Bag</h3>
                    <div className="section-content">
                        <div id="bagSummary">
                            {cartItems.map(item => (
                                <div key={item.id} className="bag-item">
                                    <div className="product-image-container">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div className="product-details">
                                        <h4>{item.title}</h4>
                                        <p>Price: ${item.price.toFixed(2)}</p>
                                        <p>Quantity: {item.quantity}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Back Button */}
                <div className="back-btn">
                    <Link to="/bag-details">
                        <button className="btn4">Back</button>
                    </Link>
                </div>
            </div>

            {/* Order Summary */}
            <div className="order-summary">
                <OrderSummary
                    itemsTotal={cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
                    shippingCost={10.00}
                    estimatedGST={(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) + 10.00) * 0.05}
                    giftCardBalance={parseFloat(paymentDetails.giftCardBalance.replace('$', '')) || 0}
                    calculateTotal={calculateTotal}
                />
            </div>
        </div>
    );
};

export default Checkout;
