require('dotenv').config();

const express = require('express');

const app = express();

app.use(express.json());


const router = require('./app/routers/router')


app.use(router);

app.listen(process.env.PORT, _ => {
   console.log(`http://localhost:${process.env.PORT}`);
});
