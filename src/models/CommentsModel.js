const mongoose = require("../database/db");

const CommentSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Referência ao modelo de usuário (se aplicável)
            required: true
        }
    },
    { timestamps: true }
);

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
