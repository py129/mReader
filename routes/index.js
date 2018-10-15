var express = require('express');
var router = express.Router();

var request = require('../tool/request.js');

/* GET home page. */
router.get('*', function(req, res, next) {
  res.render('index');
});

router.post('/*',function(req,res) {
    req.setTimeout(60000);
    if (req.originalUrl.indexOf('zhuishushenqi') > -1){
         let url = req.originalUrl.replace(/\/zhuishushenqi/,'')
         url = 'http://api.zhuishushenqi.com' + url
         let obj={
             ...req.body
         }
         request.get(url, obj, function(data){
             res.json(data);
         },req,res)
     } else {
         request.post(req.path,req.body,function(data){
             res.json(data);
         },req,res)
     }
 })

module.exports = router;
