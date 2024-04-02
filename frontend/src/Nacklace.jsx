// eslint-disable-next-line no-unused-vars
import React from "react";
import n1 from './image/n1.png';
import n2 from './image/n2.png';
import n3 from './image/n3.png';
import n4 from './image/n4.png';
import n5 from './image/n5.png';
import n6 from './image/n6.png';
import n7 from './image/n7.png';
import n8 from './image/n8.png';
import n9 from './image/n9.png';
import n10 from './image/n10.png';
import n11 from './image/n11.png';
import like from "./image/like.png";
import axios from "axios";
import './jewellery.css';
import { useNavigate } from 'react-router-dom';


const Nacklace = () => {
  const navigateTo = useNavigate();

  // Function to handle adding item to cart
  const handleAddToCart = async (itemName) => {
    try {
      const user1 = localStorage.getItem("user");
      const user = user1 ? JSON.parse(user1) : null;

      if (!user) {
        // Handle case when user is not logged in
        return;
      }

      const response = await axios.post("http://localhost:3000/addToCart", {
        itemName,
        jewellery: "Nacklace", // Corrected property name
        userId: user.user._id,
      });

      console.log(response.data); 
      // Log response from the backend
      // You can update the UI accordingly if needed
      navigateTo('/cart')

    } catch (error) {
      console.error("Error adding item to cart:", error);
      // Handle error, maybe display a message to the user
    }
  };

  // Function to handle adding item to favorite
  const handleAddToFavorite = async (itemName) => {
    try {
      const user1 = localStorage.getItem("user");
      const user = user1 ? JSON.parse(user1) : null;

      if (!user) {
        // Handle case when user is not logged in
        return;
      }

      const response = await axios.post(
        "http://localhost:3000/addToFavorite",
        {
          itemName,
          jewellery: "Nacklace", // Corrected property name
          userId: user.user._id,
        }
      );

      console.log(response.data); // Log response from the backend
      // You can update the UI accordingly if needed
      navigateTo('/favorite')
    } catch (error) {
      console.error("Error adding item to favorite:", error);
      // Handle error, maybe display a message to the user
    }
  };

  return (
    <div>
      <div className="product">
        <img src={n1} alt="n1" className="n1" height="400px" width="1325px" />
      </div>

      <div className="product-list">
      <li className="jewellery-item">
          <a className="Nacklace" href="#">
            <img src={n2} alt="Earring" className="n2" />
          </a>
          <h3>Rose-Gold Nacklace</h3>
          <div className="price">
            Rs. 19,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Nacklace')} />
          </div>
          <button onClick={() => handleAddToCart('Nacklace')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Nacklace" href="#">
            <img src={n3} alt="Earring" className="n3" />
          </a>
          <h3>Golden-Silver Nacklace</h3>
          <div className="price">
            Rs. 47,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Nacklace')} />
          </div>
          <button onClick={() => handleAddToCart('Nacklace')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Nacklace" href="#">
            <img src={n4} alt="Earring" className="n4" />
          </a>
          <h3>Golden-Silver Nacklace</h3>
          <div className="price">
            Rs. 47,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Nacklace')} />
          </div>
          <button onClick={() => handleAddToCart('Nacklace')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Nacklace" href="#">
            <img src={n5} alt="Earring" className="n5" />
          </a>
          <h3>Golden-Silver Nacklace</h3>
          <div className="price">
            Rs. 47,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Nacklace')} />
          </div>
          <button onClick={() => handleAddToCart('Nacklace')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Nacklace" href="#">
            <img src={n6} alt="Earring" className="n6" />
          </a>
          <h3>Golden-Silver Nacklace</h3>
          <div className="price">
            Rs. 47,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Nacklace')} />
          </div>
          <button onClick={() => handleAddToCart('Nacklace')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Nacklace" href="#">
            <img src={n7} alt="Earring" className="n7" />
          </a>
          <h3>Golden-Silver Nacklace</h3>
          <div className="price">
            Rs. 47,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Nacklace')} />
          </div>
          <button onClick={() => handleAddToCart('Nacklace')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Nacklace" href="#">
            <img src={n8} alt="Earring" className="n8" />
          </a>
          <h3>Golden-Silver Nacklace</h3>
          <div className="price">
            Rs. 47,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Nacklace')} />
          </div>
          <button onClick={() => handleAddToCart('Nacklace')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Nacklace" href="#">
            <img src={n9} alt="Earring" className="n9" />
          </a>
          <h3>Golden-Silver Nacklace</h3>
          <div className="price">
            Rs. 47,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Nacklace')} />
          </div>
          <button onClick={() => handleAddToCart('Nacklace')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Nacklace" href="#">
            <img src={n10} alt="Earring" className="n10" />
          </a>
          <h3>Golden-Silver Nacklace</h3>
          <div className="price">
            Rs. 47,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Nacklace')} />
          </div>
          <button onClick={() => handleAddToCart('Nacklace')} className="add-to-cart">Add to Cart</button>
        </li>
        <li className="jewellery-item">
          <a className="Nacklace" href="#">
            <img src={n11} alt="Earring" className="n11" />
          </a>
          <h3>Golden-Silver Nacklace</h3>
          <div className="price">
            Rs. 47,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Nacklace')} />
          </div>
          <button onClick={() => handleAddToCart('Nacklace')} className="add-to-cart">Add to Cart</button>
        </li>
        {/* Additional items... */}

      </div>
    </div>
  );
};

export default Nacklace;
