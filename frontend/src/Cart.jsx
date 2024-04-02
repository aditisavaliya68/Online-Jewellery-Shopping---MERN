import React, { useState, useEffect } from "react";
import axios from "axios";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null); 

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      // If user is not logged in, set userId to null and return
      setUserId(null);
      setLoading(false);
      return;
    }

    const parsedUser = JSON.parse(user);
    const userId = parsedUser.user?._id;
    if (!userId) {
      // If userId is not found in the user object, set userId to null and return
      setUserId(null);
      setLoading(false);
      return;
    }

    setUserId(userId);
    fetchCartItems(userId); // Fetch cart items when userId is available
  }, []);

  const fetchCartItems = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:3000/cartItems/${userId}`);
      setCartItems(response.data.cartItems);
      setLoading(false);
    } catch (error) {
      setError("Error fetching cart items: " + error.message);
      setLoading(false);
    }
  };

  const handleRemoveItem = async (itemName) => {
    try {
      await axios.delete(`http://localhost:3000/removeFromCart/${userId}/${itemName}`);
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.itemName !== itemName)
      );
    } catch (error) {
      setError("Error removing item from cart: " + error.message);
    }
  };

  return (
    <div>
      <h2>Cart Items</h2>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {userId === null && !loading && !error && (
        <div>Please login to view your cart.</div>
      )}
      {userId !== null && !loading && !error && (
        <ul>
          {cartItems.map((item) => (
            <li key={item.itemName}>
              <span>
                Jewellery: {item.jewellery}, City: {item.itemName}
              </span>
              <button onClick={() => handleRemoveItem(item.itemName)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
