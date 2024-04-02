const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/node-login-signup", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// User model
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = mongoose.model("User", userSchema);

// Cart schema
const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{ itemName: String, jewellery: String }]
});
const Cart = mongoose.model("Cart", cartSchema);

// Favorite schema
const favoriteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{ itemName: String, jewellery: String }]
});
const Favorite = mongoose.model("Favorite", favoriteSchema);

// Route for user signup
app.post("/Signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error in user signup:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route for user login
app.post("/Login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    res.json({ message: "Login successful", user });
  } catch (error) {
    console.error("Error in user login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Endpoint to get cart items for a specific user
app.get("/cartItems/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    const userCart = await Cart.findOne({ userId });
    if (!userCart) {
      return res.status(404).json({ message: "Cart not found for the user" });
    }
    res.json({ cartItems: userCart.items });
  } catch (error) {
    console.error("Error getting cart items:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Endpoint to add an item to the cart
app.post("/addToCart", async (req, res) => {
  const { itemName, jewellery, userId } = req.body;
  try {
    let userCart = await Cart.findOne({ userId });
    if (!userCart) {
      userCart = new Cart({ userId, items: [] });
    }
    userCart.items.push({ itemName, jewellery });
    await userCart.save();
    res.json({ message: "Item added to cart successfully", cart: userCart });
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Endpoint to remove an item from the cart
app.delete("/removeFromCart/:userId/:itemName", async (req, res) => {
  const userId = req.params.userId;
  const itemName = req.params.itemName;
  try {
    let userCart = await Cart.findOne({ userId });
    if (!userCart) {
      return res.status(404).json({ message: "Cart not found for the user" });
    }
    userCart.items = userCart.items.filter(item => item.itemName !== itemName);
    await userCart.save();
    res.json({ message: "Item removed from cart successfully", cart: userCart });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Endpoint to handle adding item to favorites
app.post("/addToFavorite", async (req, res) => {
  const { userId, itemName, jewellery } = req.body;
  try {
    let userFavorite = await Favorite.findOne({ userId });
    if (!userFavorite) {
      userFavorite = new Favorite({ userId, items: [] });
    }
    userFavorite.items.push({ itemName, jewellery });
    await userFavorite.save();
    res.json({ message: "Item added to favorite successfully", favorite: userFavorite });
  } catch (error) {
    console.error("Error adding item to favorite:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Endpoint to fetch all favorite items for a specific user
app.get("/favoriteItems/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    const userFavorite = await Favorite.findOne({ userId });
    if (!userFavorite) {
      return res.status(404).json({ message: "Favorite not found for the user" });
    }
    res.json({ favoriteItems: userFavorite.items });
  } catch (error) {
    console.error("Error getting favorite items:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Endpoint to remove an item from the favorites for a specific user
app.delete("/removeFromFavorite/:userId/:itemName", async (req, res) => {
  const userId = req.params.userId;
  const itemName = req.params.itemName;
  try {
    let userFavorite = await Favorite.findOne({ userId });
    if (!userFavorite) {
      return res.status(404).json({ message: "Favorite not found for the user" });
    }
    userFavorite.items = userFavorite.items.filter(item => item.itemName !== itemName);
    await userFavorite.save();
    res.json({ message: "Item removed from favorite successfully", favorite: userFavorite });
  } catch (error) {
    console.error("Error removing item from favorite:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
