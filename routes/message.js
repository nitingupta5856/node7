const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/message", (req, res, next) => {
    fs.readFile( "msg.txt",(err,data) =>{
        if(err){
            console.log(err),
            data='no chat found'
        }
        res.send(`
   <h3>${data}</h3>
        <form
        action="/message"
        method="POST"
        onsubmit='  document.getElementById("username").value =localStorage.getItem("username")'
      >
        <label for="msg"> Enter Message </label>
        <input type="text"  name="message" />
        <input type="hidden" id="username" name="username" />
        <button type="submit">Send</button>`);
    })

    // res.send(`
   
    //   <form
    //   action="/message"
    //   method="POST"
    //   onsubmit='  document.getElementById("username").value =localStorage.getItem("username")'
    // >
    //   <label for="msg"> Enter Message </label>
    //   <input type="text"  name="message" />
    //   <input type="hidden" id="username" name="username" />
    //   <button type="submit">Send</button>`);

//   next();
});



router.post("/message", (req, res) => {

  fs.writeFile(
    "msg.txt",
    `${req.body.username}:${req.body.message} `,
    { flag: "a" },
    (err) => {
      if (err) console.log(err);
      res.redirect("/message")
    }

     
  
  );
});

module.exports = router;