require('dotenv').config();

// SERVER
const express = require('express');
const authRouter = require('./app/routers/auth');
const app = express();
const cors = require('cors');

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// ROUTES
app.use('/', authRouter);

// PORT
const port = process.env.PORT || 3000;
app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});
