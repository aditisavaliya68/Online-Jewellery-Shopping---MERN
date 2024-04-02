// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import logo from "./image/logo.png"; // Import the logo image
import l2 from "./image/wishlist.png";
import cart from "./image/cart.png";
import account from "./image/account.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import axios from "axios"; // Import axios for making API requests

const Navbar = () => {

  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user); // Convert 'user' to boolean and set isLoggedIn accordingly

    // Fetch cart item count when component mounts
    fetchCartItemCount();
  }, []);

  // Fetch cart item count
  const fetchCartItemCount = async () => {
    try {
      const userId = localStorage.getItem("user")?.user?._id;
      if (userId) {
        const response = await axios.get(
          `http://localhost:3000/cartItems/${userId}`
        );
        setCartItemCount(response.data.cartItems.length);
      }
    } catch (error) {
      console.error("Error fetching cart item count:", error);
    }
  };

  // Handle logout action
  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove 'user' from local storage
    setIsLoggedIn(false); // Update isLoggedIn state
  };

  return (
    <div>
      <div>
        <nav className="navbar">
          <div className="logo-container">
            <Link className="category-link" to="/">
              <img src={logo} alt="Logo" className="logo" />
            </Link>
            <span>
              <div className="search-bar">
                <input type="text" placeholder="Search" />
              </div>
            </span>
          </div>
          <div className="navbar-links">
          <Link to="/login">
            <img src={account} alt="account" className="account" />
            </Link>
            <Link to="/favorite">
              <img src={l2} alt="like" className="like" />
            </Link>
            <Link className="category-link" to="/cart">
              <img src={cart} alt="cart" className="cart" />
              {cartItemCount > 0 && (
                <span className="cart-item-count">{cartItemCount}</span>
              )}
            </Link>
            {isLoggedIn ? ( // If user is logged in, show logout button
              <Link onClick={handleLogout}>Logout</Link>
            ) : (
              // If user is not logged in, show login/signup links
              <>
                {/* <Link to="/login">Login</Link>
                <Link to="/Signup">Signup</Link> */}
              </>
            )}
          </div>
        </nav>
      </div>
<br />
      <div>
        <nav>
          <div className="navbar-link">
            <span>
              <div className="dropdown">
                <div className="dropbtn">
                  Shop by Category
                  <div className="dropdown-content">
                    <Link className="category-link" to="/Ring">
                      Rings
                    </Link>
                    <br />
                    <Link className="category-link" to="/Nacklace">
                      Nacklaces
                    </Link>
                    <br />
                    <Link className="category-link" to="/Bracelet">
                      Bracelets
                    </Link>
                    <br />
                    <Link className="category-link" to="/Earring">
                      Earrings
                    </Link>
                  </div>
                </div>
              </div>
            </span>
            <span>
              <Link className="category-link" to="/Gold">
                Gold Jewellery
              </Link>
            </span>
            <span>
              <Link className="category-link" to="/Diamond">
                Diamond Jewellery
              </Link>
            </span>
            <span>
              <Link className="category-link" to="/Silver">
                Silver Jewellery
              </Link>
            </span>
          </div>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
