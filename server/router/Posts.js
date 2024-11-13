const express = require('express');
const router = express.Router();
const db = require("../models");
const Posts = db.Posts;
//const { Posts } = require("../models/posts"); //Posts is the table we create in the database

router.get("/", (req, res) => {
   res.send('Hello posts')
    //res.json("hello World") json format 
})

//send data to the database 
router.post("/", async (req, res) => {
    const post = req.body;  //body here is the body of request(it means the post details: title, postBody, username)
   
    await Posts.create(post);
    //return resp.json
    res.json(post)
})

module.exports = router;