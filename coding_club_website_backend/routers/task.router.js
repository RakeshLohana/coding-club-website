
const router=require('express').Router();
const taskController=require("../controllers/task.controller");

router.post('/storeTask',taskController.createTask);


module.exports=router;