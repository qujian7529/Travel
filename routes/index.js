var express = require('express');
var router = express.Router();

// GET home page.
router.get('/', function(req, res, next) {
	res.render('index', {
		title: '迷糊旅游'
	});
});



module.exports = router;