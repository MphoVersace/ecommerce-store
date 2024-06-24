import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { data } from '../../constants';

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = data.product[productId];

  return (
    <div className="product-detail">
      <button onClick={() => navigate('/')}>Back</button>
      <div className="product-detail__image-container">
        <img src={product.image} alt={product.title} className="product-detail__image" />
      </div>
      <div className="product-detail__info">
        <h2>{product.title}</h2>
        <p>{product.tags}</p>
        <p>{product.price}</p>
        <p>{product.shortDescription}</p>
        <p>{product.productDescription}</p>
      </div>
    </div>
  );
};

export default ProductDetail;