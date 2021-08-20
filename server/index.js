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
app.post("/api/progress", async (req, res) => {
  const Title = req.body.title;
  const supEmail = req.body.supEmail;
  const userName = req.body.userName;
  const userEmail = req.body.userEmail;
  console.log(req.body);
  res.send(
    await new Promise(function (resolve, reject) {
      const sqlInsert = "INSERT INTO progress (Title, supEmail, userName, userEmail) VALUES (?,?,?,?);";
      db.query(sqlInsert, [Title, supEmail, userName, userEmail], (err, result) => {
        console.log(err);
        if (err) {
          resolve({ message: "wsomething wend wrong" });
        }
        resolve({ result });
      });
    })
  );
});

app.get("/api/progress", async (req, res) => {
  res.send(
    await new Promise(function (resolve, reject) {
      db.query("SELECT * FROM progress;", (err, result) => {
        if (err) {
          res.send({ err: errr });
        }
        resolve({ result });
      });
    })
  );
});

app.post("/api/progress/edit/:id", async (req, res) => {
  console.log(req.body);
  const reportUrl = req.body.reportUrl;
  const id = req.params.id;

  res.json(
    await new Promise(function (resolve, reject) {
      const SqlUpdate = "UPDATE progress SET reportUrl = ? WHERE id = ?";
      db.query(SqlUpdate, [reportUrl, id], (err, result) => {
        if (err) resolve({ auth: false, message: "something went wrong" });
        resolve({ auth: true, message: "progress updated successfully" });
      });
    })
  );
});

//Inserting data into Announcement table (Add an announcement)
app.post("/api/project", async (req, res) => {
  const title = req.body.title;
  const internal = req.body.internal;
  const external = req.body.external;
  const batch = req.body.batch;
  console.log(req.body);
  res.send(
    await new Promise(function (resolve, reject) {
      const sqlInsert =
        "INSERT INTO project (title, internal, external, batch) VALUES (?,?,?,?);";
      db.query(sqlInsert, [title, internal, external, batch], (err, result) => {
        console.log(err);
        if (err) {
          resolve({ message: "wsomething wend wrong" });
        }
        resolve({ result });
      });
    })
  );
});

app.get("/api/project", async (req, res) => {
  res.send(
    await new Promise(function (resolve, reject) {
      db.query("SELECT * FROM project;", async (err, result) => {
        if (err) {
          res.send({ err: errr });
        }
        const response = [];
        for (let i = 0; i < result.length; i++) {
          const std = await new Promise(function (resolve, reject) {
            db.query(
              "SELECT * FROM projectStd WHERE project_id = ?;",
              result[i].project_id,
              (err, result) => {
                if (err) {
                  res.send({ err: errr });
                }
                resolve({ result });
              }
            );
          });
          response.push({
            project: result[i],
            stds: std,
          });
        }

        resolve({ result: response });
      });
    })
  );
});

app.get("/api/project/one/:id", async (req, res) => {
  const id = req.params.id;
  res.send(
    await new Promise(function (resolve, reject) {
      db.query(
        "SELECT * FROM project WHERE project_id = ?;",
        id,
        async (err, result) => {
          if (err) {
            res.send({ err: errr });
          }
          const response = [];
          for (let i = 0; i < result.length; i++) {
            const std = await new Promise(function (resolve, reject) {
              db.query(
                "SELECT * FROM projectStd WHERE project_id = ?;",
                result[i].project_id,
                (err, result) => {
                  if (err) {
                    res.send({ err: errr });
                  }
                  resolve({ result });
                }
              );
            });
            response.push({
              project: result[i],
              stds: std,
            });
          }

          resolve({ result: response });
        }
      );
    })
  );
});

app.post("/api/project/edit/:id", async (req, res) => {
  console.log(req.body);
  const data = req.body;
  const id = req.params.id;

  res.json(
    await new Promise(function (resolve, reject) {
      const SqlUpdate = `UPDATE project SET title = '${data.title}', internal= '${data.internal}', external= '${data.external}', batch= '${data.batch}'  WHERE project_id = ${id}`;
      db.query(SqlUpdate, (err, result) => {
        if (err) resolve({ auth: false, message: err });
        resolve({ auth: true, message: "progress updated successfully" });
      });
    })
  );
});

app.post("/api/project/delete/:id", async (req, res) => {
  const id = req.params.id;

  res.json(
    await new Promise(function (resolve, reject) {
      db.query(
        "DELETE FROM project WHERE project_id = ?;",
        id,
        (err, result) => {
          if (err) {
            res.send({ err: errr });
          }
          resolve({ result });
        }
      );
    })
  );
});

//Inserting data into Announcement table (Add an announcement)
app.post("/api/projectStd", async (req, res) => {
  const fullName = req.body.fullName;
  const rollNo = req.body.rollNo;
  const email = req.body.email;
  const project_id = req.body.project_id;

  console.log(req.body);
  res.send(
    await new Promise(function (resolve, reject) {
      const sqlInsert =
        "INSERT INTO projectStd (fullName, rollNo, email, project_id) VALUES (?,?,?,?);";
      db.query(
        sqlInsert,
        [fullName, rollNo, email, project_id],
        (err, result) => {
          console.log(err);
          if (err) {
            resolve({ message: "wsomething wend wrong" });
          }
          resolve({ result });
        }
      );
    })
  );
});

app.get("/api/projectStd", async (req, res) => {
  res.send(
    await new Promise(function (resolve, reject) {
      db.query("SELECT * FROM projectStd;", (err, result) => {
        if (err) {
          res.send({ err: errr });
        }
        resolve({ result });
      });
    })
  );
});

//Inserting data into Announcement table (Add an announcement)
app.post("/api/weightage", async (req, res) => {
  const project_id = req.body.project_id;
  const weight1 = req.body.weight1;
  const weight2 = req.body.weight2;
  const weight3 = req.body.weight3;
  const weight4 = req.body.weight4;
  const finalReport = req.body.finalReport;
  const otherRepots = req.body.otherRepots;
  const byChairman = req.body.byChairman;

  console.log(req.body);
  res.send(
    await new Promise(function (resolve, reject) {
      const sqlInsert =
        "INSERT INTO weightage (project_id, weight1, weight2, weight3, weight4, finalReport, otherRepots, byChairman) VALUES (?,?,?,?,?,?,?,?);";
      db.query(
        sqlInsert,
        [project_id, weight1, weight2, weight3, weight4, finalReport, otherRepots, byChairman],
        (err, result) => {
          console.log(err);
          if (err) {
            resolve({ message: "wsomething wend wrong" });
          }
          resolve({ result });
        }
      );
    })
  );
});

app.get("/api/weightage/:id", async (req, res) => {
  console.log(req.params.id)
  res.send(
    await new Promise(function (resolve, reject) {
      db.query(`SELECT * FROM weightage WHERE project_id = '${req.params.id}';`, (err, result) => {
        if (err) {
          res.send({ err: errr });
        }
        resolve({ result });
      });
    })
  );
});

app.post("/api/projectStd/edit/:id", async (req, res) => {
  console.log(req.body);
  const data = req.body;
  const id = req.params.id;

  res.json(
    await new Promise(function (resolve, reject) {
      const SqlUpdate = `UPDATE projectStd SET fullName = '${data.fullName}', rollNo= '${data.rollNo}', email= '${data.email}'  WHERE id = ${id}`;
      db.query(
        SqlUpdate,
        (err, result) => {
          if (err) resolve({ auth: false, message: "something went wrong" });
          resolve({ auth: true, message: "progress updated successfully" });
        }
      );
    })
  );
});


//Inserting data into Announcement table (Add an announcement)
app.post("/api/grade", async (req, res) => {
  const projectTitle = req.body.projectTitle;
  const project_id = req.body.project_id;
  const batch = req.body.batch;
  const group_id = req.body.group_id;
  const date = req.body.date;
  const evlP = req.body.evlP;
  const evlName1 = req.body.evlName1;
  const evlName2 = req.body.evlName2;
  const evlName3 = req.body.evlName3;
  const designation1 = req.body.designation1;
  const designation2 = req.body.designation2;
  const designation3 = req.body.designation3;
  const stdRoll1 = req.body.stdRoll1;
  const stdRoll2 = req.body.stdRoll2;
  const stdRoll3 = req.body.stdRoll3;
  const stdName1 = req.body.stdName1;
  const stdName2 = req.body.stdName2;
  const stdName3 = req.body.stdName3;
  const groupP1 = req.body.groupP1;
  const groupP2 = req.body.groupP2;
  const groupP3 = req.body.groupP3;

  console.log(req.body);
  res.send(
    await new Promise(function (resolve, reject) {
      const sqlInsert =
        "INSERT INTO grades (projectTitle, project_id, batch, group_id, date, evlP, evlName1, evlName2, evlName3, designation1, designation2, designation3, stdRoll1, stdRoll2, stdRoll3, stdName1, stdName2, stdName3, groupP1, groupP2, groupP3 ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
      db.query(
        sqlInsert,
        [projectTitle, project_id, batch, group_id, date, evlP, evlName1, evlName2, evlName3, designation1, designation2, designation3, stdRoll1, stdRoll2, stdRoll3, stdName1, stdName2, stdName3, groupP1, groupP2, groupP3],
        (err, result) => {
          console.log(err);
          if (err) {
            resolve({ message: "wsomething wend wrong" });
          }
          resolve({ result });
        }
      );
    })
  );
});

function search(nameKey, prop, myArray){
  for (var i=0; i < myArray.length; i++) {
      if (myArray[i][prop]=== nameKey) {
          return myArray[i];
      }
  }
}

app.get("/api/grade", async (req, res) => {
  res.send(
    await new Promise(function (resolve, reject) {
      db.query("SELECT * FROM grades;", (err, result) => {

        let response = []
        for(var i=0; i< result.length; i++){
          // console.log(result[i].project_id,project_id, response)

          var resultObject = search(result[i].project_id,'project_id', response);
          console.log(!resultObject)
          if(!resultObject){
            response.push(result[i])
          }
        }
        console.log(response)
        if (err) {
          res.send({ err: errr });
        }
        resolve({ result: response });
      });
    })
  );
});

app.get("/api/grade/:id", async (req, res) => {
  res.send(
    await new Promise(function (resolve, reject) {
      db.query(`SELECT * FROM grades WHERE id='${req.params.id}';`, (err, result) => {
        if (err) {
          res.send({ err: errr });
        }
        resolve({ result });
      });
    })
  );
});


//Inserting data into Announcement table (Add an announcement)
app.post("/api/criteria", async (req, res) => {
  const grade_id = req.body.grade_id;
  const marks1 = req.body.marks1;
  const marks2 = req.body.marks2;
  const marks3 = req.body.marks3;
  const reMarks1 = req.body.reMarks1;
  const reMarks2 = req.body.reMarks2;
  const reMarks3 = req.body.reMarks3;
  const criteriaNo = req.body.criteriaNo;
  const evalNo = req.body.evalNo;
  const project_id = req.body.project_id;
  const stdRollNo = req.body.stdRollNo;

  console.log(req.body);
  res.send(
    await new Promise(function (resolve, reject) {
      const sqlInsert =
        "INSERT INTO criteria (grade_id, marks1, marks2, marks3, reMarks1, reMarks2, reMarks3, criteriaNo, evalNo, project_id, stdRollNo ) VALUES (?,?,?,?,?,?,?,?,?,?,?);";
      db.query(
        sqlInsert,
        [grade_id, marks1, marks2, marks3, reMarks1, reMarks2, reMarks3, criteriaNo, evalNo, project_id, stdRollNo],
        (err, result) => {
          console.log(err);
          if (err) {
            resolve({ message: "wsomething wend wrong" });
          }
          resolve({ result });
        }
      );  
    })
  );
});

app.get("/api/criteria", async (req, res) => {
  res.send(
    await new Promise(function (resolve, reject) {
      db.query("SELECT * FROM criteria;", (err, result) => {
        if (err) {
          res.send({ err: err });
        }
        resolve({ result });
      });
    })
  );
});

app.get("/api/criteria/:projectId", async (req, res) => {
  res.send(
    await new Promise(function (resolve, reject) {
      db.query(`SELECT * FROM criteria WHERE project_id='${req.params.projectId}';`, (err, result) => {
        if (err) {
          res.send({ err: err });
        }
        resolve({ result });
      });
    })
  );   
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
      user: "saz.fyp@gmail.com",
      pass: "fypneduet",
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
