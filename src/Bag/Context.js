import React, { createContext, useState, useContext } from 'react';

// Create the Cart Context
const CartContext = createContext({
    cartItems: [],
    setCartItems: () => { },
});

// Create the CartProvider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Function to add items to the cart (replace with your cart logic)
    const addToCart = (productId) => {
        // Logic to find the product in your data
        const product = /* find product based on productId */;

        // Check if the item is already in the cart
        const existingItem = cartItems.find((item) => item.id === productId);

        if (existingItem) {
            // Update quantity if the item is already present
            existingItem.quantity++;
        } else {
            // Add a new item to the cart with quantity 1
            const newItem = { ...product, quantity: 1, id: productId };
            newItem.price = parseFloat(newItem.price.replace('$', ''));
            setCartItems([...cartItems, newItem]);
        }
    };

    // Function to remove items from the cart (replace with your logic)
    const removeFromCart = (productId) => {
        const updatedCart = cartItems.filter((item) => item.id !== productId);
        setCartItems(updatedCart);
    };

    // Function to update item quantity (optional, replace with your logic)
    const updateQuantity = (productId, newQuantity) => {
        const updatedCart = cartItems.map((item) => {
            if (item.id === productId) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setCartItems(updatedCart);
    };

    // Provide context values to child components
    return (
        <CartContext.Provider
            value={{ cartItems, setCartItems, addToCart, removeFromCart, updateQuantity }}
        >
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to access context values from anywhere in your application
export const useCart = () => useContext(CartContext);

export default CartProvider;
