var express = require('express');
var router = express.Router();
var db=require('../connection');
/* GET home page. */
router.get('/home', function(req, res, next) {
  db.query('SELECT sum(deaths) as suu,sum(samples) as sample,sum(positives) as pos,sum(negative) as nege,sum(discharge) as disch from Covid_details1', function (err, result) {
    if (err) throw err;
      console.log({data:result})
    ///res.render() function
    res.render('home',{data:result});
  });
});

module.exports = router;
