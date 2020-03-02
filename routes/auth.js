const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs")
const { validationRegister, validationLogin } = require("../validation");
const jwt = require("jsonwebtoken")

router.post('/register', async (req, res) => {

    const { error } = validationRegister(req.body);
    const err = [];
    if (error) {
        error.details.forEach(item => {
            err.push({ [item.context.key]: [item.message] });
        });
        return res.status(422).json(err);
    }

    // check email already register
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send({ message: "email already exist" });

    // hash password
    var salt = bcrypt.genSaltSync(10);
    var hashPasswords = bcrypt.hashSync(req.body.password, salt);

    // input data to database
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPasswords
    });
    try {
        const savedUser = await user.save();
        res.status(201).json({ success: true, data: savedUser });
    } catch (error) {
        res.status(400).send(error);
    }
});


router.post('/login', async (req, res) => {
    const { error } = validationLogin(req.body);
    const err = [];
    if (error) {
        error.details.forEach(item => {
            err.push({ [item.context.key]: [item.message] });
        });
        return res.status(422).json(err);
    }

    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(400).json({ status: false, message: "Email or password is invalid !!" });

    const validatePassword = await bcrypt.compareSync(req.body.password, user.password);
    if (!validatePassword) return res.status(400).json({ status: false, message: "Email or password is invalid !!" });

    // create token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, { expiresIn: '24h' })
    res.header("Authorization", token).json({ success: true, data: token })
});



module.exports = router