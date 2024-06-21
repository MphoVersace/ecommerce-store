import React from 'react';
import './ProductItem.css';

const ProductItem = ({ title, price, tags, image }) => (
  <div className="product-item">
  <div className="product-item__image">
    <img src={image} alt={title} />
    <div className="product-item__details">
      <h3 className="product-item__title">{title}</h3>
      <p className="product-item__tags">{tags}</p>
      <p className="product-item__price">{price}</p>
    </div>
  </div>
</div>
);

export default ProductItem;