import React from "react";
import { myBag } from "./Bag";
import Bag from "./Bag";
import './bagdetails.css'
// import { data } from "../constants";
import { addToBag } from "./Bag";
import { decreaseQuantity } from "./Bag";

let setMyBag = () => { };
const quantityUpdate = (productId) => {
    decreaseQuantity(productId);
    decreaseQuant(productId);
};

const quantityUpdateAdd = (productId) => {
    addToBag(productId);
    increaseQuant(productId);
};

export default function BagDetails() {
    const [cartItems, setCartItems] = React.useState(myBag);
    myBag.map((item) => ({ ...item, subtotal: item.quantity * item.price }))
    setMyBag = setCartItems;
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }} >
            <div className='bag-items-container' style={{ marginLeft: '5rem', width: '100%' }}>
                <div>
                    <h1>Check Your Bag Items</h1>
                    <div style={{ width: '100%' }}>
                        <ul className="bag-items-list" >
                            {cartItems.map((product) => (
                                <li key={product.id} className="bag-item">
                                    <div className="product-image-container">
                                        <img src={product.image} alt={product.title} style={{ width: '100%', height: '80%', objectFit: 'cover' }} />
                                    </div>
                                    <div className="product-details">
                                        <h1>{product.title}</h1>
                                        {product.tags && <h4 style={{ color: 'grey' }}> {product.tags}</h4>}
                                        {product.shortDescription && <p>{product.shortDescription}</p>}
                                        {product.rating && (
                                            <div className="product-rating">
                                                {/* Add your rating component or display logic here */}
                                                <span>Rating: {product.rating.average} stars</span>
                                            </div>
                                        )}
                                        <div className="quantity-price" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            {/* <p>Quantity: {product.quantity}</p> */}
                                            <p>Price: ${product.price.toFixed(2)}</p>
                                            <div className="quantity-controls" >
                                                <button onClick={() => quantityUpdate(product.id, cartItems)} style={{ color: 'red', fontSize: '1.5rem', border: 'none', backgroundColor: 'white', marginRight: '5px', }}>−</button>
                                                <input type="number" value={product.quantity} readOnly style={{ width: '30px', height: '25px', border: 'none', fontSize: '1.3rem', marginLeft: '5px' }} />
                                                <button onClick={() => quantityUpdateAdd(product.id)} style={{ color: 'green', fontSize: '1.5rem', border: 'none', backgroundColor: 'white' }}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <hr className='divider' />
            <div style={{ width: '20rem' }}>
                <Bag />
            </div>
        </div>
    )
}

function decreaseQuant(productId) {
    setMyBag((prevBag) => {
        const updatedBag = prevBag.map((item) => {
            if (item.id === productId && item.quantity > 0) {
                const newQuantity = Math.max(item.quantity - 1, 0);
                const newSubtotal = newQuantity * item.price;
                return { ...item, quantity: newQuantity, subtotal: newSubtotal };
            }
            return item;
        });
        return updatedBag.filter((item) => item.quantity > 0);
    });
}

function increaseQuant(productId) {
    setMyBag((prevBag) => {
        const updatedBag = prevBag.map((item) => {
            if (item.id === productId) {
                const newQuantity = Math.max(item.quantity + 1, 0);
                return { ...item, quantity: newQuantity, subtotal: newQuantity * item.price };
            }
            return item;
        });
        return updatedBag;
    });
}