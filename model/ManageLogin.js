const con = require(".");
const alert = require('alert-node')
const crypto = require('crypto');

class ManageLogin {

 Login(email,password,callback) {
     if(email.length==0){
     alert("please enter email!")
     return callback(false)
    }
    var hash = crypto.createHash('sha256').update(password).digest('hex');
    let sql = `select * from users where email = '${email}'`;
    con.query(sql,(err,rows)=>{
        var r = rows.length
        if(r==0 && !err){
            alert("not registered!")
            return callback(false)
        }else{
            sql = `select * from users where email = '${email}' and password = '${hash}'`;
            con.query(sql,(err,rows)=>{
                var r1 = rows.length
                if(r1==0 && !err){
                    alert("invalid credentials")
                    return callback(false)
                }else{
                    //console.log("data "+rows[0].name)
                    //return callback(rows[0].email) 
                    return callback(rows[0])
                }
              })

        }
      }) 


    }

    DemoLogin(role,callback){
        if(role == "admin"){
            let sql = `select * from users where role = "admin" ORDER BY RAND () LIMIT 1`
            con.query(sql,(err,rows)=>{
                if(!err){
                    return callback(rows)
                }
                else{
                    return callback(false)
                }
            })
        }
        if(role == "project-manager"){
            let sql = `select * from users where role = "project-manager" ORDER BY RAND () LIMIT 1`
            con.query(sql,(err,rows)=>{
                if(!err){
                    return callback(rows)
                }
                else{
                    return callback(false)
                }
            })
        }
        if(role == "developer"){
            let sql = `select * from users where role = "developer" ORDER BY RAND () LIMIT 1`
            con.query(sql,(err,rows)=>{
                if(!err){
                    return callback(rows)
                }
                else{
                    return callback(false)
                }
            })
        }
        if(role == "client"){
            let sql = `select * from users where role = "client" ORDER BY RAND () LIMIT 1`
            con.query(sql,(err,rows)=>{
                if(!err){
                    return callback(rows)
                }
                else{
                    return callback(false)
                }
            })
        }
    }

    countRole(role,uid,callback){
        if(role == "admin"){
            let sql = `select count(*) as cnt,role from users group by role`
            con.query(sql,(err,rows)=>{
                if(!err){
                    return callback(rows)
                }
                else{
                    return callback(false)
                }
            })
        }
        if(role == "project-manager"){
            let sql = 
            `select count(*) as  cnt ,role from users where uid in (
                select uid from assignment where pid = ( select pid from assignment where uid = ${uid}) union
                select submitter as uid from ticket where project = ( select pid from assignment where uid=${uid} )
                ) and not role = "project-manager" group by role order by role;`
            con.query(sql,(err,rows)=>{
                if(!err){
                    return callback(rows)
                }
                else{
                    return callback(false)
                }
            })
        }
        if(role == "developer"){
            let sql = 
            `select count(*) as  cnt ,role from users where uid in (
                select submitter from ticket where project = ( select pid from assignment where uid=${uid} ) ) group by role order by role`
            con.query(sql,(err,rows)=>{
                if(!err){
                    return callback(rows)
                }
                else{
                    return callback(false)
                }
            })
        }
        if (role == "client")
        return callback(false)
       
    }

    countProject(role,uid,callback){
        if(role == "admin"){
            let sql = `select count(*) as cnt from project;`
            con.query(sql,(err,rows)=>{
                if(!err){
                    return callback(rows)
                }
                else{
                    return callback(false)
                }
            })
        }
        if(role == "project-manager" || role == "developer"){
            let sql = `select count(pid) as cnt from assignment where uid =  ${uid}`
            con.query(sql,(err,rows)=>{
                if(!err){
                    return callback(rows)
                }
                else{
                    return callback(false)
                }
            })
        }
        if (role == "client")
        return callback(false)

    }

    countTicket(role,uid,callback){
        if(role == "admin"){
            let sql = `select count(*) as cnt from ticket`
            con.query(sql,(err,rows)=>{
                if(!err){
                    return callback(rows)
                }
                else{
                    return callback(false)
                }
            })
        }
        if(role == "project-manager" || role == "developer"){
            let sql = `select count(*) as cnt from ticket where project in (select pid from assignment where uid = ${uid})`
            con.query(sql,(err,rows)=>{
                if(!err){
                    return callback(rows)
                }
                else{
                    return callback(false)
                }
            })
        }
        if(role == "client"){
            let sql = `select count(*) as cnt from ticket where submitter = ${uid}`
            con.query(sql,(err,rows)=>{
                if(!err){
                    return callback(rows)
                }
                else{
                    return callback(false)
                }
            })
        }
        

    }

    countPri(role,uid,callback){
            if(role == "admin"){
            let sql = `select count(*) as cnt,priority from ticket group by priority`
            con.query(sql,(err,rows)=>{
                if(!err){
                   // console.log(rows)
                    return callback(rows)
                }
                else{
                    return callback(false)
                }
            })
        }
        if(role == "project-manager" || role == "developer"){
            let sql =
             `select count(t.tid) as cnt,t.priority from ticket t inner join assignment a where t.project = a.pid and a.uid=${uid} group by t.priority`
            con.query(sql,(err,rows)=>{
                if(!err){
                   // console.log(rows)
                    return callback(rows)
                }
                else{
                    return callback(false)
                }
            })
        }
        if (role == "client"){
            let sql =
             `select count(tid) as cnt,priority from ticket where submitter=${uid} group by priority`
            con.query(sql,(err,rows)=>{
                if(!err){
                    return callback(rows)
                }
                else{
                    return callback(false)
                }
            })
        }
        

    }

}
module.exports = ManageLogin