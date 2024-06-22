import React from 'react';
import { images, data } from '../../constants';
import { ProductItem } from '../../components';

const Home = () => (
  <div className="product-container">
    {data.product.map((product, index) => (
      <ProductItem
        key={product.title + index}
        title={product.title}
        price={product.price}
        tags={product.tags}
        image={product.image}
      />
    ))}
  </div>
);

export default Home;

