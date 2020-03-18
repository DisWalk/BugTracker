const con = require(".");
const alert = require('alert-node')

class ManageProjects {

    constructor(){}

    Members(callback) {
   
    let sql = `select * from users`;
    con.query(sql,(err,rows)=>{
        if(!err){
            return callback(rows)
        }else{
            return callback(false)
        }
      })
    }

    pmProject(uid,callback) {
        console.log(uid)
        let sql = `select p.* from project p,assignment a,users u where u.uid=${uid} and u.uid=a.uid and p.pid=a.pid`;
        con.query(sql,(err,rows)=>{
            if(!err){
                console.log(rows)
                 return callback(rows)   
            }else{
                console.log(err)
                return callback(false)
            }
          })
        }

    Projects(callback) {
        let sql = `select * from project`;
        con.query(sql,(err,rows)=>{
            if(!err){
                return callback(rows)
            }else{
                return callback(false)
            }
          })
        }
   
        ProjectDetails(pid,callback) {
            let sql = `select * from project where pid='${pid}'`;
            con.query(sql,(err,rows)=>{
                if(!err){
                    return callback(rows)
                }else{
                    return callback(false)
                }
              })
            }    

            TicketDetails(pid,callback) {
                let sql = `select * from ticket where project='${pid}'`;
                con.query(sql,(err,rows)=>{
                    if(!err){
                        return callback(rows)
                    }else{
                        return callback(false)
                    }
                  })
                }    

            Users(pid,callback) {
                let sql = `select uid from assignment where pid='${pid}'`;
                con.query(sql,(err,rows)=>{
                    if(!err){
                        return callback(rows)
                    }else{
                        return callback(false)
                    }
                  })
                }    

            UserDetails(uid,callback){
                var s="("
               for(var i=0;i<uid.length;i++){
                    if(i==uid.length-1)
                    s=s+uid[i].uid
                    else
                    s=s+uid[i].uid+","
               }
               s=s+")"
               //console.log("s "+s)
                let sql = `select * from users where uid in${s}`;
                con.query(sql,(err,rows)=>{
                    if(!err){
                        return callback(rows)
                    }else{
                        console.log(err)
                        return callback(false)
                    }
                  })
                }    
            
    

    Insert(name,desc,man,dev,callback){
        let sql=`insert into project(name,description) values('${name}','${desc}')`
        con.query(sql,(err)=>{
            if(!err){
                var pids=[]
                let sql1 = `select pid from project where name='${name}'`
                con.query(sql1,(err,rows)=>{
                    if(!err){
                    pids.push(rows[0].pid)
                    }
                })
                let sql2=``,sql3=``
                for(var i=0;i<dev.length;i++){
                sql2 = `select uid from users where name='${dev[i]}'`
                con.query(sql2,(err,rows)=>{
                    if(!err){
                    sql3 = `insert into assignment values('${pids[0]}','${rows[0].uid}')`
                    con.query(sql3)
                }
                })
                }
                //console.log("man "+man.length)
                let sql4 = `select uid from users where name='${man}'`
                con.query(sql4,(err,rows)=>{
                    if(!err){
                        sql3 = `insert into assignment values('${pids[0]}','${rows[0].uid}')`
                        con.query(sql3)
                    }
                })

                return callback(true)
            }
            else{
                return callback(false);
            }
        })
        
    }

    Update(pid1,name,desc,man,dev,callback){
        //console.log(pid1+"\n"+name+"\n"+desc+"\n"+man+"\n"+dev)
        let sql=`update project set name='${name}',description='${desc}' where pid=${pid1}`
        con.query(sql,(err)=>{
            if(!err){
                let sql2=`delete from assignment where pid=${pid1}`
                con.query(sql2,(err,rows)=>{
                    if(err)
                    console.log(err)
                })
                sql2=`insert into assignment values(${pid1},'${man}')`
                con.query(sql2,(err,rows)=>{
                    if(err)
                    console.log(err)
                })
                let sql3=``
                for(var i=0;i<dev.length;i++){
                sql3 = `insert into assignment values(${pid1},'${dev[i]}')`
                con.query(sql3,(err,rows)=>{
                    if(err)
                    console.log(err)
                })
                }
                //console.log("man "+man.length)
                return callback(true)
            }
            else{
                console.log(err)
                return callback(false);
            }
        })
        
    }

    Delete(pid,callback) {
        let sql = `delete from project where pid='${pid}'`;
        con.query(sql,(err)=>{
            if(!err){
                return callback(true)
            }else{
                return callback(false)
            }
          })
        } 
        
        LogP(pid,callback) {
            let sql = `select * from historyProject where pid = ${pid} order by ts desc;`;
            con.query(sql,(err,rows)=>{
                if(!err){
                    return callback(rows)
                }else{
                    return callback(false)
                }
              })
            }  
        
            LogA(pid,callback) {
                let sql = `select * from historyAssignment where pid = ${pid} order by ts desc;`;
                con.query(sql,(err,rows)=>{
                    if(!err){
                        var s="("
               for(var i=0;i<rows.length;i++){
                    if(i==rows.length-1)
                    s=s+rows[i].uid
                    else
                    s=s+rows[i].uid+","
               }
               s=s+")"
               console.log("s "+s)
                            let sql2 = 
`select users.*,historyAssignment.ts from users,historyAssignment where users.uid=historyAssignment.uid and users.uid in ${s}`
                            con.query(sql2,(err1,rowz)=>{
                                if(!err1){
                                    return callback(rowz)
                                }
                            })
                        
                    }else{
                        return callback(false)
                    }
                  })
                }  

}


module.exports = ManageProjects
