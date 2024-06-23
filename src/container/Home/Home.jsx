import React from 'react';
import { images, data } from '../../constants';
import { ProductItem } from '../../components';
import SideBag from '../../Bag/SideBag';
import Bag from '../../Bag/Bag';
import './Home.css'

const Home = () => (
  <div style={{ display: 'flex' }}>
    <div className="product-container" style={{flex: 1}}>
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
    <hr className='divider'/>
    <div className="sidebag-container" >
    <SideBag style={{ width: '200px', marginLeft: '20px' , position: 'fixed', right: 0, top:0}}/>
    </div>
  </div>
);

export default Home;

