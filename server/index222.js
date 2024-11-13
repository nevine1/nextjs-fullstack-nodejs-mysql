const express = require('express');

const app = express(); // app is instance of express
app.use(express.json())//to fix any issues happens when sending data to database 

const db = require("./models") // import the database 
//to start the api , and return a function once the server is running (() =>console.log('server is running'))
//connect nodejs with the database on local host
//router 
const postRouter = require('./router/Posts');

app.use("/posts", postRouter); //apply middleware for router by using app.use

db.sequelize.sync().then(() =>{
    app.listen(3001, () =>{
        console.log('Connected to database')
    });
});


