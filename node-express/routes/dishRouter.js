
const express=require('express')

const bodyParser=require('body-parser')

const dishRouter=express.Router();


dishRouter.use(bodyParser.json())

dishRouter.route('/')
.all((req,res,next)=>{
   
    res.statusCode=200;
  
    res.setHeader('Content-Type','text/plain');
  
    next();
  
  })
  .get((req,res,next)=>{
      
    res.end('will send all the disshes to u')
  })
  .post((req,res)=>{
  
    res.end('will addd the dish: '+req.body.name+' with details '+
    req.body.description)
  
  
  })
.put((req,res)=>{
   res.statusCode=403;
    res.end('PUT operation not supproted on dishes')
  
  
  })
.delete((req,res)=>{
  
    res.end('deleting all the requests')
  
  
  })

  module.exports=dishRouter;