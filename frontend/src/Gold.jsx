// eslint-disable-next-line no-unused-vars
import React from 'react';
import g1 from './image/g1.png';
import g2 from './image/g2.png';
import g3 from './image/g3.png';
import g4 from './image/g4.png';
import g5 from './image/g5.png';
import g6 from './image/g6.png';
import g7 from './image/g7.png';
import g8 from './image/g8.png';
import g9 from './image/g9.png';
import g10 from './image/g10.png';
import g11 from './image/g11.png';
import like from './image/like.png';
import axios from 'axios';
import './jewellery.css';
import { useNavigate } from 'react-router-dom';


const Gold = () => {
  const navigateTo = useNavigate();
  const handleAddToCart = async (itemName) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) {
        throw new Error('User not logged in');
      }

      const response = await axios.post('http://localhost:3000/addToCart', {
        itemName,
        jewellery: 'Gold',
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
        jewellery: 'Gold',
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
        <img src={g1} alt="g1" className="g1" height="400" width="1500" />
      </div>

      <div className="product-list">
        <li className="jewellery-item">
          <a className="gold" href="#">
            <img src={g2} alt="gold" className="g2" />
          </a>
          <h3>Golden Earrings</h3>
          <div className="price">
            Rs. 30,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('gold')} />
          </div>
          <button onClick={() => handleAddToCart('gold')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="gold" href="#">
            <img src={g3} alt="gold" className="g3" />
          </a>
          <h3>Golden Rings</h3>
          <div className="price">
            Rs. 27,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('gold')} />
          </div>
          <button onClick={() => handleAddToCart('gold')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="gold" href="#">
            <img src={g4} alt="gold" className="g4" />
          </a>
          <h3>Golden Rings</h3>
          <div className="price">
            Rs. 27,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('gold')} />
          </div>
          <button onClick={() => handleAddToCart('gold')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="gold" href="#">
            <img src={g5} alt="gold" className="g5" />
          </a>
          <h3>Golden Rings</h3>
          <div className="price">
            Rs. 27,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('gold')} />
          </div>
          <button onClick={() => handleAddToCart('gold')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="gold" href="#">
            <img src={g6} alt="gold" className="g6" />
          </a>
          <h3>Golden Rings</h3>
          <div className="price">
            Rs. 27,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('gold')} />
          </div>
          <button onClick={() => handleAddToCart('gold')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="gold" href="#">
            <img src={g7} alt="gold" className="g7" />
          </a>
          <h3>Golden Rings</h3>
          <div className="price">
            Rs. 27,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('gold')} />
          </div>
          <button onClick={() => handleAddToCart('gold')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="gold" href="#">
            <img src={g8} alt="gold" className="g8" />
          </a>
          <h3>Golden Rings</h3>
          <div className="price">
            Rs. 27,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('gold')} />
          </div>
          <button onClick={() => handleAddToCart('gold')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="gold" href="#">
            <img src={g9} alt="gold" className="g9" />
          </a>
          <h3>Golden Rings</h3>
          <div className="price">
            Rs. 27,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('gold')} />
          </div>
          <button onClick={() => handleAddToCart('gold')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="gold" href="#">
            <img src={g10} alt="gold" className="g10" />
          </a>
          <h3>Golden Rings</h3>
          <div className="price">
            Rs. 27,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('gold')} />
          </div>
          <button onClick={() => handleAddToCart('gold')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="gold" href="#">
            <img src={g11} alt="gold" className="g11" />
          </a>
          <h3>Golden Rings</h3>
          <div className="price">
            Rs. 27,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('gold')} />
          </div>
          <button onClick={() => handleAddToCart('gold')} className="add-to-cart">Add to Cart</button>
        </li>
        {/* Repeat similar structure for other items */}

      </div>
    </div>
  );
};

export default Gold;
