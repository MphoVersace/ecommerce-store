import React from 'react';

const OrderSummary = ({ itemsTotal, shippingCost, estimatedGST, giftCardBalance, calculateTotal }) => {
    return (
        <div className="order-summary">
            <h3>Order Summary</h3>
            <p>Items: ${itemsTotal.toFixed(2)}</p>
            <p>Shipping: ${shippingCost.toFixed(2)}</p>
            <p>Estimated GST: ${estimatedGST.toFixed(2)}</p>
            <p>Gift Card: -${giftCardBalance.toFixed(2)}</p>
            <h4>Order Total : ${calculateTotal()}</h4>
            <button type="button" onClick={() => alert('Order Placed!')}>Place Your Order</button>
            
        </div>
        
    );
   
};

export default OrderSummary;
