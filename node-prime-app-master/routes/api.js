const dbops=require("../db/dbops")
const express = require("express")
const route = express.Router()

route.get("/employee",function(request,response){
    dbops.getEmployee(function(err,data){
        if(err)
           response.status(500).send("Unable to retrieve")
        else
           response.json(data)
    })
})


route.get("/employee/:eno",function(request,response){
    let eno=request.params.sno
    dbops.getPerson(eno,function(err,data){
        if(err)
           response.status(500).send("Unable to retrieve")
        else
           response.json(data[0]?data[0]:"{}")
    })
})

route.delete("/employee/:eno",function(request,response){
    let eno=request.params.eno
    dbops.deletePerson(eno,function(err,data){
        if(err)
           response.status(500).send("Unable to retrieve")
        else
           response.send("successfully Deleted");
    })
})

route.put("/employee/:eno",function(request,response){
    let eno=request.params.eno

 dbops.getPerson(eno,function(err,data){
     if(err){
        response.status(500).send("no data to update")
     }
else{
    let now={
        name:request.body.name?request.body.name: data.name,
        address:request.body.address?request.body.address: data.address,
        designation:request.body.designation?request.body.designation: data.designation,
        experience:request.body.experience?request.body.experience: data.experience,
        skills:request.body.skills?request.body.skills: data.skills,
    }
    dbops.updatePerson(eno,now.name,now.address,now.designation,now.experience,now.skills,function(err,data){
        if(err)
           response.status(500).send("Unable to retrieve")
        else
           response.send("successfully updated");
    })
 }
})
})


route.post("/employee",function(request,response){
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
          response.status(500).send("Unable to insert")
        else
          response.status(201).send("data Successfully inserted")
})
})


module.exports =route

/* package

  CRUD 

     create
     retrieve
     update
     delete
*/