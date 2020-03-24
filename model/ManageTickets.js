const con = require(".");
const alert = require('alert-node')

class ManageTickets {

    constructor() {}

    Tickets(callback) {
        let sql = `select * from ticket`;
        con.query(sql, (err, rows) => {
            if (!err) {
                return callback(rows)
            } else {
                return callback(false)
            }
        })
    }

    myTicket(uid,callback) {
        let sql = `select t.* from ticket t,assignment a,users u,project p where u.uid=${uid} and u.uid=a.uid and p.pid=t.project and p.pid=a.pid`        
        con.query(sql,(err,rows)=>{
            if(!err){
                 return callback(rows)   
            }else{
                console.log(err)
                return callback(false)
            }
          })
        }

        clTicket(uid,callback) {
            let sql = `select * from ticket where submitter=${uid}`        
            con.query(sql,(err,rows)=>{
                if(!err){
                     return callback(rows)   
                }else{
                    console.log(err)
                    return callback(false)
                }
              })
            }

    ProjectDetails(callback) {
        let sql = `select * from project`;
        con.query(sql, (err, rows) => {
            if (!err) {
                if(rows[0]==undefined)
                return callback(0)
                return callback(rows)
            } else {
                return callback(false)
            }
        })
    }

    TicketDetails(tid, callback) {
        let sql = `select * from ticket where tid='${tid}'`;
        con.query(sql, (err, rows) => {
            if (!err) {
                return callback(rows)
            } else {
                return callback(false)
            }
        })
    }

    Dev(callback) {
        let sql = `select * from users where role="developer"`;
        con.query(sql, (err, rows) => {
            if (!err) {
                if(rows[0]==undefined)
                return callback(0)
                return callback(rows)
            } else {
                return callback(false)
            }
        })
    }

    Client(callback) {
        let sql = `select * from users where role="client"`;
        con.query(sql, (err, rows) => {
            if (!err) {
                if(rows[0]==undefined)
                return callback(0)
                return callback(rows)
            } else {
                return callback(false)
            }
        })
    }

    Insert(name, desc, dev, client, project, priority, type, status, callback) {
        let sql = `insert into ticket values(0,'${name}','${desc}',${dev},${client},${project},'${priority}','${status}','${type}',now())`
        con.query(sql, (err) => {
            if (!err) {
                return callback(true)
            } else {
                console.log(err)
                return callback(false);
            }
        })

    }

    Delete(tid,callback) {
        let sql = `delete from ticket where tid='${tid}'`;
        con.query(sql,(err)=>{
            if(!err){
                return callback(true)
            }else{
                return callback(false)
            }
          })
        }  

        Update(tid1,name,desc,dev,sub,pro,pri,st,ty,callback){
            //console.log(pid1+"\n"+name+"\n"+desc+"\n"+man+"\n"+dev)
          // console.log("d "+dev)
            let sql=`update ticket set title='${name}',description='${desc}',submitter=${sub},assigned_dev=${dev},project=${pro},priority='${pri}',status='${st}',type='${ty}' where tid=${tid1}`
            con.query(sql,(err)=>{
                if(!err){
                    return callback(true)
                }
                else{
                    console.log(err)
                    return callback(false);
                }
            })
            
        }

        LogT(tid,callback) {
            let sql = `select * from historyTicket where tid='${tid}' order by ts desc`;
            con.query(sql,(err,rows)=>{
                if(!err){
                    return callback(rows)
                }else{
                    return callback(false)
                }
              })
            }  
    
}


module.exports = ManageTickets