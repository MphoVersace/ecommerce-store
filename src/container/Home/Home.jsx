import React, { useState } from "react";
import { data } from "../../constants";
import { ProductItem } from "../../components";
import Sidebar from "../../components/MenuSidebar";
import Bag from '../../Bag/Bag';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = data.product.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.price.toString().includes(searchQuery)
  );

  return (
    <>
      <Sidebar />
      <div className="top-bar-container">
        <div className="top-bar">
          <div className="input">
            <div className="label">Search Item</div>
            <div className="input-field">
              <input
                type="text"
                placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
                className="placeholder"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex' }}>
    <div className="product-container">
          {filteredProductss.map((product, index) => (
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
    </>
  );
};

export default Home;
