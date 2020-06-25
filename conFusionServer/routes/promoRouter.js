
const express=require('express')

const bodyParser=require('body-parser')

const promoRouter = express.Router();
const Promotion = require('../models/promotions.js');

promoRouter.use(bodyParser.json())

promoRouter.route('/')
.get((req,res,next)=>{

  Promotion.find({})
  .then((promo) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(promo);
  }, (err) => next(err))
  .catch((err) => next(err));
})
.post((req,res)=>{

  Promotion.create(req.body)
  .then((promo) => {
      console.log('promo Created ', promo);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(promo);
  }, (err) => next(err))
  .catch((err) => next(err));
})
.put((req,res)=>{
   
    res.statusCode=403;
    res.end('Put operation not supproted on promos')
  
})
.delete((req,res)=>{
  Promotion.remove({})
  .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
  }, (err) => next(err))
  .catch((err) => next(err));    
})

promoRouter.route('/:promoId')
.get((req,res,next)=>{
  Promotion.findById(req.params.promoId)
  .then((promo) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(promo);
  }, (err) => next(err))
  .catch((err) => next(err));
      
  })
.post((req,res)=>{
  
      res.statusCode=403;
      res.end('Post operation not supproted')
      
  
  
  })
.put((req,res)=>{
  Promotion.findByIdAndUpdate(req.params.promoId, {
    $set: req.body
}, { new: true })
.then((promo) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(promo);
}, (err) => next(err))
.catch((err) => next(err));
  
  })
.delete((req,res)=>{
  
  Promotion.findByIdAndRemove(req.params.promoId)
  .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
  }, (err) => next(err))
  .catch((err) => next(err));
  
  
  })

  module.exports=promoRouter;