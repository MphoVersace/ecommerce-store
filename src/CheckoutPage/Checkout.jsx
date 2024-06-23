// src/components/Checkout.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import Payment from '../components/payment';
import '../CheckoutPage/Checkout';
import ImageCard from '../assets/Name=card.png';
import ImageGift from '../assets/Name=gift.png';



const Checkout = () => {
  const initialShippingDetails = {
      
      fullName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zipCode: '',
      country: 'usa',
  };

  const initialPaymentDetails = {
      mastercardNumber: '',
      giftCardBalance: '',
      billingAddress: '',
  };

  const [shippingDetails, setShippingDetails] = useState({
      fullName: 'John Maker',
      addressLine1: '123 Plae Ground Street',
      addressLine2: 'Vermont',
      city: 'California',
      state: 'CA',
      zipCode: '90001',
      country: 'United States of America',
  });

  const [paymentDetails, setPaymentDetails] = useState({
      mastercardNumber: 'Master Card ending in 1252',
      giftCardBalance: '$53.21 gift card balance',
      billingAddress: 'same as shipping address',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isEditingPayment, setIsEditingPayment] = useState(false);

  const handleInputChange = (event, section) => {
      const { name, value } = event.target;
      if (section === 'shipping') {
          setShippingDetails({ ...shippingDetails, [name]: value });
      } else if (section === 'payment') {
          setPaymentDetails({ ...paymentDetails, [name]: value });
      }
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission
      console.log('Shipping Details:', shippingDetails);
      console.log('Payment Details:', paymentDetails);
  };

  const toggleEdit = () => {
      setIsEditing(true);
      setShippingDetails(initialShippingDetails);
  };

  const togglePaymentEdit = () => {
      setIsEditingPayment(true);
      setPaymentDetails(initialPaymentDetails);
  };

  const saveDetails = () => {
      setIsEditing(false);
  };

  const savePaymentDetails = () => {
      setIsEditingPayment(false);
  };

  const calculateTotal = () => {
      const itemsTotal = 88.47; // Example total of items
      const shippingCost = 10.00; // Example shipping cost
      const estimatedGST = (itemsTotal + shippingCost) * 0.05; // Example GST calculation at 5%
      const giftCardBalance = parseFloat(paymentDetails.giftCardBalance.replace('$', ''));
      const total = itemsTotal + shippingCost + estimatedGST - giftCardBalance;
      return total.toFixed(2);
  };

  return (
      <div className="container">
          <h2>Checkout</h2>

          <form onSubmit={handleSubmit}>
              <div className="section" id="shipping-address">
                  <h3>Shipping Address</h3>
                  {!isEditing ? (
                      <div>
                          <p>{shippingDetails.fullName}</p>
                          <p>{shippingDetails.addressLine1}</p>
                          <p>{shippingDetails.addressLine2}</p>
                          <p>{shippingDetails.city}, {shippingDetails.state}, {shippingDetails.zipCode}</p>
                          <p>{shippingDetails.country}</p>
                          <button type="button" onClick={toggleEdit}>Change</button>
                      </div>
                  ) : (
                      <div>
                          <div className="form-group">
                              <label htmlFor="fullName">Full Name</label>
                              <input
                                  type="text"
                                  id="fullName"
                                  name="fullName"
                                  value={shippingDetails.fullName}
                                  onChange={(e) => handleInputChange(e, 'shipping')}
                              />
                          </div>
                          <div className="form-group">
                              <label htmlFor="addressLine1">Address Line 1</label>
                              <input
                                  type="text"
                                  id="addressLine1"
                                  name="addressLine1"
                                  value={shippingDetails.addressLine1}
                                  onChange={(e) => handleInputChange(e, 'shipping')}
                              />
                          </div>
                          <div className="form-group">
                              <label htmlFor="addressLine2">Address Line 2</label>
                              <input
                                  type="text"
                                  id="addressLine2"
                                  name="addressLine2"
                                  value={shippingDetails.addressLine2}
                                  onChange={(e) => handleInputChange(e, 'shipping')}
                              />
                          </div>
                          <div className="form-group">
                              <label htmlFor="city">City</label>
                              <input
                                  type="text"
                                  id="city"
                                  name="city"
                                  value={shippingDetails.city}
                                  onChange={(e) => handleInputChange(e, 'shipping')}
                              />
                          </div>
                          <div className="form-group">
                              <label htmlFor="state">State</label>
                              <input
                                  type="text"
                                  id="state"
                                  name="state"
                                  value={shippingDetails.state}
                                  onChange={(e) => handleInputChange(e, 'shipping')}
                              />
                          </div>
                          <div className="form-group">
                              <label htmlFor="zipCode">Zip Code</label>
                              <input
                                  type="text"
                                  id="zipCode"
                                  name="zipCode"
                                  value={shippingDetails.zipCode}
                                  onChange={(e) => handleInputChange(e, 'shipping')}
                              />
                          </div>
                          <div className="form-group">
                              <label htmlFor="country">Country</label>
                              <select
                                  id="country"
                                  name="country"
                                  value={shippingDetails.country}
                                  onChange={(e) => handleInputChange(e, 'shipping')}
                              >
                                  <option value="usa">United States</option>
                                  <option value="canada">Canada</option>
                                  <option value="uk">United Kingdom</option>
                                  {/* Add more countries as needed */}
                              </select>
                          </div>
                          <button type="button" onClick={saveDetails}>Save</button>
                      </div>
                  )}
              </div>

              <PaymentMethod
                  paymentDetails={paymentDetails}
                  isEditingPayment={isEditingPayment}
                  handleInputChange={handleInputChange}
                  togglePaymentEdit={togglePaymentEdit}
                  savePaymentDetails={savePaymentDetails}
              />

              <div className="section" id="review-your-bag">
                  <h3>Review Your Bag</h3>
                  <div className="form-group">
                      <label htmlFor="bagSummary">Bag Summary</label>
                      <textarea
                          id="bagSummary"
                          name="bagSummary"
                          rows="5"
                          readOnly
                          value="Item 1: $29.99&#10;Item 2: $15.49&#10;Item 3: $42.99&#10;Total: $88.47"
                      ></textarea>
                  </div>
              </div>
          </form>

          <OrderSummary
              itemsTotal={88.47}
              shippingCost={10.00}
              estimatedGST={(88.47 + 10.00) * 0.05}
              giftCardBalance={parseFloat(paymentDetails.giftCardBalance.replace('$', ''))}
              calculateTotal={calculateTotal}
          />
      </div>
  );
};

const PaymentMethod = ({ paymentDetails, isEditingPayment, handleInputChange, togglePaymentEdit, savePaymentDetails }) => {
  return (
      <div className="section" id="payment-method">
          <h3>Payment Method</h3>
          {!isEditingPayment ? (
              <div>
                  
                  <p><img src={ImageCard} alt="Mastercard    " />&nbsp;Mastercard Number: {paymentDetails.mastercardNumber}</p>
                  <p><img src={ImageGift} alt="Mastercard   " />&nbsp;Gift Card Balance: {paymentDetails.giftCardBalance}</p>
                  <p><img src={ImageGift} alt="Mastercard   " /> &nbsp;Billing Address: {paymentDetails.billingAddress}</p>
                  <button type="button" onClick={togglePaymentEdit}>Change</button>
              </div>
          ) : (
              <div>
                  <div className="form-group">
                      <label htmlFor="mastercardNumber">Mastercard Number</label>
                      <input
                          type="text"
                          id="mastercardNumber"
                          name="mastercardNumber"
                          value={paymentDetails.mastercardNumber}
                          onChange={(e) => handleInputChange(e, 'payment')}
                      />
                  </div>
                  <div className="form-group">
                      <label htmlFor="giftCardBalance">Gift Card Balance</label>
                      <input
                          type="text"
                          id="giftCardBalance"
                          name="giftCardBalance"
                          value={paymentDetails.giftCardBalance}
                          onChange={(e) => handleInputChange(e, 'payment')}
                      />
                  </div>
                  <div className="form-group">
                      <label htmlFor="billingAddress">Billing Address</label>
                      <input
                          type="text"
                          id="billingAddress"
                          name="billingAddress"
                          value={paymentDetails.billingAddress}
                          onChange={(e) => handleInputChange(e, 'payment')}
                      />
                  </div>
                  <button type="button" onClick={savePaymentDetails}>Save</button>
              </div>
          )}
      </div>
  );
};

const OrderSummary = ({ itemsTotal, shippingCost, estimatedGST, giftCardBalance, calculateTotal }) => {
  return (
      <div className="order-summary">
          <h3>Order Summary</h3>
          <p>Items: ${itemsTotal.toFixed(2)}</p>
          <p>Shipping: ${shippingCost.toFixed(2)}</p>
          <p>Estimated GST: ${estimatedGST.toFixed(2)}</p>
          <p>Gift Card: -${giftCardBalance.toFixed(2)}</p>
          <h4>Total: ${calculateTotal()}</h4>
          <button type="button" onClick={() => alert('Order Placed!')}>Place Your Order</button>
      </div>
  );
};

export default Checkout;