
const app=require("./app");
const db=require("./config/db");
const taskModel=require("./model/task.model");
const joinTeamModel=require("./model/joinTeamModel");


app.get('/',(req,res)=>{
    res.json(
        {
            message:"api is working"
        }
    );


})



const port=4000;
app.listen(
    port,()=>{
        console.log('Sever is running on port:'+`${port}`);
    }
)

