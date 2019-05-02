var express = require('express');
var router = express.Router();

var request = require('../tool/request.js');
var apis = require('../tool/apis.js');
var util = require('../tool/util.js');

router.get('*', function(req, res, next) {
    console.log('===================================')
    console.log(req.query)
    let url = req.params['0'].split('/')[1]
    if (url){
        let obj={
            ...req.query
        }
        console.log( url +':' + apis[url])
        let postUrl = apis[url] || ''
        if(obj.paramsList){
            obj.paramsList.forEach((item)=>{
                postUrl = postUrl + '/' + item
            })
        }
        request.get(apis[url], obj, function(data){
            res.json(data);
        },req,res)
    } else {
        res.json({msg: 'url错误'});
    }
});
module.exports = router;
