// use npm start
const mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "bug",
    multipleStatements: true
});

con.connect((err)=>{
    if(!err){
        console.log("success");
    }else{
        console.log("failed"+err);
    }
})

module.exports = con