/* global process */

const mongoose= require('mongoose');

const connectDatabase=()=>{
    mongoose.connect(process.env.DB_LOCAL_URI,{
        useNewUrlParser:true,//--->in older version the connection string (DB_LOCAL-URI=mongodb://localhost:27017/nithishcart) is processed in different parser method but we dont need to use older version so here we have used useNewUrlParser:true --->it say use new parser dont use older one..
        useUnifiedTopology:true,//--->mongodb driver ku palaya options neraya irunthuchu but namma intha new version la antha options la use panna kudathu so  useUnifiedTopology:true-->nu kudukuron ipo ula new version la irukura options than use pannanum nu soldren...
        dbName: 'huh'
    }).then((con)=>{
        console.log(`connected successfully ${con.connection.host}`);//connection property and .host property ena pannum na localhost ah katum which mean DB_LOCAL-URI=mongodb://127.0.0.1:27017/nithishcart.....
    }).catch((err)=>{ 
        console.log(err);
    });
};
module.exports=connectDatabase;



//mongodb+srv://testuser:riteb@cluster0.4gwdg.mongodb.net/test?retryWrites=true&w=majority
//DB_LOCAL_URI= 'mongodb://127.0.0.1:27017/nithish'
