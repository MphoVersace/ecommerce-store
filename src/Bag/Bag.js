import React from "react";
import { data } from "../constants";

const Bag = ({ cartItems }) => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return (
        <div className="cart">
            <h2>Bag</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            {item.image}
                        </li>,
                        <li key={item.id}>
                            {item.image}
                        </li>,
                        <li key={item.id}>
                            {item.image}
                        </li>,
                        <li key={item.id}>
                            {item.image}
                        </li>
                    ))}
                </ul>
            )}
            <p>Total: ${total.toFixed(2)}</p>
        </div>
    );
};

