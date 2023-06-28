const mongoose=require('mongoose');
const db=require('../config/db');



const {Schema}=mongoose;

const joinTeamSchema= new Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    contactNumber:{
        type:String,
    },

    year:{
        type:String,
    },
    heardAbout:{
        type:String,


    },
    whyJoin:{
        type:String,
    },
    projects:{
        type:String,
    }



});

const joinTeamModel=db.model('JoinTeam',joinTeamSchema);

module.exports=joinTeamModel;

