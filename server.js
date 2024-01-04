const express = require('express');
const app = express();

app.use (express.static(__dirname+"/.static"))

 
// const timeRestrictionMiddleware = (req, res, next) => {
//   const currentDay = new Date().getDay(); // Sunday is 0, Monday is 1, ..., Saturday is 6
//   const currentTime = new Date().getHours();

//   if (currentDay >= 1 && currentDay <= 5 && currentTime >= 9 && currentTime < 17) {
//       // Request is within working hours
//       next();
//   } else {
//       // Request is outside working hours
//       res.status(403).send('Access Forbidden: The web application is only available during working hours (Monday to Friday, 9 to 17).');
//   }
// };


//  app.use(timeRestrictionMiddleware);

app.get("/home", (req, res) => {
    res.sendFile(__dirname+"/static/home.html");
  });

  app.get("/contact", (req, res) => {
    res.sendFile(__dirname+"/static/contact.html");
  });
  
  app.get("/services",(req,res) => {
    res.sendFile(__dirname+"/static/services.html");
  })
     
  app.get("/style.css", (req,res)=>{
      res.sendFile(__dirname+"/static/style.css")});

      app.get("/home.css", (req,res)=>{
        res.sendFile(__dirname+"/static/home.css")});

        app.get("/contact.css", (req,res)=>{
          res.sendFile(__dirname+"/static/contact.css")});

  const port = 5000;
app.listen(port,console.log("listening on port 5000:",port))