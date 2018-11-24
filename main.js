
// all variable
const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // server port

// static 
app.use(express.static(__dirname+"/resource"));

var counter=0;

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

app.route("/home")
    .get( (req,res) =>{
        res.sendFile(__dirname+"/home.html");
    });

app.route("/req").get( (req,res) =>{
    counter++;
    var tmp = counter.toString();
    res.statusCode=200;
    res.send(tmp);
});

app.route("/reqCount").get( (req,res) =>{
    var tmp = counter.toString();
    // res.send(counter);
    res.send(tmp, { 'Content-Type': 'text/plain' }, 200);
   
});



app.route("/test").get( (req,res) =>{
    res.statusCode=200;
    res.sendFile(__dirname+"/testPage.html");
});

app.route("/tmp").get( (req,res) =>{
    res.statusCode=200;
    res.sendFile(__dirname+"/temp.html");
});




app.listen(port, console.log(`Server start on port : ${port}`));
// app.listen(port);





