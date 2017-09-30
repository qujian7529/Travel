var express = require('express')
var router = express.Router()
var modele = require('../database/Model.js');

router.get('/', (req, res, next) => {
	res.render('login')
})

router.post('/', (req, res, next) => {
	var username = req.body.username;
	var password = req.body.userpasswd;
	modele.userloginModel.findOne({
		name: Name
	}, (err, doc) => {
		if (err) {
			console.log(err);
		} else if (doc) {
			console.log('登录成功')
		}
	})

})

module.exports = router