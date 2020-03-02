const router = require("express").Router();
const verify = require("./verifyToken");


router.get('/', verify, (req, res) => {
    res.json({
        posts: {
            title: "Rest Api With Node Js",
            author: req.user
        }
    })
})

module.exports = router