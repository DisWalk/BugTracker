const alert = require('alert-node')
const express = require('express');
const router = express.Router()
var login = require('./login');
var choice = require('../model/ManageProjects')

router.get('/',function(req,res){
    var d = new choice()
    d.Projects(function(result){
        if(result!=false || result.length==0){
            if(login.role1 == "admin"){
            res.render('projects',
            { email: login.email1 ,
                 name: login.name1, 
                 role: login.role1,
                projects: result    
            })
            }
           else if(login.role1 == "project-manager"){
               console.log("pp")
            d.pmProject(login.uid1,function(result2){
                res.render('projects',
                { email: login.email1 ,
                     name: login.name1, 
                     role: login.role1,
                    projects: result2    
                })
            })    
            }
        }
    })
   

     
});

router.get('/create',function(req,res){
    //console.log(choice.Developers+"\n"+choice.Managers)
    var d = new choice()
d.Members(function(result){
    if(result!=false){
        var dev=[],man=[]
        for(var i=0;i<result.length;i++){
            if(result[i].role=="project-manager")
            man.push(result[i].name)
            else if(result[i].role=="developer")
            dev.push(result[i].name)
        }
        return res.render('createProject' ,
            {   email: login.email1 , 
                name: login.name1, 
                role: login.role1,
                dev1: dev,
                man1: man
            })
   
    }
})

});

router.post('/',function(req,res){
    //res.send(req.body.name+req.body.desc+req.body.man+req.body.dev)
  //console.log(req.body.dev[0])
    var d = new choice()
    d.Insert(req.body.name,req.body.desc,req.body.man,req.body.dev,function(result){
        if(result==true){
            d.Projects(function(result1){
                if(result1!=false){
                    alert("creation success!")
                    res.render('projects',
                    { email: login.email1 ,
                         name: login.name1, 
                         role: login.role1,
                        projects: result1    
                    })
                }
            })
             }
    })
})

router.get('/details/',(req,res)=>{
    //res.send(req.query.pid)
   var d = new choice()
   d.ProjectDetails(req.query.pid,function(result){
       if(result!=false){
                    d.Users(req.query.pid,function(result1){
                        if(result1!=false){
                    //     console.log("ooo "+result1[1].uid)
                       
                           d.UserDetails(result1,(rez)=>{
                               var arr=[]
                               for(var i=0;i<rez.length;i++){
                                //console.log("res "+rez[i].name)
                                arr.push(rez[i])
                                }
                                //console.log(arr)
                                d.TicketDetails(req.query.pid,(resul)=>{
                                    if(resul.length==0 || resul!=false){
                                        d.LogP(req.query.pid,(resultt)=>{    
                                            if(resultt.length==0 || resultt!=false){
                                                d.LogA(req.query.pid,(resultz)=>{
                                                    console.log("doja "+resultz)
                                                    if(resultz.length==0 || resultz!=false){
                                                        console.log("ll "+resultt.length)
                                        res.render('projectDetails',
                                { email: login.email1 ,
                                        name: login.name1, 
                                        role: login.role1,
                                    projects: result,
                                    details: arr,
                                    tickets: resul,
                                    logp: resultt,
                                    loga: resultz
                                })
                        }
                                                })
                                   }
                                })
                            }
                                })
                                
                           })
                           
                    //  console.log("arr "+resArray)
                        
                        }
                    })
                   
               }
    })
    
        
   
})

router.get('/edit/',(req,res)=>{
    console.log("pid "+req.query.pid)
    var d = new choice()
    d.Members(function(result){
        if(result!=false){
            var dev=[],man=[]
            for(var i=0;i<result.length;i++){
                if(result[i].role=="project-manager")
                man.push(result[i])
                else if(result[i].role=="developer")
                dev.push(result[i])
            }
            d.ProjectDetails(req.query.pid,function(result1){
                if(result1!=false){
                    return res.render('projectEdit' ,
                    {   email: login.email1 , 
                        name: login.name1, 
                        role: login.role1,
                        uid : login.uid1,
                        dev1: dev,
                        man1: man,
                        project: result1
                    })
           
                }
            })
            
        }
    })
})

router.post('/details',(req,res)=>{
    var d = new choice()
    console.log(req.body)
    
    if(login.role1=="project-manager"){
    d.Update(req.query.pid,req.body.name,req.body.desc,login.uid1,req.body.dev,function(result2){
        alert("update success!")
        res.redirect("../projects/details?pid="+req.query.pid)
        }) 
    }  else {
        d.Update(req.query.pid,req.body.name,req.body.desc,req.body.man,req.body.dev,function(result2){
            alert("update success!")
            res.redirect("../projects/details?pid="+req.query.pid)
        })
    }             
        
})

router.get('/delete',(req,res)=>{
    var d = new choice()
    //console.log(req.body)
    d.Delete(req.query.pid,function(result2){
    if(result2==true){
    alert("deletion successful")
    res.redirect("../projects")
    }
})              
})
//console.log(rows.length)



module.exports = router
