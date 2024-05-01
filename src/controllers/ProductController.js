const Comment = require("../models/CommentsModel");
const Product = require("../models/ProductsModel");

const create = async (req, res) => {
    try {
        const { productName, productQuantity } = req.body;

        if (!productName || !productQuantity) {
            return res.status(400).send({ message: 'Some fields are missing' })
        }

        if (await Product.findOne({ productName })) {
            return res.status(400).send({ error: 'Already exists' })
        }

        const product = new Product({
            productName,
            productQuantity
        });

        await product.save();

        return res.status(201).json(product);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

const list = async (req, res) => {
    try {
        const listAllProducts = await Product.find();
        return res.status(200).send(listAllProducts)
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Server error " + error.message })
    }
}

const findById = async (req, res) => {
    const { id } = req.params;
    try {
        if (!id) {
            return res.status(404).send({ message: "Not found" })
        }
        const listProductById = await Product.findById({ _id: id })

        return res.status(200).send(listProductById)
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Server error " + error.message })
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { productName, productQuantity } = req.body;

        if (!id) {
            return res.status(401).send({ message: "Not found" })
        }

        const productDetails = {
            productName,
            productQuantity,
        }

        const updatedProduct = await Product.findByIdAndUpdate({
            _id: id
        },
            productDetails,
            { new: true }
        )

        if (!updatedProduct) {
            return res.status(401).send({ message: "Not found" })
        }

        updatedProduct.save(id);
        return res.status(200).send(updatedProduct)

    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Server error " + error.message })
    }
}

const remove = async (req, res) => {
    try {
        const { id } = req.params;
        const product = Product.findById({ _id: id });

        if (!product) {
            return res.status(401).send({ message: "Product not found." })
        }

        await product.findOneAndDelete({ _id: id });

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
}