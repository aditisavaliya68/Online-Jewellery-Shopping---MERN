// eslint-disable-next-line no-unused-vars
import React from 'react';
import d1 from './image/d1.png';
import d2 from './image/d2.png';
import d3 from './image/d3.png';
import d4 from './image/d4.png';
import d5 from './image/d5.png';
import d6 from './image/d6.png';
import d7 from './image/d7.png';
import d8 from './image/d8.png';
import d9 from './image/d9.png';
import d10 from './image/d10.png';
import d11 from './image/d11.png';
import like from './image/like.png';
import axios from 'axios';
import './jewellery.css';
import { useNavigate } from 'react-router-dom';


const Diamond = () => {
  const navigateTo = useNavigate();
  const handleAddToCart = async (itemName) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) {
        throw new Error('User not logged in');
      }

      const response = await axios.post('http://localhost:3000/addToCart', {
        itemName,
        jewellery: 'Diamond',
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
        jewellery: 'Diamond',
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
        <img src={d1} alt="d1" className="d1" height="400" width="1500" />
      </div>

      <div className="product-list">
        <li className="jewellery-item">
          <a className="Diamond" href="#">
            <img src={d2} alt="Diamond" className="d2" />
          </a>
          <h3>Diamond Ring</h3>
          <div className="price">
            Rs. 40,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Diamond')} />
          </div>
          <button onClick={() => handleAddToCart('Diamond')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Diamond" href="#">
            <img src={d3} alt="Diamond" className="d3" />
          </a>
          <h3>Diamond Earring</h3>
          <div className="price">
            Rs. 35,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Diamond')} />
          </div>
          <button onClick={() => handleAddToCart('Diamond')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Diamond" href="#">
            <img src={d4} alt="Diamond" className="d4" />
          </a>
          <h3>Diamond Earring</h3>
          <div className="price">
            Rs. 35,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Diamond')} />
          </div>
          <button onClick={() => handleAddToCart('Diamond')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Diamond" href="#">
            <img src={d5} alt="Diamond" className="d5" />
          </a>
          <h3>Diamond Earring</h3>
          <div className="price">
            Rs. 35,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Diamond')} />
          </div>
          <button onClick={() => handleAddToCart('Diamond')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Diamond" href="#">
            <img src={d6} alt="Diamond" className="d6" />
          </a>
          <h3>Diamond Earring</h3>
          <div className="price">
            Rs. 35,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Diamond')} />
          </div>
          <button onClick={() => handleAddToCart('Diamond')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Diamond" href="#">
            <img src={d7} alt="Diamond" className="d7" />
          </a>
          <h3>Diamond Earring</h3>
          <div className="price">
            Rs. 35,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Diamond')} />
          </div>
          <button onClick={() => handleAddToCart('Diamond')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Diamond" href="#">
            <img src={d8} alt="Diamond" className="d8" />
          </a>
          <h3>Diamond Earring</h3>
          <div className="price">
            Rs. 35,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Diamond')} />
          </div>
          <button onClick={() => handleAddToCart('Diamond')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Diamond" href="#">
            <img src={d9} alt="Diamond" className="d9" />
          </a>
          <h3>Diamond Earring</h3>
          <div className="price">
            Rs. 35,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Diamond')} />
          </div>
          <button onClick={() => handleAddToCart('Diamond')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Diamond" href="#">
            <img src={d10} alt="Diamond" className="d10" />
          </a>
          <h3>Diamond Earring</h3>
          <div className="price">
            Rs. 35,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Diamond')} />
          </div>
          <button onClick={() => handleAddToCart('Diamond')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Diamond" href="#">
            <img src={d11} alt="Diamond" className="d11" />
          </a>
          <h3>Diamond Earring</h3>
          <div className="price">
            Rs. 35,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Diamond')} />
          </div>
          <button onClick={() => handleAddToCart('Diamond')} className="add-to-cart">Add to Cart</button>
        </li>
        {/* Repeat similar structure for other items */}

      </div>
    </div>
  );
};

export default Diamond;