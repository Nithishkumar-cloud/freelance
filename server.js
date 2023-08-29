/* global __dirname, process */

const app=require('./app');
const path = require('path');
const env = require('dotenv');
const axios=require('axios');


const connectDatabase = require('./routes/config/database');

env.config({ path: path.join(__dirname, "./routes/config/config.env") });
connectDatabase();



app.listen(process.env.PORT, () => { console.log(`Server listening to the port ${process.env.PORT}`);});