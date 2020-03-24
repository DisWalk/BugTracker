const alert = require('alert-node')
const express = require('express');
const router = express.Router()
var login = require('./login');
var choice = require('../model/ManageTickets')

router.get('/',function(req,res){
    var d = new choice()
    d.Tickets(function(result){
        if(result!=false || result.length==0){
            if(login.role1 == "admin"){
            res.render('tickets',
            { email: login.email1 ,
                 name: login.name1, 
                 role: login.role1,
                tickets: result    
            })
            }
            else if(login.role1 == "project-manager" || login.role1 == "developer"){
                d.myTicket(login.uid1,function(result1){
                    res.render('tickets',
                { email: login.email1 ,
                     name: login.name1, 
                     role: login.role1,
                    tickets: result1    
                })
                })   
            }
            else if(login.role1 == "client"){
                d.clTicket(login.uid1,function(result1){
                    res.render('tickets',
                { email: login.email1 ,
                     name: login.name1, 
                     role: login.role1,
                    tickets: result1    
                })
                })   
            }
        }
    })
   
});

router.get('/details/',(req,res)=>{
    //res.send(req.query.pid)
    var d = new choice()
    d.TicketDetails(req.query.tid,function(result){
        if(result.length==0 || result!=false){
            d.LogT(req.query.tid,function(result1){
                if(result1.length==0 || result1!=false){
            res.render('ticketDetails',
            { email: login.email1 ,
                 name: login.name1, 
                 role: login.role1,
                tickets: result  ,
                logs: result1  
            })
        }
    })
        }
    })   
})

router.get('/create',function(req,res){
    //console.log(choice.Developers+"\n"+choice.Managers)
    var d = new choice()
d.Dev(function(result){
    console.log("heree"+result)
    //if(result!=false){
        d.Client(function(result1){
            console.log("heree"+result1)
           // if(result1!=false){
                d.ProjectDetails(function(result2){
                    //if(result2!=false){
                        console.log("heree")
                        return res.render('createTicket' ,
                        {   email: login.email1 , 
                            name: login.name1, 
                            role: login.role1,
                            dev1: result,
                            client1: result1,
                            project1: result2
                        })
                      //  }
                })

           // }
        })      
   // }
})

});

router.post('/',function(req,res){
    //res.send(req.body.name+req.body.desc+req.body.man+req.body.dev)
  console.log(req.body)
    var d = new choice()
    console.log("idss "+login.uid1)
    if(login.role1=="admin"){
    d.Insert(req.body.name,req.body.desc,req.body.developer,req.body.client,req.body.project,req.body.priority,req.body.type,req.body.status,function(result1){
        if(result1==true){
            d.Tickets(function(result){
                if(result!=false){
                    res.render('tickets',
                    { email: login.email1 ,
                         name: login.name1, 
                         role: login.role1,
                        tickets: result    
                    })
                }
            })
             }
    })}
    if(login.role1=="client"){
        d.Dev(function(resz){
            d.Insert(req.body.name,req.body.desc,resz[0].uid,login.uid1,req.body.project,"important",req.body.type,"incomplete",function(result1){
                if(result1==true){
                    d.Tickets(function(result){
                        if(result!=false){
                            res.render('tickets',
                            { email: login.email1 ,
                                 name: login.name1, 
                                 role: login.role1,
                                tickets: result    
                            })
                        }
                    })
                     }
            })
        })
        }
})

router.get('/delete',(req,res)=>{
    var d = new choice()
    //console.log(req.body)
    d.Delete(req.query.tid,function(result2){
    if(result2==true){
    alert("deletion successful")
    res.redirect("../tickets")
    }
})              
})

router.get('/edit/',(req,res)=>{
    console.log("tid "+req.query.tid)
    //var d = new choice()
    //console.log(req.body)
    //res.render("ticketEdit")
    var d = new choice()
    d.Dev(function(result){
        if(result!=false){
            d.Client(function(result1){
                if(result1!=false){
                    d.ProjectDetails(function(result2){
                        if(result2!=false){
                            d.TicketDetails(req.query.tid,function(result3){
                                if(result3!=false){
                                    res.render("ticketEdit",{
                                        email: login.email1 , 
                                        name: login.name1, 
                                        role: login.role1,
                                        dev1: result,
                                        client1: result1,
                                        project1: result2,
                                        ticketD: result3
                                    })
                                }
                           
                            })
                        }
                    })     
                }
                })
        }
    })
})

router.post('/details',(req,res)=>{
    var d = new choice()
    //console.log(typeof req.body.status)
   // console.log(req.body)
  if(login.role1=="admin"){ 
  //  console.log(req.query.tid+req.body.name+req.body.desc+"\ndev\n"+req.body.devs+"\ndev\n"+req.body.client+req.body.project+req.body.priority+req.body.status+req.body.type)
  if(req.body.devs=="" || req.body.client=="" || req.body.project=="" || req.body.priority=="" || req.body.status=="" || req.body.type=="" || req.body.name=="" || req.body.desc=="" || typeof req.body.status=='undefined'){
    alert("fields cant be empty!")
    res.redirect("back")
    }else{
    d.Update(req.query.tid,req.body.name,req.body.desc,req.body.devs,req.body.client,req.body.project,req.body.priority,req.body.status,req.body.type,function(result2){
    if(result2!=false){
    alert("update success!")
    res.redirect("../tickets/details?tid="+req.query.tid)
    }
    })   
    }
    }

    if(login.role1=="project-manager"){
       // console.log(req.query.tid+req.body.name+req.body.desc+"\ndev\n"+req.body.devs+"\ndev\n"+req.body.priority)
        if(req.body.devs=="" || req.body.priority==""){
            alert("fields cant be empty!")
            res.redirect("back")
        }else{
        d.TicketDetails(req.query.tid,function(resz){
            //res[0].assigned_dev
            d.Update(req.query.tid,resz[0].title,resz[0].description,req.body.devs,resz[0].submitter,resz[0].project,req.body.priority,resz[0].status,resz[0].type,function(result2){
                if(result2!=false){
                alert("update success!")
                res.redirect("../tickets/details?tid="+req.query.tid)
                }
                }) 
        })
        } 
    }

    if(login.role1=="developer"){
        // console.log(req.query.tid+req.body.name+req.body.desc+"\ndev\n"+req.body.devs+"\ndev\n"+req.body.priority)
         if(req.body.type=="" || req.body.priority=="" || typeof req.body.status=='undefined'){
             alert("fields cant be empty!")
             res.redirect("back")
         }else{
         d.TicketDetails(req.query.tid,function(resz){
             //res[0].assigned_dev
             d.Update(req.query.tid,resz[0].title,resz[0].description,resz[0].assigned_dev,resz[0].submitter,resz[0].project,req.body.priority,req.body.status,req.body.type,function(result2){
                 if(result2!=false){
                 alert("update success!")
                 res.redirect("../tickets/details?tid="+req.query.tid)
                 }
                 }) 
         })
         } 
     }

     if(login.role1=="client"){
        // console.log(req.query.tid+req.body.name+req.body.desc+"\ndev\n"+req.body.devs+"\ndev\n"+req.body.priority)
         if(req.body.type=="" || req.body.project=="" || req.body.name=="" || req.body.desc=="" || req.body.status==""){
             alert("fields cant be empty!")
             res.redirect("back")
         }else{
         d.TicketDetails(req.query.tid,function(resz){
             //res[0].assigned_dev
             d.Update(req.query.tid,req.body.name,req.body.desc,resz[0].assigned_dev,resz[0].submitter,req.body.project,resz[0].priority,req.body.status,req.body.type,function(result2){
                 if(result2!=false){
                 alert("update success!")
                 res.redirect("../tickets/details?tid="+req.query.tid)
                 }
                 }) 
         })
         } 
     }
       //console.log(result3)             
})

module.exports = router
