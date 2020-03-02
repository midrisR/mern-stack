const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        min: 5,
        max: 225
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Transaction", transactionSchema);