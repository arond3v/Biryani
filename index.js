// Root app file
// Bharghav

// Env variables
const PORT = process.env.DEV_PORT||6969;
const express = require('express');

const app = express();

app.use(express.json()); // Middleware

const orders = require('./api/orders');

// Routes

app.use(process.env.ROOT_DIR,orders)
app.get('/', (req, res) => {
    res.send("Welcome To Alam Biryani Point!");
})

app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log(`Server Running on PORT : ${PORT}`);
})