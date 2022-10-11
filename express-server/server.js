const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("world")
});
app.listen(3000, function(){
})