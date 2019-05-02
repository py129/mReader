var express = require('express');
var router = express.Router();

var request = require('../tool/request.js');
var apis = require('../tool/apis.js');
var util = require('../tool/util.js');

router.get('*', function(req, res, next) {
    console.log('=======1111============================')
    console.log(req.query)
    let url = req.params['0'].split('/')[1]
    if (url){
        let obj={
            ...req.query
        }
        let postUrl = apis[url] || ''
        console.log('============22222=======================')
        console.log(postUrl)
        if(obj.paramsList){
            for (const key in obj.paramsList) {
                if (obj.paramsList.hasOwnProperty(key)) {
                    postUrl = postUrl + '/' + obj.paramsList[key];
                }
            }
        }
        console.log('============33333=======================')
        console.log( postUrl )
        request.get(postUrl, obj, function(data){
            res.json(data);
        },req,res)
    } else {
        res.json({msg: 'url错误'});
    }
});
module.exports = router;
