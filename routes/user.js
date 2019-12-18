var express = require('express');
var router = express.Router();

router.post('/login', function(req, res, next) {
    res.json({
        errno:0,
        data: [1,2,3]
    })
});


module.exports = router;
