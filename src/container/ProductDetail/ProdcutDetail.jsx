import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { data } from '../../constants';
import StarIcon from '../../assets/StarIcon';
import './ProductDetail.css'
import SideBag  from '../../Bag/SideBag';
import Sidebar from '../../components/MenuSidebar';
import { addToSideBag } from '../../Bag/SideBag';
import { addToBag } from '../../Bag/Bag';


const addToCart = (productId) => {
  addToSideBag(productId);
  addToBag(productId);
};
export default function ProductDetail() {
  const { productId } = useParams();
  console.log(productId)
  const navigate = useNavigate();
  const product = data.products[productId];

  return (
    <>
    
    <div className="product-detail" style={{marginRight:'0rem'}} >
      <Sidebar/>
      <button onClick={() => navigate('/')} style={{border:'none', fontSize: '1.5rem',background:'none', marginTop:'2rem'}}> &lt; Back</button>
      <div style={{display:'flex', justifyContent:'space-between'}}>
      <div >
          
            <div style={{display:'flex'}}>
                  <div className="product-detail__image-container">
                    <img style={{width:'150px', height:'250px'}} src={product.image} alt={product.title} className="product-detail__image" />
                  </div>
                  <div className="product-detail__info">
                    <h2>{product.title}</h2>
                    <p>{product.tags}</p>
                    <div>
                      <StarIcon />
                    </div>
                    <p>{product.price}</p>
                    <p>{product.shortDescription}</p>
                    <button className="product-item__button" onClick={() => addToCart(productId)} style={{backgroundColor: 'black', height:'2.5rem', color:'white',borderRadius: '11px 11px', width:'10rem', marginLeft:'30rem'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" >
            <path d="M21.3122 7.94062C21.173 7.80063 21.0075 7.68961 20.8252 7.61398C20.6429 7.53835 20.4474 7.49961 20.25 7.5H17.25V6.75C17.25 5.35761 16.6969 4.02226 15.7123 3.03769C14.7277 2.05312 13.3924 1.5 12 1.5C10.6076 1.5 9.27226 2.05312 8.28769 3.03769C7.30312 4.02226 6.75 5.35761 6.75 6.75V7.5H3.75C3.35218 7.5 2.97064 7.65804 2.68934 7.93934C2.40804 8.22064 2.25 8.60218 2.25 9V19.125C2.25 20.9531 3.79688 22.5 5.625 22.5H18.375C19.2593 22.5003 20.1086 22.1545 20.7413 21.5367C21.0596 21.233 21.3132 20.8679 21.4865 20.4634C21.6599 20.059 21.7495 19.6236 21.75 19.1836V9C21.7506 8.80326 21.7122 8.60834 21.6371 8.42652C21.5619 8.24469 21.4515 8.07955 21.3122 7.94062ZM15 15.75H12.75V18C12.75 18.1989 12.671 18.3897 12.5303 18.5303C12.3897 18.671 12.1989 18.75 12 18.75C11.8011 18.75 11.6103 18.671 11.4697 18.5303C11.329 18.3897 11.25 18.1989 11.25 18V15.75H9C8.80109 15.75 8.61032 15.671 8.46967 15.5303C8.32902 15.3897 8.25 15.1989 8.25 15C8.25 14.8011 8.32902 14.6103 8.46967 14.4697C8.61032 14.329 8.80109 14.25 9 14.25H11.25V12C11.25 11.8011 11.329 11.6103 11.4697 11.4697C11.6103 11.329 11.8011 11.25 12 11.25C12.1989 11.25 12.3897 11.329 12.5303 11.4697C12.671 11.6103 12.75 11.8011 12.75 12V14.25H15C15.1989 14.25 15.3897 14.329 15.5303 14.4697C15.671 14.6103 15.75 14.8011 15.75 15C15.75 15.1989 15.671 15.3897 15.5303 15.5303C15.3897 15.671 15.1989 15.75 15 15.75ZM15.75 7.5H8.25V6.75C8.25 5.75544 8.64509 4.80161 9.34835 4.09835C10.0516 3.39509 11.0054 3 12 3C12.9946 3 13.9484 3.39509 14.6517 4.09835C15.3549 4.80161 15.75 5.75544 15.75 6.75V7.5Z" fill="#ffffff"/>
            </svg> <span style={{fontSize: '1.2rem'}}>Add to Bag</span>

          </button>
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