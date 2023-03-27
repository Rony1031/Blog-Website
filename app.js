//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ =require("lodash");

const homeStartingContent = "A lake or an easy weekend is what God wants to decorate it with. Always the author, nor the time of life. Let it be a course of action. Viverra lived in this place. Do not use a microwave oven or a dishwasher. Until the basketball players are not members or members of the arc. Mattis the employee was targeted by the students. The mountains will give birth to a great push, and a ridiculous mouse will be born in the ultricia of life. I'm trying to find a way to get rid of the poison bed. The author of the life of Ultrices advocates football as a bed of alcohol to drink. Odio euismod lacinia at quis risus sed vulputate odio ut The course of the real estate agent was aimed at the students.";
const aboutContent = "A lake or an easy weekend is what God wants to decorate it with. Always the author, nor the time of life. Let it be a course of action. Viverra lived in this place. Do not use a microwave oven or a dishwasher. Until the basketball players are not members or members of the arc. Mattis the employee was targeted by the students. The mountains will give birth to a great push, and a ridiculous mouse will be born in the ultricia of life. I'm trying to find a way to get rid of the poison bed. The author of the life of Ultrices advocates football as a bed of alcohol to drink. Odio euismod lacinia at quis risus sed vulputate odio ut The course of the real estate agent was aimed at the students.";
const contactContent = "A lake or an easy weekend is what God wants to decorate it with. Always the author, nor the time of life. Let it be a course of action. Viverra lived in this place. Do not use a microwave oven or a dishwasher. Until the basketball players are not members or members of the arc. Mattis the employee was targeted by the students. The mountains will give birth to a great push, and a ridiculous mouse will be born in the ultricia of life. I'm trying to find a way to get rid of the poison bed. The author of the life of Ultrices advocates football as a bed of alcohol to drink. Odio euismod lacinia at quis risus sed vulputate odio ut The course of the real estate agent was aimed at the students.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));




let Posts=[];



app.get("/",function(req,res){
     res.render("home",{homeStartingContent:homeStartingContent, Posts:Posts});
     //console.log(Posts);
});

app.get("/post/:topic",function(req,res){
  const rq=_.lowerCase(req.params.topic);
  
  Posts.forEach(function(post){
    const storedTitle=_.lowerCase(post.Title);
    
    if(storedTitle===rq){
      const rq2=post.PostBody;
      res.render("post",{Title:rq,Body:rq2});
    }
  })

});


app.get("/about",function(req,res){
  res.render("about",{aboutContent:aboutContent});
})

app.get("/contact",function(req,res){
  res.render("contact",{contactContent:contactContent});
})

app.get("/compose",function(req,res){
  res.render("compose");
})

app.post("/compose",function(req,res){
 
  const ps={
     Title:req.body.Title,
     PostBody: req.body.PostCont
  };
  
  //console.log(ps);
  Posts.push(ps);
  res.redirect('/');
});
 











app.listen(3000, function() {
  console.log("Server started on port 3000");
});
