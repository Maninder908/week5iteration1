const connectDB = require("./config/db");
const express = require("express");

// express app
const app = express();
connectDB();

// Import the controllers
const {
  getBlogs,
  createBlog,
  getBlog,
  
} = require("./controllers/blogController");

// middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("API Running!"));
// GET a single blog
app.get("/api/blogs/:id", getBlog);
// DELETE a blog

// Add a new blog
app.post("/api/blogs", createBlog);
// GET all blogs
app.get("/api/blogs", getBlogs);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});