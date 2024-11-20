const express = require('express');
const router = express.Router();
const db = require("../models");
const Comments = db.Comments;

//this is to create the endpoint for comments 
//to create a comment , we should use the post with id , to make a comment for tis post 
//so we should use this code; 
router.get("/:postId", async (req, res) => {
    const postId = req.params.postId;
    const comments = await Comments.findAll( {where: { PostId: postId } }); 
    res.json(comments)
})

router.post("/", async (req, res) => {
    console.log("POST /comments hit");
    const comment = req.body;
    await Comments.create(comment)
     res.json(comment)
   /*  if (!comment || !postId) {
        console.error("Missing required fields");
        return res.status(400).json({ error: "Comment and postId are required" });
    }

    try {
        const post = await db.Posts.findByPk(postId);
        if (!post) {
            return res.status(400).json({ error: "Post not found" });
        }

        const newComment = await Comments.create({ comment, postId });
        res.json(newComment);
    } catch (error) {
        console.error("Error creating comment:", error);
        res.status(500).json({ error: error.message });
    } */
});

module.exports = router; 