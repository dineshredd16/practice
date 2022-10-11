const express = require("express");
const https = require("https");
const http = require("http")

const app = express();

app.get("/", function(req, res){
    http.get("http://localhost:8888/api/v1/admin_dashboard/procurement_v2/list_po", function(response){
        console.log(response)
        
        response.on("data", function(d){
            const sku = JSON.parse(d)
            console.log(sku.data[0].delivery_location)
            res.send(""+ JSON.stringify(sku.data[0].delivery_location.node_name))
        })
    })
    
})

app.listen(3000, function(req, res){

})