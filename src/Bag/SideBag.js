import React from "react";
import { data } from "../constants";
import './sidebag.css';

export let myBag = [];
let setMyBag = () => { };

export default function SideBag() {
    const [cartItems, setCartItems] = React.useState(myBag);
    myBag = cartItems;
    setMyBag = setCartItems;
    return (
        <div className="cart" style={{ backgroundColor: '#EAEAEA' }}>
            <h1 className="bag-title">Bag</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className="cart-list">
                    {cartItems.map((product) => (
                        <li key={product.id} className="cart-item">
                            <img src={product.image} style={{ maxWidth: '60px' }} alt={product.title} />
                        </li>
                    ))}
                </ul>
            )}
            {/* <p>Total: ${total.toFixed(2)}</p> */}
            <a href="/bag-details">View More</a>
        </div>
    );
};

export function addToSideBag(productId) {
    const product = data.products[productId];
    const index = myBag.findIndex((item) => item.id === productId);
    if (index >= 0) {
        myBag[index].quantity++;
    } else {
        const newProduct = { ...product, quantity: 1, id: productId };
        newProduct.price = parseFloat(newProduct.price.replace('$', ''));
        myBag.push(newProduct);
    }
    setMyBag([...myBag]);
}
