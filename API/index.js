require('dotenv').config();

// SERVER
const express = require('express');
const authRouter = require('./app/routers/auth');
const router = require('./app/routers/router');
const app = express();
const cors = require('cors');

// MIDDLEWARES
//app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors('*'));

// ROUTES
//app.use('/', authRouter);
app.use(router);

// PORT
const port = process.env.PORT || 3000;
app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});
