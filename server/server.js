const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const User = require("./models/User")
const jwt = require("jsonwebtoken")

const app = express()
const port = 3001


// middlewares 
app.use(cors())
// tells express to pass anything from body to json
app.use(express.json())

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// routes
app.post("/api/register", async (req,res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      password: req.body.password
    })
    res.json({status: "ok"})
  } catch (err) {
    res.json({status: "error"})
  }
})

app.post("/api/login", async (req, res) => {
    const user = await User.findOne({username: req.body.username, password: req.body.password})

    if (user) {
      const token = jwt.sign({
        username: user.username
      }, "secret123456789")
      return res.json({status: "ok", user: token})
    } else {
      return res.json({status: "error", user: false})
    }
})



// connect app to mongoose
mongoose
  .connect("mongodb://localhost/todo", {})
  .then(console.log("mongoDB connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
    console.log(`Express started on port ${port}`)
})