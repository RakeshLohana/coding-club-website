const express=require('express')
const cors = require('cors');


const app=express(); 
const body_parser=require('body-parser');
app.use(cors());
const taskRouter=require("./routers/task.router");
const joinTeamRouter=require("./routers/joinTeamRouter");
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use(body_parser.json());
 app.use('/',taskRouter);
 app.use('/',joinTeamRouter);


module.exports=app;