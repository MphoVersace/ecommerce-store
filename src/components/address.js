import React from 'react';
import { Link } from 'react-router-dom';
import lockIcon from "../assets/cardlock.svg";

function AddressForm() {
  return (
    <div className="address-container">
      <div className="form-container">
        <form>
          <div className="form-group">
            <div className="form-field">
              <label htmlFor="shippingName">Shipping Name</label>
              <input type="text" id="shippingName" placeholder="John Maker" />
            </div>
          </div>

          <div className="form-group">
            <div className="form-field">
              <label htmlFor="streetName">Street Name</label>
              <input type="text" id="streetName" placeholder="123 Plae Grond Street" />
            </div>
          </div>

          <div className="form-group">
            <div className="form-field">
              <label htmlFor="city">City</label>
              <input type="text" id="city" placeholder="Vermont" />
            </div>
          </div>

          <div className="form-group">
            <div className="form-field">
              <label htmlFor="state">State/Province</label>
              <input type="text" id="state" placeholder="California" />
            </div>
          </div>

          <div className="form-group">
            <div className="form-field">
              <label htmlFor="country">Country</label>
              <input type="text" id="country" placeholder="United States" />
            </div>
          </div>

          <div className="form-group checkbox">
            <input type="checkbox" id="defaultAddress" name="defaultAddress" />
            <label htmlFor="defaultAddress">Save this as your default shipping address</label>
          </div>

          <div className="form-group submit-button">
            <Link to="/AddPayment">
              <button type="button" className="btn">Add Payment Method</button>
            </Link>
          </div>

          <div className="form-footer">
            <p className="back-link">Back</p>
            <p className="secure-connection">
              <img src={lockIcon} alt="Secure Connection" />Secure Connection
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddressForm;
