import React from 'react';
import './ProductItem.css';

const ProductItem = ({ title, price, tags, image }) => (
  <div className="product-item">
    <div className="product-item__image-container">
      <img src={image} alt={title} className="product-item__image" />
    </div>
    <div className="product-item__details">
      <h3 className="product-item__title">{title}</h3>
      <p className="product-item__tags">{tags}</p>
      <p className="product-item__price">{price}</p>
    </div>
  </div>
);

export default ProductItem;