import React from 'react';

const OrderSummary = ({ itemsTotal, shippingCost, estimatedGST, giftCardBalance, calculateTotal }) => {
    return (
        <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="summary-item">
                <div className="text-item">Items:</div>
                <div className="number-item">${itemsTotal.toFixed(2)}</div>
            </div>
            <div className="summary-item">
                <div className="text-item">Shipping:</div>
                <div className="number-item">${shippingCost.toFixed(2)}</div>
            </div>
            <div className="summary-item">
                <div className="text-item">Estimated GST:</div>
                <div className="number-item">${estimatedGST.toFixed(2)}</div>
            </div>
            <div className="summary-item">
                <div className="text-item">Gift Card:</div>
                <div className="number-item">-${giftCardBalance.toFixed(2)}</div>
            </div>
            <h4>Order Total : ${calculateTotal()}</h4>
            <button type="button" className="place-order-btn" onClick={() => alert('Order Placed!')}>Place Your Order</button>

        </div>
    );
};
export default OrderSummary;
