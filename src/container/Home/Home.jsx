import React, { useState } from "react";
import { data } from "../../constants";
import { ProductItem } from "../../components";
import Sidebar from "../../components/MenuSidebar";

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
      <div className="product-container">
        {filteredProducts.map((product, index) => (
          <ProductItem
            key={product.title + index}
            id={index}
            title={product.title}
            price={product.price}
            tags={product.tags}
            image={product.image}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
