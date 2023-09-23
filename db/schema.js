const Schema = require('mongoose').Schema;

exports.user = new Schema(
    {
        name: String,
        phoneno: String,
        address: [String],
        jwt: String,
    }
);

exports.item = new Schema(
    {
        name: String,
        price: Number,
        isAvailable: Boolean,
    }
)