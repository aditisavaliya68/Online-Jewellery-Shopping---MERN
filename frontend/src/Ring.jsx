// eslint-disable-next-line no-unused-vars
import React from 'react';
import r1 from './image/r1.png';
import r2 from './image/r2.png';
import r3 from './image/r3.png';
import r4 from './image/r4.png';
import r5 from './image/r5.png';
import r6 from './image/r6.png';
import r7 from './image/r7.png';
import r8 from './image/r8.png';
import r9 from './image/r9.png';
import r10 from './image/r10.jpg';
import r11 from './image/r11.jpg';
import like from './image/like.png';
import axios from 'axios';
import './jewellery.css';
import { useNavigate } from 'react-router-dom';

const Ring = () => {
  const navigateTo = useNavigate();

  const handleAddToCart = async (itemName) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) {
        throw new Error('User not logged in');
      }

      const response = await axios.post('http://localhost:3000/addToCart', {
        itemName,
        jewellery: 'Ring',
        userId: user.user._id,
      });
      
      console.log(response.data); // Log response from the backend
      // You can update the UI accordingly if needed
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
        jewellery: 'Ring',
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
        <img src={r1} alt="r1" className="r1" height="400" width="1500" />
      </div>

      <div className="product-list">
        <li className="jewellery-item">
          <a className="Ring" href="#">
            <img src={r2} alt="Ring" className="r2" />
          </a>
          <h3>Silver Ring</h3>
          <div className="price">
            Rs. 30,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Ring')} />
          </div>
          <button onClick={() => handleAddToCart('Ring')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Ring" href="#">
            <img src={r3} alt="Ring" className="r3" />
          </a>
          <h3>Golden Ring</h3>
          <div className="price">
            Rs. 45,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Ring')} />
          </div>
          <button onClick={() => handleAddToCart('Ring')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Ring" href="#">
            <img src={r4} alt="Ring" className="r4" />
          </a>
          <h3>Golden Ring</h3>
          <div className="price">
            Rs. 45,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Ring')} />
          </div>
          <button onClick={() => handleAddToCart('Ring')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Ring" href="#">
            <img src={r5} alt="Ring" className="r5" />
          </a>
          <h3>Golden Ring</h3>
          <div className="price">
            Rs. 45,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Ring')} />
          </div>
          <button onClick={() => handleAddToCart('Ring')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Ring" href="#">
            <img src={r6} alt="Ring" className="r6" />
          </a>
          <h3>Golden Ring</h3>
          <div className="price">
            Rs. 45,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Ring')} />
          </div>
          <button onClick={() => handleAddToCart('Ring')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Ring" href="#">
            <img src={r7} alt="Ring" className="r7" />
          </a>
          <h3>Golden Ring</h3>
          <div className="price">
            Rs. 45,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Ring')} />
          </div>
          <button onClick={() => handleAddToCart('Ring')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Ring" href="#">
            <img src={r8} alt="Ring" className="r8" />
          </a>
          <h3>Golden Ring</h3>
          <div className="price">
            Rs. 45,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Ring')} />
          </div>
          <button onClick={() => handleAddToCart('Ring')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Ring" href="#">
            <img src={r9} alt="Ring" className="r9" />
          </a>
          <h3>Golden Ring</h3>
          <div className="price">
            Rs. 45,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Ring')} />
          </div>
          <button onClick={() => handleAddToCart('Ring')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Ring" href="#">
            <img src={r10} alt="Ring" className="r10" />
          </a>
          <h3>Golden Ring</h3>
          <div className="price">
            Rs. 45,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Ring')} />
          </div>
          <button onClick={() => handleAddToCart('Ring')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Ring" href="#">
            <img src={r11} alt="Ring" className="r11" />
          </a>
          <h3>Golden Ring</h3>
          <div className="price">
            Rs. 45,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Ring')} />
          </div>
          <button onClick={() => handleAddToCart('Ring')} className="add-to-cart">Add to Cart</button>
        </li>
        {/* Repeat similar structure for other items */}

      </div>
    </div>
  );
};

export default Ring;