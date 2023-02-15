// requiring express 

const express = require("express");

const bodyParser =require("body-parser");

const ejs = require("ejs");

const lds = require("lodash");

const path = require("path");



// array for inventory part 


var fruiturl= "images/fruits/";
const inv =[{link:"apple",title:"Apple",desc:"dffd duhfdskjh dhjfhdskjfh dhkjfhdkjfh dhfhk dhfhdh ap;eljf furhri "},
{link:"plum",title:"Plum",desc:"dffd duhfdskjh dhjfhdskjfh dhkjfhdkjfh dhfhk dhfhdh ap;eljf furhri "},
{link:"apricot",title:"Apricot",desc:"dffd duhfdskjh dhjfhdskjfh dhkjfhdkjfh dhfhk dhfhdh ap;eljf furhri "},
{link:"peach",title:"Peach",desc:"dffd duhfdskjh dhjfhdskjfh dhkjfhdkjfh dhfhk dhfhdh ap;eljf furhri "},
{link:"nectarine",title:"Nectarine",desc:"dffd duhfdskjh dhjfhdskjfh dhkjfhdkjfh dhfhk dhfhdh ap;eljf furhri "},
{link:"cherry",title:"Cherry",desc:"dffd duhfdskjh dhjfhdskjfh dhkjfhdkjfh dhfhk dhfhdh ap;eljf furhri "},
{link:"pear",title:"Pear",desc:"dffd duhfdskjh dhjfhdskjfh dhkjfhdkjfh dhfhk dhfhdh ap;eljf furhri "}]
const invenimg =[];

inv.forEach(function(elem){

    elem.link= "images/fruits/"+elem.link+".png";


});

// array for gallery section and images 


const gal =["images/gal/galimg1.jpeg","images/gal/galimg2.jpg","images/gal/galimg3.jpg","images/gal/galimg4.jpg","images/gal/galimg5.jpg","images/gal/galimg6.jpg","images/gal/galimg7.jpg"];

const app = express();

// using ejs

const port = process.env.PORT || 3000;

// public static path for css and images 

const static_path =path.join (__dirname,"../public");
// we have static path by going one dir back 

// getting all the paths for views and partials 

const templates_path=path.join(__dirname,"../templates/views");


// setting views and partials for the dynamic page 

app.set("view engine","ejs");
app.set("views",templates_path);


// use of bodyParser to get data from the route 

app.use(bodyParser.urlencoded({extended:true}));

// making our express to use static css and images files 

app.use(express.static(static_path));




// routing starts 

// callback for home router 


app.get("/",(req,res)=>{
    res.render("home",{galimg:gal,invimg:inv});
})

// callback for gallery router 

app.get("/gallery",(req,res)=>{
    res.render("gallery",{galimg:gal});
})

// callback for contact router 

app.get("/contactus",(req,res)=>{
    res.render("contacts",{path:"contactus"});
})




// listening to the port on the server 

app.listen(port,()=>{

    console.log(` app listening on port ${port}`)

    
})