var express=require("express");
mongoose=require("mongoose");
const app=express();
expressSanitizer=require("express-sanitizer");
const bodyParser=require("body-parser");
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSanitizer());
const method=require('method-override')
app.use(method("_method"));
app.use("/",require('./routes/blog'));
app.listen(process.env.PORT||1234,(err)=>{
    if(err){
        throw err;
     }
    else{
        console.log("Server Start");
    }
})
