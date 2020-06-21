
const express=require('express')

const bodyParser=require('body-parser')

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json())

leaderRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain')
    next();
})
.get((req,res,next)=>{

    res.end('will send all the leaders to u')
})
.post((req,res)=>{

    res.end('will addd the leader: '+req.body.name+' with details '+
    req.body.description)
})
.put((req,res)=>{
   
    res.statusCode=403;
    res.end('Put operation not supproted on leader')
  
})
.delete((req,res)=>{
    res.end('deleting all the requests')
})

leaderRouter.route('/:leaderId')
.all((req,res,next)=>{
     
    res.statusCode=200;
  
    res.setHeader('Content-Type','text/plain');
  
    next();
  
  })
.get((req,res,next)=>{
      
      res.end('will send deatil leader '+req.params.leaderId+" "+" to u")
  })
.post((req,res)=>{
  
      res.statusCode=403;
      res.end('Post operation not supproted')
      
  
  
  })
.put((req,res)=>{
  res.write('will update the laeder '+req.params.leaderId+'\n')

    res.end('will update the leader '+req.body.name + req.body.description)
  
  
  })
.delete((req,res)=>{
  
  res.end('deleting leader'+req.params.leaderId)
  
  
  })

  module.exports=leaderRouter;