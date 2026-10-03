var fs=require("fs");
var css=fs.readFileSync("c1_css.txt","utf8");
var bdy=fs.readFileSync("c1_body.txt","utf8");
var jss=fs.readFileSync("c1_js.txt","utf8");
var pre="<!DOCTYPE html><html lang=vi><head><meta charset=utf-8><title>MCK HVL</title><link href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600' rel=stylesheet><style>";
var html=pre+css+"</style></head><body>"+bdy+"<script>"+jss+"<\/script></body></html>";
fs.writeFileSync("cauchuyen1.html",html,"utf8");
console.log("OK size:",fs.statSync("cauchuyen1.html").size);
