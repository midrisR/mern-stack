const router = require("express").Router();
const Transaction = require('../models/Transaction');
const verify = require("./verifyToken");

const Joi = require("@hapi/joi");

const validation = data => {

    const schema = Joi.object({
        text: Joi.string()
            .max(225)
            .required()
            .messages({
                'string.base': " should be a type of text",
                'string.empty': "text cannot be an empty field",
                'string.max': "text length must be less than or equal to {#limit} characters long",
                'any.required': "text is a required field"
            }),
        amount: Joi.number()
            .required()
            .messages({
                'number.base': " amount is a required field",
                'number.empty': "amount cannot be an empty field",
                'any.required': "amount is a required field"
            }),
    });
    return schema.validate(data, { abortEarly: false })
}


router.get('/', verify, async (req, res) => {

    try {
        const transactions = await Transaction.find()
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            err: err.message
        })
    }
})

router.post('/', verify, async (req, res) => {

    const { error } = validation(req.body);
    const errors = []
    if (error) {
        error.details.forEach(item => {
            errors.push({ [item.context.key]: [item.message] });
        });
        return res.status(422).json(errors);
    }

    const data = new Transaction({
        text: req.body.text,
        amount: req.body.amount
    })
    try {
        const savedTransaction = await data.save();
        res.status(201).json({
            success: true,
            data: savedTransaction
        });
    } catch (err) {
        res.status(400).send(err.message);
    }
})

router.delete('/:id', verify, async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
        if (!transaction) {
            return res.status(404).json({
                status: false,
                err: 'No transaction found'
            })
        }
        await transaction.remove();
        return res.status(200).json({
            status: true,
            data: {}
        })
    } catch (err) {
        return res.status(400).json({
            status: false,
            err: err.message
        })
    }
})


module.exports = router