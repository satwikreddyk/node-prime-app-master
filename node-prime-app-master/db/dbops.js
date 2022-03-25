const connection=require("./connection")

const operations ={
    insert: function(eno,name,address,designation,experience,skills,callback){
        connection.query("insert into employee values(?,?,?,?,?,?)",
        [eno,name,address,designation,experience,skills],
        callback)
         },

     getEmployee: function(callback){
       connection.query("select * from employee",callback)
     },

     getPerson: function(eno,callback){
       connection.query("select * from employee where eno=?",[eno],callback)
     },
   deletePerson: function(eno,callback){
    connection.query("delete from employee where eno=?",[eno],callback)
  },

   updatePerson: function(eno,name,address,designation,experience,skills,callback){
     connection.query("update people set name=?, address= ?, designation= ?, experience= ?, skills= ? where eno=?",[name,eno,address,designation,experience,skills],callback)
   }
  }


module.exports = operations;