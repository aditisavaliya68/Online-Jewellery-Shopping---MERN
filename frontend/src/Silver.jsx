// eslint-disable-next-line no-unused-vars
import React from 'react';
import s1 from './image/s1.png';
import s2 from './image/s2.png';
import s3 from './image/s3.png';
import s4 from './image/s4.png';
import s5 from './image/s5.png';
import s6 from './image/s6.png';
import s7 from './image/s7.png';
import s8 from './image/s8.png';
import s9 from './image/s9.png';
import s10 from './image/s10.png';
import s11 from './image/s11.png';
import like from './image/like.png';
import axios from 'axios';
import './jewellery.css';
import { useNavigate } from 'react-router-dom';

const Silver = () => {

  const navigateTo = useNavigate();

  const handleAddToCart = async (itemName) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) {
        throw new Error('User not logged in');
      }

      const response = await axios.post('http://localhost:3000/addToCart', {
        itemName,
        jewellery: 'Silver',
        userId: user.user._id,
      });
      
      console.log(response.data); // Log response from the backend
      // You can update the UI accordingly if needed
      // Replace '/cart' with your desired path
      navigateTo('/cart')

    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  const handleAddToFavorite = async (itemName) => {
    
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) {
        throw new Error('User not logged in');
      }

      const response = await axios.post('http://localhost:3000/addToFavorite', {
        itemName,
        jewellery: 'Silver',
        userId: user.user._id,
        
      });
      
      console.log(response.data); // Log response from the backend
      // You can update the UI accordingly if needed
      navigateTo('/favorite')

    } catch (error) {
      console.error('Error adding item to favorite:', error);
    }
  };

  return (
    <div>
      <div className="product">
        <img src={s1} alt="s1" className="s1" height="400" width="1500" />
      </div>

      <div className="product-list">
        <li className="jewellery-item">
          <a className="silver" href="#">
            <img src={s2} alt="silver" className="s2" />
          </a>
          <h3>Silver Rings</h3>
          <div className="price">
            Rs. 12,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('silver')} />
          </div>
          <button onClick={() => handleAddToCart('silver')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="silver" href="#">
            <img src={s3} alt="silver" className="s3" />
          </a>
          <h3>Silver Nacklace</h3>
          <div className="price">
            Rs. 19,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('silver')} />
          </div>
          <button onClick={() => handleAddToCart('silver')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="silver" href="#">
            <img src={s4} alt="silver" className="s4" />
          </a>
          <h3>Silver Nacklace</h3>
          <div className="price">
            Rs. 19,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('silver')} />
          </div>
          <button onClick={() => handleAddToCart('silver')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="silver" href="#">
            <img src={s5} alt="silver" className="s5" />
          </a>
          <h3>Silver Nacklace</h3>
          <div className="price">
            Rs. 19,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('silver')} />
          </div>
          <button onClick={() => handleAddToCart('silver')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="silver" href="#">
            <img src={s6} alt="silver" className="s6" />
          </a>
          <h3>Silver Nacklace</h3>
          <div className="price">
            Rs. 19,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('silver')} />
          </div>
          <button onClick={() => handleAddToCart('silver')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="silver" href="#">
            <img src={s7} alt="silver" className="s7" />
          </a>
          <h3>Silver Nacklace</h3>
          <div className="price">
            Rs. 19,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('silver')} />
          </div>
          <button onClick={() => handleAddToCart('silver')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="silver" href="#">
            <img src={s8} alt="silver" className="s8" />
          </a>
          <h3>Silver Nacklace</h3>
          <div className="price">
            Rs. 19,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('silver')} />
          </div>
          <button onClick={() => handleAddToCart('silver')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="silver" href="#">
            <img src={s9} alt="silver" className="s9" />
          </a>
          <h3>Silver Nacklace</h3>
          <div className="price">
            Rs. 19,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('silver')} />
          </div>
          <button onClick={() => handleAddToCart('silver')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="silver" href="#">
            <img src={s10} alt="silver" className="s10" />
          </a>
          <h3>Silver Nacklace</h3>
          <div className="price">
            Rs. 19,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('silver')} />
          </div>
          <button onClick={() => handleAddToCart('silver')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="silver" href="#">
            <img src={s11} alt="silver" className="s11" />
          </a>
          <h3>Silver Nacklace</h3>
          <div className="price">
            Rs. 19,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('silver')} />
          </div>
          <button onClick={() => handleAddToCart('silver')} className="add-to-cart">Add to Cart</button>
        </li>
        {/* Repeat similar structure for other items */}

      </div>
    </div>
  );
};

export default Silver;
