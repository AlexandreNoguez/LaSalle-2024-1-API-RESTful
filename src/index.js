require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const productRouter = require('./routes/ProductRoutes')
const commentRouter = require('./routes/CommentRoutes')

app.get('/', (req, res) => {
    res.status(200).send('Servidor está online!');
});

app.use('/api/products', productRouter);
app.use('/api/comments', commentRouter);

const port = process.env.PORT || 3333;

app.listen(port, () => {
    console.log(`Server started at ${new Date().toLocaleString("pt-BR")} using port ${port}`);
})