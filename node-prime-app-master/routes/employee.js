const dbops=require("../db/dbops")
const express = require("express")
const route = express.Router()

route.post("/store",function(request,response){
const data=
    {
     eno:request.body.eno,
     name:request.body.name,
     address:request.body.address,
     designation:request.body.designation,
     experience:request.body.experience,
     skills:request.body.skills
    }
   dbops.insert(data.eno,data.name,data.address,data.designation,data.experience,data.skills,function(err,data){
       if(err)
       {
         console.log(err)
       
         response.status(500).send("Unable to insert")
        }
       else
         response.send("data Successfully inserted")
   })
})


route.get("/report",function(request,response){
  dbops.getEmployee(function(err,data){
             if(err)
             {
              console.log(err)
                response.send("Unable to load data")
              }
             else
                response.render("employee",{employee:data,programmer:"sp"})
  })
})

//render will call template mentioned in the parameter
//it will look for file called people with extension of configured template engines
//template engine is something which takes a script input executes it and produces html output

module.exports = route
