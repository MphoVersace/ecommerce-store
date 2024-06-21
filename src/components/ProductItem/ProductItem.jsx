import React from 'react';
import { Link } from 'react-router-dom';
import './ProductItem.css';

const ProductItem = ({ id, title, price, tags, image }) => (
  <div className="product-item">
    <div className="product-item__image-container">
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} className="product-item__image" />
      </Link>
    </div>
    <div className="product-item__details">
      <h3 className="product-item__title">{title}</h3>
      <p className="product-item__tags">{tags}</p>
      <p className="product-item__price">{price}</p>
    </div>
  </div>
);

export default ProductItem;