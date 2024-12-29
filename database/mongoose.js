const mongoose = require('mongoose'); //Looks for mongoose in node_module folder

mongoose.Promise = global.Promise; //Enables db request to run in background without slowing DB server requests

mongoose.connect('mongodb://127.0.0.1:27017/taskmanagerdb')
    .then(()=>{
        console.log("DB Connection Successful")
    })
    .catch((error)=>{
        console.log(error)
    });

 module.exports = mongoose;// exports mongoose so it can be imported in other location   