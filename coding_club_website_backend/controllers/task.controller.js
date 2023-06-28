const TaskServices=require("../services/task.Services");

exports.createTask=async(req,res,next)=>{

    try{
        const {name,email,department,contactNumber,competition,batch}=req.body;

        let task=await TaskServices.createTask(name,email,department,contactNumber,competition,batch);
        res.json({status:true,success:task});

    } catch(error){
        console.log(error)
        next(error);

    }
}
