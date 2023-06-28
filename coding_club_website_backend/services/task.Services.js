const taskModel=require("../model/task.model");


class TaskServices{

    static async createTask(name,email,department,contactNumber,competition,batch){
        const createTask=new taskModel({name,email,department,contactNumber,competition,batch});
        return await createTask.save();

    }




    
}
module.exports= TaskServices;