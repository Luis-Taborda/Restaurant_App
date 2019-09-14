
var express = require("express");
var path = require("path");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var names = [{
   
    name: "Luis",
    Email: "luis@luis.com",
    phone: "551-482-8190"

},
{
    name: "Robert",
    Email: "robert@robert.com",
    phone: "123-456-7890"
},
{
   
    name: "David",
    Email:"david@david.com",
    phone: "201-233-4093"
},
{
   name: "Raff",
    Email: "raff@raff.com",
    phone: "345-213-3455"
}]

app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/add", function(req,res) {
    res.sendFile(path.join(__dirname, "reservationForm.html"))
})

app.get("/view", function(req,res) {
    res.sendFile(path.join(__dirname, "reservationView.html"))
})

app.get("/api/names", function(req,res) {
    return res.json(names)
})

app.post("/api/names", function(req,res) {
    
    var newName = req.body

    newName.routeName = newname.name.replace(/\s+/g,"").toLowerCase()

    console.log(newName)

    res.json(newName)
})

app.listen(PORT , function(){
    console.log("You are in on port " + PORT)
})