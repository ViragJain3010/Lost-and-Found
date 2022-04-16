//submit.onclick = function(){
    
const express = require('express')
const mysql = require('mysql')

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database: "items_lost"
})


db.connect(err =>{
    if (err){
        throw err;
    }
    console.log("mySql Connected!");
});
//alert("f2");
const app =express();

app.get('/createdb',(req ,res)=>{
    let sql ="CREATE DATABASE items_lost"
    db.query(sql,err=>{
        if (err){
            throw err;
        }
        res.send('Database Created');
    });
});
//alert("f3");
app.get('/createitemsfound',(req,res)=>{
    let sql ="CREATE TABLE itemsfound ("+
        "Rollno VARCHAR(50),"+
        "email VARCHAR(100),"+
        "contact_info INT,"+
        "description VARCHAR(200),"+
        "photo BLOB);"
    db.query(sql,err=>{
        if (err){
            throw (err);
        }
        res.send('itemsfound table created');
    });
    //alert("f4");
});
/*var contact=document.getElementById("contact_info");
var Rollno=document.getElementById("Rollno");
var Photo=document.getElementById("choose_file");
var mail=document.getElementById("mail_box");
var decription=document.getElementById("descript");*/

    /*app.get('/item',(req,res)=>{
        let post = {Rollno:'fakjafn' ,email:'nafjnakfj@gmail.com',contact_info:8302630094,description:'faefafwafaef',photo:"D:\software\Ritik Jangid\Photo1.jpg"}
        let sql ='INSERT INTO itemsfound SET ?'
        let query= db.query(sql,post,err=>{
            if (err){
                throw(err) 
            }
            res.send('item added')
        })
    })*/
    app.get('/getitem',(req,res)=>{
        let sql=db.query(sql,(err,results)=>{
            if (err){
                throw err
            }
            console.log(results)
            res.send("data fetched!")
        })
    })
    app.listen(3007,()=>{
        console.log('server started on port 3000')
    })
    
//}