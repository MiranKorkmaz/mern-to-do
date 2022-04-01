import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import todoRoute from "./routes/todo.js"

const app = express()
const port = 3001

// middlewares 
app.use(cors())
// tells express to pass anything from body to json
app.use(express.json())
// app.use(cookieParser())
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))


// declaring JWT secret
// const JWT = "secret123"

// middlewear for authorization
// app.use((req, _res, next) => {
//   const authHeader = req.header("Authorization")
//   if (authHeader) {
//     const token = authHeader.split(" ")[1]
//     req.user = jwt.verify(token, JWT)
//   }
//   next()
// })


// const requireLogin = (req, res, next) => {
//   if (req.user) {
//       next();
//   } else {
//       res.sendStatus(401);
//   }
// }



// app.post("/api/register", async (req,res) => {
//   try {
//     const newPassword = await bcrypt.hash(req.body.password, 10)
//     const {username, password} = req.body
//     const user = new User({
//       username,
//       password: newPassword
//     })
//     await user.save()
//     res.json({status: "ok"})
//   } catch (err) {
//     res.json({status: "error"})
//   }
// })

// app.get("/users", requireLogin, (req, res) => {
//   const user = req.user
//   User.findOne({ user : user })
//   res.json({ user })
// })


// app.post("/api/login", async (req, res) => {
//     const user = await User.findOne({username: req.body.username})
//     if(!user) {
//       return {status: "error", error: "invalid login"}
//     }
//     const isPassword = await bcrypt.compare(req.body.password, user.password)
//     if (isPassword) {
//       const userId = user._id.toString()
//       const token = jwt.sign({userId, username: user.username}, JWT)
//       res.json({user: token, status: "ok"})
//     } else {
//       return res.json({status: "error", user: false})
//     }
// })


// app.post("/api/logout", (req, res) => {
//   res.cookie("token", "").send()
// })

app.use("/todos", todoRoute)


// connect app to mongoose
mongoose
  .connect("mongodb://localhost/todo", {})
  .then(console.log("mongoDB connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
    console.log(`Express started on port ${port}`)
})