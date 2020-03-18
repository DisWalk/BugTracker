const con = require(".");

class ManageUserRoles {

    constructor(){}

 Users(callback) {
   
    let sql = `select * from users`;
    con.query(sql,(err,rows)=>{
        if(!err){
            return callback(rows)
        }else{
            return callback(false)  
        }
      })
    }

    UpdateRoles(name,role,callback){
    let sql = `update users set role = '${role}' where name = '${name}'`;
        con.query(sql,(err)=>{
        if(!err){
            return callback(true)
        }else{
            return callback(false)

        }
      }) 
    }

    Delete(uid,callback){
        let sql = `delete from users where uid = ${uid}`;
            con.query(sql,(err)=>{
            if(!err){
                return callback(true)
            }else{
                return callback(false)
    
            }
          }) 
        }

}
module.exports = ManageUserRoles