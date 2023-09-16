const express = require('express');
const router = express.Router();
require('dotenv').config();


let orders = [
    {
        "order": ["Biryani-md","Fry-md"],
        "price": 250,
        "rating": 7
    },
    {
        "order": ["Biryani-sm"],
        "price": 100,
        "rating": 8
    }
]


router.get(process.env.FAVORDERS, (req, res) => {
    if (orders.length == 0) {
        res.status(404);
        console.log("empty");
    }

    res.json(orders);
});

router.post(process.env.POSTORDERS, (req, res) => {
    // Create a new order which is redundant

    const new_order = req.body;
    console.log(new_order.price);
    orders.push(new_order);
    res.send(new_order);
})

module.exports = router;