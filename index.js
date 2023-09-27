const express = require('express');
const path = require('path');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const logger = require('./public/logger')


//init middleware
app.use(logger)
app.use(logger)
app.use(logger)

//Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// app.get('/',(req,res)=>{
//  res.sendFile(path.join(__dirname,'public','index.html'));
// });
//set a static  folder
app.use(express.static(path.join(__dirname,'public')));
app.use('/api/members',require('./routes/api/members'))
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`server started on ${PORT}`));
