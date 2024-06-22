import React from 'react';
import { images, data } from '../../constants';
import { ProductItem } from '../../components';
import Bag from '../../Bag/Bag';

const Home = () => (
  <div style={{ display: 'flex' }}>
    <div className="product-container">
      {data.products.map((product, index) => (
        <ProductItem
          key={product.title + index}
          productId={index}
          title={product.title}
          price={product.price}
          tags={product.tags}
          image={product.image}
        />
      ))}
    </div>
    <Bag />
  </div>
);

export default Home;

