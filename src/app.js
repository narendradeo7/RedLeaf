// requiring express 

const express = require("express");

const bodyParser = require("body-parser");

const ejs = require("ejs");

const lds = require("lodash");

const path = require("path");



// array for inventory part 


var fruiturl = "images/fruits/";
const inv = [{
        link: "apple",
        title: "Apple",
        desc: "dffd duhfdskjh dhjfhdskjfh dhkjfhdkjfh dhfhk dhfhdh ap;eljf furhri ",
        var: "14",
        clr: "3",
        swt: "12/200"
    },
    {
        link: "plum",
        title: "Plum",
        desc: "dffd duhfdskjh dhjfhdskjfh dhkjfhdkjfh dhfhk dhfhdh ap;eljf furhri ",
        var: "21",
        clr: "2",
        swt: "10/5"
    },
    {
        link: "apricot",
        title: "Apricot",
        desc: "dffd duhfdskjh dhjfhdskjfh dhkjfhdkjfh dhfhk dhfhdh ap;eljf furhri ",
        var: "7",
        clr: "-",
        swt: "5"
    },
    {
        link: "peach",
        title: "Peach",
        desc: "dffd duhfdskjh dhjfhdskjfh dhkjfhdkjfh dhfhk dhfhdh ap;eljf furhri ",
        var: "30",
        clr: "2",
        swt: "10"
    },
    {
        link: "nectarine",
        title: "Nectarine",
        desc: "dffd duhfdskjh dhjfhdskjfh dhkjfhdkjfh dhfhk dhfhdh ap;eljf furhri ",
        var: "16",
        clr: "2",
        swt: "10"
    },
    {
        link: "cherry",
        title: "Cherry",
        desc: "dffd duhfdskjh dhjfhdskjfh dhkjfhdkjfh dhfhk dhfhdh ap;eljf furhri ",
        var: "3",
        clr: "-",
        swt: "5"
    },
    {
        link: "pear",
        title: "Pear",
        desc: "dffd duhfdskjh dhjfhdskjfh dhkjfhdkjfh dhfhk dhfhdh ap;eljf furhri ",
        var: "4",
        clr: "-",
        swt: "15/12"
    }
]
const invenimg = [];

inv.forEach(function (elem) {

    elem.link = "images/fruits/" + elem.link + ".png";


});

// array for gallery section and images 


const gal = ["images/gal/galimg1.jpeg", "images/gal/galimg2.jpg", "images/gal/galimg3.jpg", "images/gal/galimg4.jpg", "images/gal/galimg5.jpg", "images/gal/galimg6.jpg", "images/gal/galimg7.jpg"];

const app = express();

// using ejs

const port = process.env.PORT || 3000;

// public static path for css and images 

const static_path = path.join(__dirname, "../public");
// we have static path by going one dir back 

// getting all the paths for views and partials 

const templates_path = path.join(__dirname, "../templates/views");


// setting views and partials for the dynamic page 

app.set("view engine", "ejs");
app.set("views", templates_path);


// use of bodyParser to get data from the route 

app.use(bodyParser.urlencoded({
    extended: true
}));

// making our express to use static css and images files 

app.use(express.static(static_path));




// routing starts 

// callback for home router 


app.get("/", (req, res) => {
    res.render("home", {
        galimg: gal,
        invimg: inv
    });
})

// callback for gallery router 

app.get("/gallery", (req, res) => {
    res.render("gallery", {
        galimg: gal
    });
})

// callback for contact router 

app.get("/contactus", (req, res) => {
    res.render("contacts", {
        path: "contactus"
    });
})

// to get the page as per the url entered by the user
app.get("/:title", function (req, res) {
    // converting dynamic part of the url to lowecase of lodash
    var urldypart = lds.lowerCase(req.params.title);
    // console.log(urldypart +" this is we getting from url target");
    var pagefound = "false";

    inv.forEach(function (pageinfo) {

        // converting inv title into lowecase for pagematch 
        var pagedypart = lds.lowerCase(pageinfo.title);

        if (lds.lowerCase(pagedypart) == urldypart) {
            res.render((pagedypart), {});
            pagefound = "true";
        } else {

        }
    });
    if (pagefound = "false") {
        res.send("<img src='https://media.giphy.com/media/iliZk0fuv82cKdTwbO/giphy.gif' style='position:absolute;left: 38%;top: 29%;transform: translate(-50px, -100px);'>");
    }

});





// listening to the port on the server 

app.listen(port, () => {

    console.log(` app listening on port ${port}`)


})