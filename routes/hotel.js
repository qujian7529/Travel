var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
	console.log('111');
	res.render('hotel', {
		title: '迷糊旅游'
	})
});


module.exports = router;