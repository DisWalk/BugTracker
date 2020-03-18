const alert = require('alert-node')
const express = require('express');
const router = express.Router()
var login = require('./login');
var data = require('../model/ManageUserRoles')

router.get('/',function(req,res){
    //console.log("var "+sourceFile.id1);
    var d = new data()
    console.log(d.Users(function(result){
        if(result==false){

        }else{
           // console.log("res "+result[0].name);
            return res.render('userRoles' ,
            {   email: login.email1 , 
                name: login.name1, 
                role: login.role1,
                res:  result
            })
        }
    }))
    
    
});

router.post('/',(req,res)=>{
   console.log(req.body.role+req.body.name)
   if(req.body.role.length==0 || req.body.name.length==0)
   alert("assign role to proceed!")
   else{
   var d = new data();
        d.UpdateRoles(req.body.name,req.body.role,function(result){
                if(result==false){
                    alert("error in update")
                    res.redirect("back")
                }else{
                    alert("role update successful")
                    res.redirect("back")
                }
        })
    }
   
})
/*router.get('/', function(req, res){
    res.send('id: ' + req.query.id);
});*/
router.get('/delete',(req,res)=>{
    var d = new data();
    //console.log(req.body)
    d.Delete(req.query.uid,function(result2){
    if(result2==true){
    alert("deletion successful")
    res.redirect("back")
    }
})              
})

module.exports = router
