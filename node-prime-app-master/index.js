const express = require("express")
 const app = express()
 const path =require("path")
const employee = require('./routes/employee')
const api=require('./routes/api')
const ormapi=require('./orm/routes')
 
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.set('views', path.join(__dirname, 'public/views'));//setting the path of template files
app.set('view engine', 'pug'); //configuring view Engine

 app.use(express.static(path.join(__dirname,"public/styles")))
 app.use(express.static(path.join(__dirname,"public/scripts")))
 app.use(express.static(path.join(__dirname,"node_modules/bootstrap/dist/css")))
 app.use(express.static(path.join(__dirname,"node_modules/bootstrap/dist/js")))

 app.use ("/employee",employee)
 app.use("/employeeapi",api)
 app.use("/orm",ormapi)
 
 app.get("/",function(request,response){
     response.send("Node js is working...!!!")
 })

 app.get("/home",function(request,response){
     response.sendFile(path.join(__dirname,'public/index.html'))
 })
/*
 app.get("/styles/index.css",function(request,response){
    response.sendFile(path.join(__dirname,'public/styles/index.css'))
})*/
 app.listen("8000",function(){
     console.log("server is running on port 8000")
 })