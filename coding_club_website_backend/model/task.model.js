 const mongoose=require('mongoose');
const db=require('../config/db');



const {Schema}=mongoose;

const taskSchema= new Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    department:{
        type:String,
    },

    contactNumber:{
        type:String,
    },
    competition:{
        type:String,


    },
    batch:{
        type:String,
    }



});

const taskModel=db.model('user',taskSchema);

module.exports=taskModel;

