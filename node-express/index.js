const express = require('express'),
     http = require('http');

const morgan = require('morgan');
const dishRouter=require('./routes/dishRouter')

const promoRouter=require('./routes/promoRouter')

const leaderRoute=require('./routes/leaderRouter')

const bodyParser=require('body-parser')

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/dishes',dishRouter)
app.use('/dishes/:dishId',dishRouter)


app.use('/promotions',promoRouter)
app.use('/promotions/:promoId',promoRouter)

app.use('/leaders',leaderRoute)
app.use('/leaders/:leaderId',leaderRoute)


app.use(express.static(__dirname + '/public'));




// app.get('/dishes/:dishId',(req,res,next)=>{
    
//   res.end('will send deatil dish '+req.params.dishId+" "+" to u")
// })

// app.post('/dishes/:dishId',(req,res)=>{

//   res.statusCode=403;
//   res.end('PUT operation not supproted')


// })

// app.put('/dishes/:dishId',(req,res)=>{
 
  
//   res.write('will update the dish '+req.params.dishId+'\n')

//   res.end('will update the dish '+req.body.name + req.body.description)
// })


// app.delete('/dishes/:dishId',(req,res)=>{

//   res.end('deleting dish'+req.params.dishId)


// })




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