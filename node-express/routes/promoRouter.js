
const express=require('express')

const bodyParser=require('body-parser')

const promoRouter = express.Router();

promoRouter.use(bodyParser.json())

promoRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain')
    next();
})
.get((req,res,next)=>{

    res.end('will send all the promotions to u')
})
.post((req,res)=>{

    res.end('will addd the dish: '+req.body.name+' with details '+
    req.body.description)
})
.put((req,res)=>{
   
    res.statusCode=403;
    res.end('Put operation not supproted on promos')
  
})
.delete((req,res)=>{
    res.end('deleting all the requests')
})

promoRouter.route('/:promoId')
.all((req,res,next)=>{
     
    res.statusCode=200;
  
    res.setHeader('Content-Type','text/plain');
  
    next();
  
  })
.get((req,res,next)=>{
      
      res.end('will send deatil promo '+req.params.promoId+" "+" to u")
  })
.post((req,res)=>{
  
      res.statusCode=403;
      res.end('Post operation not supproted')
      
  
  
  })
.put((req,res)=>{
  res.write('will update the promo '+req.params.promoId+'\n')

    res.end('will update the promo '+req.body.name + req.body.description)
  
  
  })
.delete((req,res)=>{
  
  res.end('deleting promo'+req.params.promoId)
  
  
  })

  module.exports=promoRouter;