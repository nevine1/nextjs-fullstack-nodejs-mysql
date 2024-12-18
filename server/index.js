const express = require('express');
const cors = require('cors');
const app = express(); // app is instance of express
app.use(express.json())//to fix any issues happens when sending data to database 

app.use(cors()) //use this middle ware to can retrieve the posts, clients on client side 
//if we do not use cors, we will get this message: 
const db = require("./models") // import the database has been blocked by CORS policy

//to start the api , and return a function once the server is running (() =>console.log('server is running'))
//connect nodejs with the database on local host
//router 
const routerOfPosts = require('./router/postsRouter');
const routerOfComments = require('./router/commentsRouter');


//apply middleware for router by using app.use
app.use("/posts", routerOfPosts); //it means For any request that starts with /posts, use the routes defined in routerOfPosts
app.use("/comments/", routerOfComments); 



db.sequelize.sync({ force: false }).then(() => {
    app.listen(3001, () => {
      console.log("Connected to database");
    });
  });
