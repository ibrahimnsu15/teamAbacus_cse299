
// all module
const express = require("express");
const app = express();
var mysql = require('mysql');

const port = process.env.PORT || 3000; // server port

// database connection
var connection = mysql.createConnection({
    host: "sql12.freemysqlhosting.net",
    user: "sql12267776",
    password: "Gy4QVm3LlA",
    database: "sql12267776",
    port: 3306
});

// static 
app.use(express.static(__dirname+"/resource"));

var counter=0;

// Middleware
const middleware = (req,res,next)=>{
    console.log(req.method +" "+req.url);   
    next();
}
app.use(middleware);


/// all route
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
    var time = getTime();
    var date = getDate();
    var sql = "insert into detect_history (count,id,time,date) values ("+counter+",1,'"+time+"','"+date+"')";

    connection.query(sql, (err,result)=>{
        if (err) throw new Error("Database error!!");
        console.log("1 data inserted!!");
    });


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

app.route("/listQuery").get( (req,res) =>{
    res.statusCode=200;
    connection.query("select  * from detect_history order by serial desc", (err,result,fields)=>{
        if (err) throw new Error("Database error!!");
        res.json(result);
    });
});




app.listen(port, console.log(`Server start on port : ${port}`));
// app.listen(port);


// my funtion

function getTime(){

    var time  = new Date();

    var hour = time.getHours()+6;
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var meridian="am"
    if(hour>12){
        hour=hour%12;
        meridian = "pm"
    }
    var t = time.getHours()+":"+time.getMinutes()+":"+time.getSeconds()+" "+meridian;
    return t;
}

function getDate(){

    var date  = new Date();
    
    var days = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'];


    var d = days[date.getDay()]+" "+date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear();
    return d;
}



