
var express = require('express')
var bodyParser = require('body-parser')
var ejs = require('ejs')

var app=express()
var urlEncodedParser = bodyParser.urlencoded({extended : false})

app.set('view engine','ejs')
app.set('views',__dirname+'/views')


app.get('/',function(req,res){
//res.sendFile(__dirname+'/home.html')
//res.send("I am in Home-Page!" + __dirname)
res.render('home')
})
app.get('/about',function(req,res){
//res.sendFile(__dirname +'/about.html')
console.log(req.query)
res.render('about',{UrlData:req.query})
})
app.get('/contact',function(req,res){
//res.sendFile(__dirname +'/contact.html')
res.render('contact')
})
app.post('/contact',urlEncodedParser,function(req,res){
    console.log(req.body)
    res.send("Received information " + JSON.stringify (req.body))
})
app.get('/profile/:name',function(req,res){
//res.send("I am in Profile Page of " + req.params.id)
var personData={
    age:20,
    loc:"Bangalore", 
    hobbies:["Dancing","Singing","Tiktok"]}
res.render('profile',
{personName:req.params.name,
data:personData
})
})

app.listen(8888) 
 
