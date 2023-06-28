const router=require('express').Router();
const joinTeamController=require("../controllers/joinTeamController");

router.post('/joinTeam',joinTeamController.createTask);


module.exports=router;