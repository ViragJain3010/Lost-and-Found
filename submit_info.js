var contact=document.getElementById("contact_info");
var Rollno=document.getElementById("Rollno");
var Photo=document.getElementById("choose_file");
var mail=document.getElementById("mail_box");
var decription=document.getElementById("descript");
submit.onclick = function(){
    
    
    const express = require('express')
    const mysql1 = require('mysql')
    const db = mysql1.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database: "items_lost"
    });

    db.connect(err =>{
        alert("f");
        if (err){
            alert(err);
        }
        alert("mySql Connected!");
    });

    const app1 =express();
    app.get('/item',(req,res)=>{
        let post = {Rollno: Rollno.value ,email:mail.com,contact_info:8302630094,description:'faefafwafaef',photo:"D:\software\Ritik Jangid\Photo1.jpg"}
        let sql ='INSERT INTO itemsfound SET ?'
        let query= db.query(sql,post,err=>{
            if (err){
                alert(err) 
            }
            res.send('item added')
        })
    })
    
    app1.listen(3006,()=>{
        console.log('server started on port 3000')
    })

};