const mongoose=require('mongoose');

const connection=mongoose.createConnection('mongodb+srv://rakeshlohana15:rakesh.123@cluster0.lylcejz.mongodb.net/webPorjectDB').on('open',()=>{
    
    console.log('Connected successfulyy')
}).on('error',()=>{
    console.log('Error occured');


});

module.exports=connection;