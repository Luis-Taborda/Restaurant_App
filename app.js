// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var waitList = [
    {
    
        name: "will",
        Email: "willdomodo@gmail.com",
        phone: "973-2738-9182"
    },
    {
        name: "orhys",
        Email: "orhys@gmail.com",
        phone: "201-2738-9182"
    },
    {
        name: "monkey",
        Email: "monkey@wawa.com",
        phone: "973-7300-7122"
    }
  ];