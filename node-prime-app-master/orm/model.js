const Sequelize = require('sequelize');
var sequelize=require('./connection');

var department=sequelize.define('department',{
    department_id:{
      type: Sequelize.INTEGER,
      primaryKey:true
    },
    name:{
      type: Sequelize.TEXT,
      allowNull:false
    }
  });

  var worker=sequelize.define('worker',{
    employee_id:{
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    name:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    desig:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    city:{
        type: Sequelize.TEXT,
        allowNull:false
    }
})


department.hasMany(worker,{foreignKey: 'department_id'});
worker.belongsTo(department,{foreignKey: 'department_id'});

department.sync({drop: false}).then(() => {
    
    console.log("Department table Synched!!!");
  });

worker.sync({drop: false}).then(() => {
    
    console.log("Worker table Synched!!!");
  });


  module.exports={worker:worker,department:department};