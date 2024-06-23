import React from "react";
import { myBag } from "./Bag";
import Bag from "./Bag";
import './bagdetails.css'

let setMyBag = () => { };

export default function BagDetails() {
    const [cartItems, setCartItems] = React.useState(myBag);
    setMyBag = setCartItems;
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }} >
            <div className='bag-items-container'>
                <div>
                    <h2>Check Your Bag Items</h2>
                    <div>
                        <ul className="bag-items-list">
                            {cartItems.map((product) => (
                                <li key={product.id} className="bag-item">
                                    <div className="product-image-container">
                                        <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                                    </div>
                                    <div className="product-details">
                                        <h3>{product.title}</h3>
                                        {product.color && <p>Color: {product.color}</p>}
                                        {product.description && <p>{product.description}</p>}
                                        {product.rating && (
                                            <div className="product-rating">
                                                {/* Add your rating component or display logic here */}
                                                <span>Rating: {product.rating.average} stars</span>
                                            </div>
                                        )}
                                        <div className="quantity-price">
                                            <p>Quantity: {product.quantity}</p>
                                            <p>Price: ${product.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <hr className='divider' />
            <div>
                <Bag />
            </div>
        </div>


    )
}