// Root app file
// Bharghav

// Env variables
const PORT = 6969;
const express = require('express');

const app = express();

app.use(express.json());

const orders = require('./api/orders')

// Routes

app.use('/api/',orders)
app.get('/', (req, res) => {
    res.send("Welcome To Alam Biryani Point!");
})

app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log(`Server Running on PORT : ${PORT}`);
})