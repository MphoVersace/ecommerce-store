import React from 'react';

const ShippingAddress = ({ shippingDetails, isEditing, handleInputChange, saveDetails, toggleEdit }) => {
    return (
        <div className="section" id="shipping-address">
            <h3>Shipping Address</h3>
            {!isEditing ? (
                <div>
                    <p>{shippingDetails.fullName}</p>
                    <p>{shippingDetails.addressLine1}</p>
                    <p>{shippingDetails.addressLine2}</p>
                    <p>{shippingDetails.city}, {shippingDetails.state}, {shippingDetails.zipCode}</p>
                    <p>{shippingDetails.country}</p>
                  
                </div>
            ) : (
                <form>
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={shippingDetails.fullName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="addressLine1">Address Line 1</label>
                        <input
                            type="text"
                            id="addressLine1"
                            name="addressLine1"
                            value={shippingDetails.addressLine1}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="addressLine2">Address Line 2</label>
                        <input
                            type="text"
                            id="addressLine2"
                            name="addressLine2"
                            value={shippingDetails.addressLine2}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={shippingDetails.city}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            value={shippingDetails.state}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="zipCode">Zip Code</label>
                        <input
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            value={shippingDetails.zipCode}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <select
                            id="country"
                            name="country"
                            value={shippingDetails.country}
                            onChange={handleInputChange}
                        >
                            <option value="usa">United States</option>
                            <option value="canada">Canada</option>
                            <option value="uk">United Kingdom</option>
                            {/* Add more countries as needed */}
                        </select>
                    </div>
                    <button type="button" onClick={saveDetails}>Save</button>
                </form>
            )}
        </div>
    );
};

export default ShippingAddress;
