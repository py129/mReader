var express = require('express');
var router = express.Router();

var request = require('../tool/request.js');
var apis = require('../tool/apis.js');
var util = require('../tool/util.js');

router.get('*', function(req, res, next) {
    let url = req.params['0'].split('/')[1]
    if (url){
        let obj={
            ...req.query
        }
        let postUrl = apis[url] || ''
        if(obj.paramsList){
            let arr = JSON.parse(obj.paramsList) || []
            arr.forEach(element => {
                postUrl = postUrl + '/' + element
            });
        }
        request.get(postUrl, obj, function(data){
            res.json(data);
        },req,res)
    } else {
        res.json({msg: 'url错误'});
    }
});
module.exports = router;
