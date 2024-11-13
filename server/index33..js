const express = require('express');
const Sequelize = require('sequelize');
const config = require('./config/config.json');
const Post = require('./models/Posts');
const app = express();
const  port = 3001;

// Access the appropriate environment configuration based on your environment variable (e.g., NODE_ENV)
const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

// Initialize Sequelize
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect   

});

// Middleware
app.use(express.json());

// Define a route to create a new post
app.post('/posts', async (req, res) => {
    const { title, postText, userName } = req.body;
  
    try {
      const post = await Post.create({ title, postText, userName });
      res.status(201).json(post);
    } catch (error) {
      console.error('Error creating post:', error);
      res.status(500).json({ error: 'Failed to create post' }); // More specific error message
    }
  });

// Define a route to get all posts
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});