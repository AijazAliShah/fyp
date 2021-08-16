const express = require("express");
const mysql = require("mysql"); 
const cors = require("cors"); 

const app = express();

app.use(express.json)

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "root",
    database: "fypdb"
});




app.post('/login', (req,res)=> {

    const Email = req.body.Email;
    const Password = req.body.Password;

    db.query("SELECT * FROM student WHERE Email=? AND Password=?",
   [Email, Password] ,
   (err,result)=> {
      if(err) {
          res.send({err: err});
        }
     
          if(result.length > 0) {
              res.send(result);
          }
          else{
              res.send({message: "Wrong Email/Password combination!"});
          }
      
  });
});

app.listen(3001, () => {
    console.log("running server");
});

