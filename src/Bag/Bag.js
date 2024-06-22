import React from "react";
import { data } from "../constants";

export let myBag = [];
let setMyBag = () => { };

export default function Bag() {
    const [cartItems, setCartItems] = React.useState(myBag);
    myBag = cartItems;
    setMyBag = setCartItems;
    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    return (
        <div className="cart">
            <h2>Bag</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((product) => (
                        <li key={product.id}>
                            <img src={product.image} style={{ maxWidth: '60px' }} alt={product.title} />
                        </li>
                    ))}
                </ul>
            )}
            <p>Total: ${total.toFixed(2)}</p>
            <a href="/bag-details">View More</a>
        </div>
    );
};



export function addToBag(productId) {
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
