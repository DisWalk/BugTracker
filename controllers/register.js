const alert = require('alert-node')
const express = require('express');
const router = express.Router()
const v = require('../model/ValidateRegister')
var data = require('../model/ManageRegister')

router.get('/',function(req,res){

    res.render('register');

});

router.post('/',function(req,res){
var val = new v(req.body.name,req.body.email,req.body.role,req.body.password,req.body.password2);
var name = val.validateName()
var role = val.validateRole()
var email = val.validateEmail()
var pwd = val.validatePassword()
if(name == false) {
    alert("Name must contain alphabets only"); 
    res.redirect("back");
    return
}
if(role == false) {
    alert("Role must be selected"); 
    res.redirect("back");
    return 
}
if(email == false) {
    alert("Email must be filled out"); 
    res.redirect("back");
    return
}
if(pwd == 1) {
    alert("Password must be filled out"); 
    res.redirect("back");
    return
}

else if (pwd == 2) {
    alert("Passwords must match"); 
    res.redirect("back");
    return
}
else if (pwd == 3) {
    alert("Password length must be atleast 4"); 
    res.redirect("back");
    return
}
else if (pwd == 4) {
    alert("Password must be alphanumeric"); 
    res.redirect("back");
    return
}

var d = new data(name,email,role,pwd);

d.insertData()
res.redirect("/");

});

module.exports = router
