const express = require('express');
const path = require('path');
const port =process.env.PORT || 8080;
const app = express();
const bodyParser = require("body-parser");
const registerController = require("./controllers/register")
const loginController = require("./controllers/login")
const dashboardController = require("./controllers/dashboard")
const rolesController = require("./controllers/userRoles")
const projectController = require("./controllers/project")
const ticketController = require("./controllers/ticket")

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended: true})); // middleware
app.use(express.static('assets'));
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use("/dashboard",dashboardController) 
app.use("/register",registerController) 
app.use("/",loginController) 
app.use("/userRoles",rolesController) 
app.use("/projects",projectController) 
app.use("/tickets",ticketController) 

app.listen(port,function(err){
    if(err)
    console.log('error ',err);
    console.log('running on ',port);
});
