import React from 'react';
import ImageCard from '../assets/Name=card.png';
import ImageGift from '../assets/Name=gift.png';

const PaymentMethod = ({ paymentDetails, isEditingPayment, handleInputChange, savePaymentDetails, togglePaymentEdit }) => {
    return (
        <div className="section" id="payment-method">
            <h3>Payment Method</h3>
            {!isEditingPayment ? (
                <div>
                    <p><img src={ImageCard} alt="Mastercard    " />&nbsp;Mastercard Number: {paymentDetails.mastercardNumber}</p>
                    <p><img src={ImageGift} alt="Mastercard   " />&nbsp;Gift Card Balance: {paymentDetails.giftCardBalance}</p>
                    <p><img src={ImageGift} alt="Mastercard   " /> &nbsp;Billing Address: {paymentDetails.billingAddress}</p>
                   
                </div>
            ) : (
                <form>
                    <div className="form-group">
                        <label htmlFor="mastercardNumber">Mastercard Number</label>
                        <input
                            type="text"
                            id="mastercardNumber"
                            name="mastercardNumber"
                            value={paymentDetails.mastercardNumber}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="giftCardBalance">Gift Card Balance</label>
                        <input
                            type="text"
                            id="giftCardBalance"
                            name="giftCardBalance"
                            value={paymentDetails.giftCardBalance}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="billingAddress">Billing Address</label>
                        <input
                            type="text"
                            id="billingAddress"
                            name="billingAddress"
                            value={paymentDetails.billingAddress}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="button" onClick={savePaymentDetails}>Save</button>
                </form>
            )}
        </div>
    );
};

export default PaymentMethod;
