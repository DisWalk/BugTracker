const con = require(".");
const alert = require('alert-node')

class ManageRegister {

    constructor(name, email, role, password) {
        this.name = name
        this.email = email
        this.role = role
        this.password = password
    }

    insertData() {
        let sql = `select * from users where email = '${this.email}'`;
        con.query(sql, (err, rows) => {
            var r = rows.length
            if (r != 0 && !err) {
                alert("already present")
            } else {
                sql = `insert into users(name,email,password,role) values ('${this.name}','${this.email}','${this.password}', '${this.role}')`;

                con.query(sql, (err) => {
                    if (!err) {
                        return true;
                    } else {
                        return false;
                    }
                })
                alert("registeration successful!")

            }
        })


    }

}
module.exports = ManageRegister