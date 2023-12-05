require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

// inisiialisasi database dengan sequelize
const sequalize = require('./config/sequalize');
const { startSequelize } = require('./utils/sequalize');

// import models
const { Products } = require('./models');

// import router
const ProductsRouter = require('./routes/ProductsRoute');

// import middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// inisialisasi router
app.use('/', ProductsRouter);

// inisialisasi server
app.listen(port, async () => {
    console.log(`Server running on port ${port}`);
    await startSequelize(sequalize);
});


