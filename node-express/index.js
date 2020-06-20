const express = require('express'),
     http = require('http');

const morgan = require('morgan');

const bodyParser=require('body-parser')

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json())

app.all('/dishes',(req,res,next)=>{
   
  res.statusCode=200;

  res.setHeader('Content-Type','text/plain');

  next();

})

app.get('/dishes',(req,res,next)=>{
    
  res.end('will send all the disshes to u')
})

app.post('/dishes',(req,res)=>{

  res.end('will addd the dish: '+req.body.name+' with details '+
  req.body.description)


})

app.put('/dishes',(req,res)=>{
 res.statusCode=403;
  res.end('PUT operation not supproted on dishes')


})
app.delete('/dishes',(req,res)=>{

  res.end('deleting all the requests')


})


app.get('/dishes/:dishId',(req,res,next)=>{
    
  res.end('will send deatil dish '+req.params.dishId+" "+" to u")
})

app.post('/dishes/:dishId',(req,res)=>{

  res.statusCode=403;
  res.end('PUT operation not supproted')


})

app.put('/dishes/:dishId',(req,res)=>{
 
  
  res.write('will update the dish '+req.params.dishId+'\n')

  res.end('will update the dish '+req.body.name + req.body.description)
})


app.delete('/dishes/:dishId',(req,res)=>{

  res.end('deleting dish'+req.params.dishId)


})




app.use((req, res, next) => {
 // console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});