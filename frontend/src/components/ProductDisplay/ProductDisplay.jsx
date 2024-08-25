import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [showAlert, setShowAlert] = useState(false);
  const isLoggedIn = !!localStorage.getItem('auth-token');

  const handleAddToCart = () => {
    if (isLoggedIn) {
      addToCart(product.id);
    } else {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
    }
  };

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
        Check out our new all-cotton flannel shirt! This shirt is made from 100% cotton, making it soft to the touch and gentle on the skin.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select</h1>
          <div className="productdisplay-right-sizes">
            
          </div>
        </div>
        
        <button 
          onClick={handleAddToCart} 
          className={!isLoggedIn ? 'disabled-button' : ''}
        >
          ADD TO CART
        </button>
        
        {showAlert && (
          <div className="alert">
            <p>Please login</p>
          </div>
        )}
        
        <p className='productdisplay-right-category'><span>Category :</span> Woman, T-Shirt, Crop Top</p>
        <p className='productdisplay-right-category'><span>Tags :</span> Modern, Latest</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
