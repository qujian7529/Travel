var express = require('express')
var router = express.Router()
	// var ccap = require('ccap')

// var captcha = ccap({
// 	width: 190,
// 	height: 50,
// 	offset: 30,
// 	quality: 100,
// 	fontsize: 40,
// generate: function() {
// 	var str = 'qQ';
// 	return str;
// }
// })


router.get('/', (req, res, next) => {

	// var ary = captcha.get();
	// res.write(ary[1], 'utf-8');
	// res.render('register', {
	// 	ary: ary[1].toString('utf-8')
	// });
	res.render('register')
})

router.post('/', (req, res, next) => {
	var phone = req.body.phone
	var password = req.body.password
	var password2 = req.body.password2


})

module.exports = router