/* global __dirname */

const express=require('express');
//require() is a built-in function to include external modules that exist in separate files.
const app = express();
const path = require('path');
const env = require('dotenv');
const bodyparser = require('body-parser');

const cors=require('cors');
app.use(cors());
//app.use(cors({origin:'https://tame-tan-pronghorn-tam.cyclic.cloud'}));
//const corsOptions = {
//   origin: 'https://tame-tan-pronghorn-tam.cyclic.cloud',
//   credentials: true,
//   optionSuccessStatus: 200
//};
//
//app.use(cors(corsOptions));
//
//app.use(function (req, res, next) {
//    res.header('Access-Control-Allow-Origin', "*");
//    res.header('Access-Control-Allow-Headers', true);
//    res.header('Access-Control-Allow-Credentials', true);
//    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//    next();
//});

const ejs = require('ejs');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, '../views'));
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public/'));
//app.use('/uploads',express.static(path.join(__dirname,'./routes/uploads')));

//app.use((req, res, next) => {
//  res.setHeader("Access-Control-Allow-Origin", "*");
//  res.header(
//    "Access-Control-Allow-Headers",
//    "Origin, X-Requested-With, Content-Type, Accept"
//  );
//  next();
//});




const pages=require('./routes/Rendering_pages/pages');
const auth=require('./routes/route/route');

app.use('/',pages);
app.use('/',auth);

module.exports=app;
