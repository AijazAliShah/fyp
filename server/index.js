const mysql = require("mysql2");
const express = require("express");
const upload = require("express-fileupload");
const cors = require("cors");

const bodyParser = require("body-parser");
const session = require("express-session");
const { response } = require("express");
const nodemailer = require("nodemailer");
const ejs = require("ejs");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const jwt = require("jsonwebtoken");

const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(upload());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

app.use(upload());

//database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "MyNewPass",
  database: "fypdb",
  port: 3306,
});

db.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("Connected");
  }
});

var userRoutes = require("./routes/Users.js");
app.use("/auth", userRoutes);

//Reading data from test table
app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM test";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//Reading data from project table (Assignment Page)
app.get("/api/view_list", (req, res) => {
  const sqlSelect = "SELECT * FROM project";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//Reading data from Announcement table (Info Page)
app.get("/api/info", (req, res) => {
  const sqlSelect =
    "SELECT * FROM announcements ORDER BY Announcements_id DESC";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//Inserting data into test table
app.post("/api/insert", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const sqlInsert = "INSERT INTO test (value2, value3) VALUES (?,?);";
  db.query(sqlInsert, [email, password], (err, result) => {
    console.log(result);
  });
});

//Inserting data into user table (Register User)
app.post("/api/register", async (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const type = req.body.type;
  const stdId = req.body.stdId;
  const department = req.body.department;
  res.json(
    await new Promise(function (resolve, reject) {
      db.query("SELECT * FROM users WHERE email = ?;", email, (err, result) => {
        if (err) {
          res.send({ err: err });
        }
        console.log(result);
        if (result.length > 0) {
          resolve({ auth: false, message: "Email already exist" });
        } else {
          bcrypt.hash(password, saltRounds, (err, hash) => {
            if (err) {
              console.log(err);
            }

            const sqlInsert =
              "INSERT INTO users (name, email, password, type, stdId, department) VALUES (?,?,?,?,?,?);";
            db.query(
              sqlInsert,
              [name, email, hash, type, stdId, department],
              (err, result) => {
                console.log(err, result);
                resolve({ auth: true, message: "user successfully register" });
              }
            );
          });
        }
      });
    })
  );
});
//

//Login API with hash function for password
app.post("/api/login", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  console.log(req.body);
  db.query("SELECT * FROM users WHERE email = ?;", email, (err, result) => {
    if (err) {
      res.send({ err: errr });
    }

    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (response) {
          const admin_id = result[0].admin_id;
          const token = jwt.sign({ admin_id }, "jwtSecret", {
            expiresIn: 300,
          });

          req.session.user = result;
          console.log(req.session.user);
          //res.send(result);
          res.json({ auth: true, token: token, result: result, name: name });
        } else {
          res.json({ auth: false, message: "Wrong email or password!" });

          // res.send({ message: "Wrong username/password combination!" });
        }
      });
    } else {
      //res.send({ message: "User doesn't exist" });
      res.json({ auth: false, message: "No user exists!" });
    }
  });
});

//Inserting data into user table (Register User)
app.post("/api/change/password", async (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;

  res.json(
    await new Promise(function (resolve, reject) {
      bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
          resolve({ auth: false, message: "something went wrong" });
        }
        const SqlUpdate = "UPDATE users SET password = ? WHERE email = ?";
        db.query(SqlUpdate, [hash, email], (err, result) => {
          if (err) resolve({ auth: false, message: "something went wrong" });
          resolve({ auth: true, message: "user updated successfully" });
        });
      });
    })
  );
});

app.post("/api/reset/password", async (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const cpassword = req.body.cpassword;
  const password = req.body.password;

  res.json(
    await new Promise(function (resolve, reject) {
      db.query("SELECT * FROM users WHERE email = ?;", email, (err, result) => {
        bcrypt.compare(
          cpassword,
          result[0].password,
          (err, passwordNatched) => { 
            if (passwordNatched) {
              bcrypt.hash(password, saltRounds, (err, hash) => {
                if (err) {
                  resolve({ auth: false, message: "something went wrong" });
                }
                const SqlUpdate =
                  "UPDATE users SET password = ? WHERE email = ?";
                db.query(SqlUpdate, [hash, email], (err, result) => {
                  if (err)
                    resolve({ auth: false, message: "something went wrong" });
                  resolve({ auth: true, message: "user updated successfully" });
                });
              });
            } else {
              resolve({ auth: false, message: "wrong current password" });
            }
          }
        );
      });
    })
  );
});

//Login API with hash function for password
app.get("/basicinfo/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM users WHERE id = ?;", id, (err, result) => {
    if (err) {
      res.send({ err: errr });
    }
    const data = result[0];
    console.log(data);

    delete data["password"];
    res.json(result);
  });
});

//Middleware verifyJWT
const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    res.send("We need a token, please give it next time!");
  } else {
    jwt.verify(token, "jwtSecret", (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "You failed to authenticate!" });
      } else {
        req.userId = decoded.admin_id;
        next();
      }
    });
  }
};

//User Authentication API
app.get("/isUserAuth", verifyJWT, (req, res) => {
  res.send("You are authenticated!");
});

//Cookie Session
app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

//Inserting data into project table
app.post("/api/insert_project", (req, res) => {
  const title = req.body.title;
  const internal = req.body.internal;
  const external = req.body.external;

  const sqlInsert =
    "INSERT INTO project (Title, Internal, External) VALUES (?,?,?);";
  db.query(sqlInsert, [title, internal, external], (err, result) => {
    console.log(err);
  });
});

//Inserting data into Announcement table (Add an announcement)
app.post("/api/announcement", (req, res) => {
  const activity = req.body.activity;
  const tentativeDate = req.body.tentativeDate;
  const responsibility = req.body.responsibility;
  const deliverables = req.body.deliverables;

  const sqlInsert =
    "INSERT INTO announcements (Activity, Tentative_date, Responsibility, Deliverables) VALUES (?,?,?,?);";
  db.query(
    sqlInsert,
    [activity, tentativeDate, responsibility, deliverables],
    (err, result) => {
      console.log(err);
    }
  );
});

//Deleting data from project table
app.delete("/api/delete:project_id", (req, res) => {
  const project_id = req.params.project_id;
  const SqlDelete = "DELETE FROM project WHERE Project_id = ?";
  db.query(SqlDelete, project_id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//Updating data in project table
app.put("/api/update", (req, res) => {
  const title = req.body.Title;
  const project_id = req.body.Project_id;

  const SqlUpdate = "UPDATE SET project Title = ? WHERE Project_id = ?";
  db.query(SqlUpdate, [title, project_id], (err, result) => {
    if (err) console.log(err);
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});

//forgetpasswoed

app.get("/forgot/password/:email", async (req, res) => {
  console.log(req.params);

  // User.find({ email: req.params.email })
  //   .exec()
  //   .then(docs => {
  //     if (docs.length > 0) {

  //       console.log(docs.length);

  var transport = {
    host: "smtp.gmail.com",
    auth: {
      user: "aijazalishah333@gmail.com",
      pass: "google_aijaz",
      port: "587",
      domain: "gmail.com",
      authentication: "plain",
    },
  };

  var transporter = nodemailer.createTransport(transport);

  ejs.renderFile(
    "./view/ForgotPass.ejs",
    { email: Buffer.from(req.params.email).toString("base64") },
    function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log("ELSE");
        var mainOptions = {
          from: "FYP",
          to: req.params.email,
          subject: "FYP Portal Forgot Password",
          html: data,
        };
        // console.log("html data ======================>", mainOptions.html);
        transporter.sendMail(mainOptions, function (err, info) {
          if (err) {
            console.log(err);
          } else {
            console.log("Message sent: " + JSON.stringify(info));
          }
        });
      }
    }
  );
  return res.send({ statusCode: 200, message: "Email sent" });

  //   } else {
  //     var arr1 = new Array({ "err": "Email does not exist!" })
  //     res.send(arr1)
  //   }
  // })
});
