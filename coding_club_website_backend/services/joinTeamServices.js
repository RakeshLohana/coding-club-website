const joinTeamModel=require("../model/joinTeamModel");


class joinTeamServices{

    static async createTask(name,email,contactNumber,year,heardAbout,whyJoin,projects){
        const createTask=new joinTeamModel({name,email,contactNumber,year,heardAbout,whyJoin,projects});
        return await createTask.save();

    }
   

}
module.exports=joinTeamServices;