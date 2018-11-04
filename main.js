
// all variable
const express = require("express");
const app = express();
const port = process.env.port || 3000; // server port

// static 
app.use(express.static(__dirname+"/resource"));


// Middleware
const middleware = (req,res,next)=>{
    console.log(req.method +" "+req.url);   
    next();
}
app.use(middleware);

app.route("/")
    .get( (req,res) =>{
        res.sendFile(__dirname+"/loginPage.html");
    });
app.route("/signup")
    .get( (req,res) =>{
        res.sendFile(__dirname+"/signup.html");
    });


app.listen(port, console.log(`Server start on port no : ${port}`));





