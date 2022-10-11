const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    var inputs = req.body;
    var sum = parseFloat(inputs.num1) + parseFloat(inputs.num2);
    res.send("Thanks for Submitting Your sum is , "+ sum.toFixed(2));
})

app.get("/bmi", function(req, res){
    res.sendFile(__dirname + "/bmi.html");
})

app.post("/bmi", function(req, res){
    var inputs = req.body;
    var bmi = parseFloat(inputs.weight) / Math.pow(parseFloat(inputs.height), 2);
    res.send("Your BMi is "+ bmi.toFixed(2));
})

app.listen(3000, function(){

})