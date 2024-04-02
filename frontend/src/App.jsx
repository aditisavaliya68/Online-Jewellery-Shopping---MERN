import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Gold from "./Gold.jsx";
import Silver from "./Silver.jsx";
import Diamond from "./Diamond.jsx"; 
import Nacklace from "./Nacklace.jsx"; 
import Bracelet from "./Bracelet.jsx";
import Earring from "./Earring.jsx";
import Ring from "./Ring.jsx";
import Navbar from "./Navbar.jsx"; 
import Cart from "./Cart.jsx"; 
import Login from "./Login.jsx"; 
import Signup from "./Signup.jsx";
import Favorite from "./Favorite.jsx";

/*import Home from "./images/logo.png";*/

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>}>
      <Route index element={<Home />} />
      <Route path="/cart" element={<Cart />} />
        <Route path="/gold" element={<Gold />} />
        <Route path="/silver" element={<Silver />} />
        <Route path="/diamond" element={<Diamond />} />
        <Route path="/bracelet" element={<Bracelet />} />
        <Route path="/nacklace" element={<Nacklace />} />
        <Route path="/ring" element={<Ring />} />
        <Route path="/earring" element={<Earring />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/signup" element={<Home/>}/>
        {/* <Route path="/h5" element={<Gold/>}/> */}
        
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
