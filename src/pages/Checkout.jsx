import React, { useState } from 'react';
const Checkout = () => {
    const [shippingDetails, setShippingDetails] = useState({
        fullName: 'John Maker',
        addressLine1: '123 Plae Ground Street',
        addressLine2: 'Vermont',
        city: 'Califonia',
             
        country: 'United States of America',
    });

    const initialPaymentDetails = {
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    };


    export default Checkout;