const alert = require('alert-node')
const express = require('express');
const router = express.Router()
var login = require('./login');
var data = require('../model/ManageLogin')


router.get('/',function(req,res){
    //console.log("id "+login.uid1);
    var d = new data()
    d.countProject(login.role1,login.uid1,function(result){
        //if(result!=false){ 
            d.countRole(login.role1,login.uid1,function(result1){
                if(result1==false) result1=0
                console.log(result1)
                d.countTicket(login.role1,login.uid1,function(result2){
                    //if(result2!=false){
                        console.log("res2"+result2)
                        d.countPri(login.role1,login.uid1,function(result3){
                            //if(result3!=false){ 
                                console.log("res3"+result3)
                                return res.render('dashboard' ,
                                { email: login.email1 , 
                                    name: login.name1 , 
                                    role: login.role1 ,
                                    project : result ,
                                    ticket : result2 ,
                                    rolec : result1 ,
                                    pri : result3
                                })
                            //}
                        })                
                    //}
                })
               // }
            })
       // }
    })
    

});

/*router.get('/', function(req, res){
    res.send('id: ' + req.query.id);
});*/
  
module.exports = router