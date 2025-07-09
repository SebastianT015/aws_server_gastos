const express = require('express');
const app = express();
const port = 3000
const morgan = require('morgan');
const{mongoose} = require('./database');

//settings

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

function logger(req,res,next){
 console.log('Ruta Recibida '+ req.protocol+'://'+req.get('host')+ req.originalUrl);
 next();
}
//middlewares
app.use(morgan('dev'));


//routes
app.use(require('./src/routes/server.routes'));



app.listen(port, () => {
  console.log(`Servidor esta corriendo en el puerto: ${port}`);
})

