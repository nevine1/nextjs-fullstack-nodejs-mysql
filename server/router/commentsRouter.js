const express = require('express');
const router = express.Router();
const db = require("../models");
const Comments = db.Comments;
//this is to create the endpoint for comments 
//to create a comment , we should use the post with id , to make a comment for tis post 
//so we should use this code; 

/* router.get('/byId/:id', async (req, res) => {
    const id = req.params.id;
    const post = await posts.findByPK(id); 
    res.json(post)
}) */

router.get('/:postId', async (req, res) => {
    const postId = req.params.postId;
    const comments = await Comments.findAll({where: {PostId: postId}}); 
    res.json(comments)
})
module.exports = router; 