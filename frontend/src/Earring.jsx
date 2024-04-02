// eslint-disable-next-line no-unused-vars
import React from 'react';
import e1 from './image/e1.png';
import e2 from './image/e2.png';
import e3 from './image/e3.png';
import e4 from './image/e4.png';
import e5 from './image/e5.png';
import e6 from './image/e6.png';
import e7 from './image/e7.png';
import e8 from './image/e8.png';
import e9 from './image/e9.png';
import e10 from './image/e10.jpg';
import e11 from './image/e11.jpg';
import like from './image/like.png';
import axios from 'axios';
import './jewellery.css';
import { useNavigate } from 'react-router-dom';


const Earring = () => {
  const navigateTo = useNavigate();

  const handleAddToCart = async (itemName) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) {
        throw new Error('User not logged in');
      }

      const response = await axios.post('http://localhost:3000/addToCart', {
        itemName,
        jewellery: 'Earring',
        userId: user.user._id,
      });
      
      console.log(response.data); // Log response from the backend
      // You can update the UI accordingly if needed
      navigateTo('/favorite')

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
        jewellery: 'Earring',
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
        <img src={e1} alt="s1" className="e1" height="400" width="1500" />
      </div>

      <div className="product-list">
        <li className="jewellery-item">
          <a className="Earring" href="#">
            <img src={e2} alt="Earring" className="s2" />
          </a>
          <h3>Silver Earring</h3>
          <div className="price">
            Rs. 27,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Earring')} />
          </div>
          <button onClick={() => handleAddToCart('Earring')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Earring" href="#">
            <img src={e3} alt="Earring" className="s3" />
          </a>
          <h3>Silver Earring</h3>
          <div className="price">
            Rs. 30,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Earring')} />
          </div>
          <button onClick={() => handleAddToCart('Earring')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Earring" href="#">
            <img src={e4} alt="Earring" className="e4" />
          </a>
          <h3>Silver Earring</h3>
          <div className="price">
            Rs. 30,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Earring')} />
          </div>
          <button onClick={() => handleAddToCart('Earring')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Earring" href="#">
            <img src={e5} alt="Earring" className="e5" />
          </a>
          <h3>Silver Earring</h3>
          <div className="price">
            Rs. 30,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Earring')} />
          </div>
          <button onClick={() => handleAddToCart('Earring')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Earring" href="#">
            <img src={e6} alt="Earring" className="e6" />
          </a>
          <h3>Silver Earring</h3>
          <div className="price">
            Rs. 30,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Earring')} />
          </div>
          <button onClick={() => handleAddToCart('Earring')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Earring" href="#">
            <img src={e7} alt="Earring" className="e7" />
          </a>
          <h3>Silver Earring</h3>
          <div className="price">
            Rs. 30,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Earring')} />
          </div>
          <button onClick={() => handleAddToCart('Earring')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Earring" href="#">
            <img src={e8} alt="Earring" className="e8" />
          </a>
          <h3>Silver Earring</h3>
          <div className="price">
            Rs. 30,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Earring')} />
          </div>
          <button onClick={() => handleAddToCart('Earring')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Earring" href="#">
            <img src={e9} alt="Earring" className="e9" />
          </a>
          <h3>Silver Earring</h3>
          <div className="price">
            Rs. 30,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Earring')} />
          </div>
          <button onClick={() => handleAddToCart('Earring')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Earring" href="#">
            <img src={e10} alt="Earring" className="e10" />
          </a>
          <h3>Silver Earring</h3>
          <div className="price">
            Rs. 30,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Earring')} />
          </div>
          <button onClick={() => handleAddToCart('Earring')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Earring" href="#">
            <img src={e11} alt="Earring" className="e11" />
          </a>
          <h3>Silver Earring</h3>
          <div className="price">
            Rs. 30,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Earring')} />
          </div>
          <button onClick={() => handleAddToCart('Earring')} className="add-to-cart">Add to Cart</button>
        </li>
        {/* Repeat similar structure for other items */}

      </div>
    </div>
  );
};

export default Earring;