const joinTeamServices=require("../services/joinTeamServices");

exports.createTask=async(req,res,next)=>{

    try{
        const {name,email,contactNumber,year,heardAbout,whyJoin,projects}=req.body;

        let join=await joinTeamServices.createTask(name,email,contactNumber,year,heardAbout,whyJoin,projects);
        res.json({status:true,success:join});

    } catch(error){
        console.log(error)
        next(error);

    }
}
