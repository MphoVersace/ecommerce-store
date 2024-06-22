import React from "react";
import { myBag } from "./Bag";
import Bag from "./Bag";

let setMyBag = () => { };

export default function BagDetails() {
    const [cartItems, setCartItems] = React.useState(myBag);
    setMyBag = setCartItems;
    return (
        <div>
            <h2>Check Your Bag Items</h2>
            {cartItems.map((product) => (
                <div> {product.title} </div>
            ))}
            <Bag />
        </div>


    )
}