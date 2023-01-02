
const mongoose=require("mongoose");
const uuid=require("uuid");
const db=()=>{
    mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://user:OESuPpHhk72Qta7E@cluster0.wrpgaob.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true }).then(console.log("Connected to Database")).catch((error)=>console.log(error));

const Schema=mongoose.Schema(

    {
currentUrl:String,

shortenedUrl:String

    });
    
const url=mongoose.model("url",Schema);
module.exports=url;

}
db();


