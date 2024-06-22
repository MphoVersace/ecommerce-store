import React from 'react';
import './ProductItem.css';
import { addToBag } from '../../Bag/Bag';

const ProductItem = ({ productId, title, price, tags, image }) => (
  <div className="product-item">
    <div className="product-item__image-container">
      <img src={image} alt={title} className="product-item__image" />
    </div>
    <div className="product-item__details">
      <h3 className="product-item__title">{title}</h3>
      <p className="product-item__tags">{tags}</p>
      <p className="product-item__price">{price}</p>
      <button className="product-item__button" onClick={() => addToBag(productId)}>Add to cart</button>
    </div>
  </div>
);

export default ProductItem;