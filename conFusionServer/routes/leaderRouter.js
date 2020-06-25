
const express=require('express')

const bodyParser=require('body-parser')

const leaderRouter = express.Router();
const Leader = require('../models/leaders.js');

leaderRouter.use(bodyParser.json())

leaderRouter.route('/')
.get((req,res,next)=>{

  Leader.find({})
  .then((lead) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(lead);
  }, (err) => next(err))
  .catch((err) => next(err));
})
.post((req,res)=>{

  Leader.create(req.body)
  .then((lead) => {
      console.log('leader Created ', lead);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(lead);
  }, (err) => next(err))
  .catch((err) => next(err));
})
.put((req,res)=>{
   
    res.statusCode=403;
    res.end('Put operation not supproted on promos')
  
})
.delete((req,res)=>{
  Leader.remove({})
  .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
  }, (err) => next(err))
  .catch((err) => next(err));    
})

leaderRouter.route('/:leaderId')
.get((req,res,next)=>{
  Leader.findById(req.params.leaderId)
  .then((lead) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(lead);
  }, (err) => next(err))
  .catch((err) => next(err));
      
  })
.post((req,res)=>{
  
      res.statusCode=403;
      res.end('Post operation not supproted')
      
  
  
  })
.put((req,res)=>{
  Promotion.findByIdAndUpdate(req.params.leaderId, {
    $set: req.body
}, { new: true })
.then((lead) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(lead);
}, (err) => next(err))
.catch((err) => next(err));
  
  })
.delete((req,res)=>{
  
  Promotion.findByIdAndRemove(req.params.leaderId)
  .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
  }, (err) => next(err))
  .catch((err) => next(err));
  
  
  })

  module.exports=leaderRouter;