// eslint-disable-next-line no-unused-vars
import React from 'react';
import b1 from './image/b1.jpg';
import b2 from './image/b2.png';
import b3 from './image/b3.png';
import b4 from './image/b4.png';
import b5 from './image/b5.png';
import b6 from './image/b6.png';
import b7 from './image/b7.png';
import b8 from './image/b8.png';
import b9 from './image/b9.png';
import b10 from './image/b10.png';
import b11 from './image/b11.png';
import like from './image/like.png';
import axios from 'axios';
import './jewellery.css';
import { useNavigate } from 'react-router-dom';


const Bracelet = () => {
  const navigateTo = useNavigate();

  const handleAddToCart = async (itemName) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) {
        throw new Error('User not logged in');
      }

      const response = await axios.post('http://localhost:3000/addToCart', {
        itemName,
        country: 'Bracelet',
        userId: user.user._id,
      });
      
      console.log(response.data); // Log response from the backend
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
        country: 'Bracelet',
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
        <img src={b1} alt="s1" className="b1" height="400" width="1500" />
      </div>

      <div className="product-list">
        <li className="jewellery-item">
          <a className="Bracelet" href="#">
            <img src={b2} alt="Bracelet" className="s2" />
          </a>
          <h3>Golden Bracelet</h3>
          <div className="price">
            Rs. 30,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Bracelet')} />
          </div>
          <button onClick={() => handleAddToCart('Bracelet')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Bracelet" href="#">
            <img src={b3} alt="Bracelet" className="b3" />
          </a>
          <h3>Golden Bracelet</h3>
          <div className="price">
            Rs. 35,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Bracelet')} />
          </div>
          <button onClick={() => handleAddToCart('Bracelet')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Bracelet" href="#">
            <img src={b4} alt="Bracelet" className="b4" />
          </a>
          <h3>Golden Bracelet</h3>
          <div className="price">
            Rs. 35,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Bracelet')} />
          </div>
          <button onClick={() => handleAddToCart('Bracelet')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Bracelet" href="#">
            <img src={b5} alt="Bracelet" className="b5" />
          </a>
          <h3>Golden Bracelet</h3>
          <div className="price">
            Rs. 35,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Bracelet')} />
          </div>
          <button onClick={() => handleAddToCart('Bracelet')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Bracelet" href="#">
            <img src={b6} alt="Bracelet" className="b6" />
          </a>
          <h3>Golden Bracelet</h3>
          <div className="price">
            Rs. 35,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Bracelet')} />
          </div>
          <button onClick={() => handleAddToCart('Bracelet')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Bracelet" href="#">
            <img src={b7} alt="Bracelet" className="b7" />
          </a>
          <h3>Golden Bracelet</h3>
          <div className="price">
            Rs. 35,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Bracelet')} />
          </div>
          <button onClick={() => handleAddToCart('Bracelet')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Bracelet" href="#">
            <img src={b8} alt="Bracelet" className="b8" />
          </a>
          <h3>Golden Bracelet</h3>
          <div className="price">
            Rs. 35,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Bracelet')} />
          </div>
          <button onClick={() => handleAddToCart('Bracelet')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Bracelet" href="#">
            <img src={b9} alt="Bracelet" className="b9" />
          </a>
          <h3>Golden Bracelet</h3>
          <div className="price">
            Rs. 35,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Bracelet')} />
          </div>
          <button onClick={() => handleAddToCart('Bracelet')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Bracelet" href="#">
            <img src={b10} alt="Bracelet" className="b10" />
          </a>
          <h3>Golden Bracelet</h3>
          <div className="price">
            Rs. 35,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Bracelet')} />
          </div>
          <button onClick={() => handleAddToCart('Bracelet')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Bracelet" href="#">
            <img src={b11} alt="Bracelet" className="b11" />
          </a>
          <h3>Golden Bracelet</h3>
          <div className="price">
            Rs. 35,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Bracelet')} />
          </div>
          <button onClick={() => handleAddToCart('Bracelet')} className="add-to-cart">Add to Cart</button>
        </li>
        {/* Repeat similar structure for other items */}

      </div>
    </div>
  );
};

export default Bracelet;