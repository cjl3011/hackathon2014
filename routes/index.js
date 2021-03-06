var express = require('express');
var router = express.Router();
var _ = require('underscore');
var qr = require('./qr');
var Query = require('./query');
var db = require('./db');

/* GET home page. */
router.get('/', function(req, res) {
	console.log(req.query);
	if(_.isEmpty(req.query)){
		res.render('index', { title: 'Express' });
	}else if(_.contains(_.keys(req.query), 'query')){
		res.redirect("/query/" + req.query.query);
	}else if(_.contains(_.keys(req.query), 'add_name') && _.contains(_.keys(req.query), 'add_value')){
		res.redirect("/query/add/" + req.query.add_name + "/" + JSON.stringify(req.query.add_value));
	}else if(_.contains(_.keys(req.query), 'del_name')){
		res.redirect("/query/delete/" + req.query.del_name);
	}else if(_.contains(_.keys(req.query), 'update_name') && _.contains(_.keys(req.query), 'value')){ 
		res.redirect("/query/update/" + req.query.update_name + "/" + JSON.stringify(req.query.value));
	}else if(_.contains(_.keys(req.query), 'qr') && _.contains(_.keys(req.query), 'qr_name')){
		tmp = new qr.QR(req.query.qr);
		res.redirect("/query/add/" + req.query.qr_name + "/" + JSON.stringify(tmp));
	}else{
		res.render('index', { title: 'Express' });
	}
});

module.exports = router;
