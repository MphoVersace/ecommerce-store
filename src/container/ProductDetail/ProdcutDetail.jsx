import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { data } from '../../constants';
import StarIcon from '../../assets/StarIcon';
import './ProductDetail.css'
import SideBag from '../../Bag/SideBag';
import Sidebar from '../../components/MenuSidebar';

export default function ProductDetail() {
  const { productId } = useParams();
  console.log(productId)
  const navigate = useNavigate();
  const product = data.products[productId];

  return (
    <>
    <button onClick={() => navigate('/')} style={{display:'flex'}}>Back</button>
    <div className="product-detail" style={{marginRight:'0rem'}} >
      <Sidebar/>
      <div style={{display:'flex', justifyContent:'space-between'}}>
      <div >
          
            <div style={{display:'flex'}}>
                  <div className="product-detail__image-container">
                    <img style={{width:'250px', height:'290px'}} src={product.image} alt={product.title} className="product-detail__image" />
                  </div>
                  <div className="product-detail__info">
                    <h2>{product.title}</h2>
                    <p>{product.tags}</p>
                    <div>
                      <StarIcon />
                    </div>
                    <p>{product.price}</p>
                    <p>{product.shortDescription}</p>
                  </div>
                
            <div/>    
                
          </div>
          <hr style={{height:'2px', backgroundColor:'grey', marginBottom:"3rem", margin:'3rem'}}/>
                  <div>
                  <p>{product.productDescription}</p>
                  </div>
      </div>
      <hr style={{width:'1rem', backgroundColor:'grey', marginLeft:'1rem', marginRight:'1rem'}}/>
      <div style={{width:'150rem', margin:'0', marginRight:'0'}}>
        <SideBag/>
      </div>
      <div>
      
      </div>
      </div>
    </div>  
      </>
  
  );
};

// export default ProductDetail;