const alert = require('alert-node')
const express = require('express');
const router = express.Router()
var data = require('../model/ManageLogin')

router.get('/',function(req,res){

    res.render('login');

});

router.post('/',(req,res)=>{
    var d = new data()
    //console.log()
        d.Login(req.body.email,req.body.password,function(result){
        if(result==false){
            res.redirect("back")
        }else{
            //console.log("res "+result.name);
            module.exports.email1 = result.email
            module.exports.name1 = result.name
            module.exports.role1 = result.role
            module.exports.uid1 = result.uid
            res.redirect("dashboard")

        }
    })

})

router.get('/demo/',(req,res)=>{
    //console.log("role "+req.query.role)
    var d = new data()
    console.log()
        d.DemoLogin(req.query.role,function(result){
        if(result==false){
            res.redirect("back")
        }else{
            //console.log("res "+result[0].name);
            module.exports.email1 = result[0].email
            module.exports.name1 = result[0].name
            module.exports.role1 = result[0].role
            module.exports.uid1 = result[0].uid
            res.redirect("../dashboard")

        }
    })

})

module.exports = router
