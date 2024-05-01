const mongoose = require("../database/db");

const ProductSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: true
        },
        productQuantity: {
            type: Number,
            required: true
        },
        comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }] // Referência aos comentários
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
