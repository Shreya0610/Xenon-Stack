const express = require("express");
const app = express();
const path = require("path")
const hbs = require("hbs");

require("./db/conn.js");
const Register = require("./models/user-model");

const templates_path = path.join(__dirname, "/templates/views");
const partials_path = path.join(__dirname, "/templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("view engine","hbs");
app.set("views",templates_path);
hbs.registerPartials(partials_path);

// app.get("/",(req,res)=>{
//   res.render("index");
// })

app.get("/login",(req,res)=>{
    res.render("login");
});
app.get("/",(req,res)=>{
  res.render("signup");
})

app.post("/signup", async(req,res) =>{
  try{
    const signupUser = new User({
      firstname : req.body.firstName,
      lastname : req.body.lastName,
      email : req.body.textEmail,
      password : req.body.textPassword
    })
    const registered = await signupUser.save();
    res.status(201).render(index);
  } catch(error){
    res.status(400).send(error);
  }
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`working http://localhost:${port}`);
});