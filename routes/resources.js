var express = require('express');
var router = express.Router();

/* GET external resources page. */
router.get('/', function(req, res) {
    res.render('resources', {
        isAdmin: req.isAuthenticated()
    });
});

module.exports = router;
