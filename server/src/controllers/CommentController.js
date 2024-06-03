const Comment = require('../models/Comment/CommentsModel');
const Product = require('../models/Product/ProductsModel');

/**
 * 
 * Função para criar comentários
 */
const create = async (req, res) => {
    try {
        const { id } = req.params;
        const { text, user } = req.body;

        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).send({ message: 'Product not found' });
        }

        const comment = await Comment.create({
            text,
            user
        });

        product.comments.push(comment._id);
        await product.save();

        return res.status(201).send(comment);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

/**
 * 
 * Função para listar comentários
 */
const list = async (req, res) => {
    try {
        const listAllComments = await Comment.find();
        return res.status(200).send(listAllComments)
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Server error " + error.message })
    }
}

/**
 * 
 * Função para listar por id
 */
const findById = async (req, res) => {
    const { id } = req.params;
    try {
        if (!id) {
            return res.status(404).send({ message: "Not found" })
        }
        const listCommentById = await Comment.findById({ _id: id })

        return res.status(200).send(listCommentById)
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Server error " + error.message })
    }
}

/**
 * 
 * Função para atualizar por id
 */
const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { text, user } = req.body;

        if (!id) {
            return res.status(401).send({ message: "Not found" })
        }

        const productDetails = {
            text,
            user,
        }

        const updatedProduct = await Comment.findByIdAndUpdate({
            _id: id
        },
            productDetails,
            { new: true }
        )

        if (!updatedProduct) {
            return res.status(401).send({ message: "Not found" })
        }

        updatedComment.save(id);
        return res.status(200).send(updatedComment)

    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Server error " + error.message })
    }
}

/**
 * 
 * Função para demover por id
 */
const remove = async (req, res) => {
    try {
        const { id } = req.params;
        const comment = Comment.findById({ _id: id });

        if (!comment) {
            return res.status(401).send({ message: "Comment not found." })
        }

        await comment.findOneAndDelete({ _id: id });

        return res.status(200).send({ message: "Product successfully removed." })
    } catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }
}

module.exports = {
    create,
    list,
    findById,
    update,
    remove
};
