var express = require('express');
var router = express.Router();

var request = require('../tool/request.js');

/* GET home page. */
router.get('*', function(req, res, next) {
  res.render('index');
});

router.post('/*',function(req,res) {
    req.setTimeout(60000);
    if (req.originalUrl.indexOf('zhuishuApi') > -1){
         let url = req.originalUrl.replace(/\/zhuishuApi/,'')
         url = 'http://api.zhuishushenqi.com' + url
         let obj={
             ...req.body
         }
         request.get(url, obj, function(data){
             res.json(data);
         },req,res)
     } else if (req.originalUrl.indexOf('zhuishuChapter') > -1){
        let url = req.originalUrl.replace(/\/zhuishuChapter/,'')
            if ( url.indexOf('/http://') == -1 ){
                url = url.replace(/\/http:/,'/http:/')
            }
            url = 'http://chapter2.zhuishushenqi.com' + url
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
