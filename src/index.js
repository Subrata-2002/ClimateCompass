const express = require("express");
const app = express();
const path = require("path")


// const template_path = path.join(__dirname,"../templates/views");
// app.set("views",template_path); 
//you can use this code when you create templates/partials,views/about,404,index,weather and instead of giving full path in render method(views/index) 
// you can do "views"

app.set("view engine","ejs");

app.use(express.static(path.join(__dirname,"../public")));


app.get("/",(req , res)=>{
    res.render("templates/index");
})

app.get("/about",(req , res)=>{
    res.render("templates/about");

})

app.get("/weather",(req , res)=>{
    res.render("templates/weather");
})

app.get("*",(req , res)=>{
    res.render("templates/404error",
    {
        
        errorMsg: "Oops!! page not found"
    });

})

app.listen(3000,()=>{
    console.log("listining to port 3000");
})