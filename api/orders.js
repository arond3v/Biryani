const express = require('express');
const router = express.Router();



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


router.get("/fav_orders", (req, res) => {
    if (orders.length == 0) {
        res.status(404);
        console.log("empty");
    }

    res.json(orders);
});

router.post("/post_order", (req, res) => {
    // Create a new order which is redundant

    const new_order = req.body;
    console.log(new_order.price);
    orders.push(new_order);
    res.send(new_order);
})

module.exports = router;