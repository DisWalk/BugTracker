const crypto = require('crypto');

class ValidateRegister {
    
    constructor(name,email,role,password,password2){
        this.name = name;
        this.email = email;
        this.role = role;
        this.password = password;
        this.password2 = password2;

    }

    validateName() {
        if (this.name == "") {
          // console.log();
           return false;
          }
          var regName =  /^[a-zA-Z ]*$/;;
          if(!regName.test(this.name)){
            
            return false;
          }
        return this.name;
    }

    validateEmail(){
        if (this.email == ""){
            return false;
        }
        return this.email;
    }

    validateRole(){
        if (this.role == ""){
            
            return false;
        }
        return this.role;
    }

    validatePassword(){
        if (this.password == "" || this.password2 == ""){
            return 1;
        }
        if (this.password != this.password2){
            return 2;
        }
        if (this.password.length < 4 ){
            return 3;
        }
        var regName =  /^[a-zA-Z0-9]+$/;
        if(!regName.test(this.password)){
            return 4;
        }
        var hash = crypto.createHash('sha256').update(this.password).digest('hex');
       // console.log(hash);
        return hash;
    }

}


module.exports = ValidateRegister
