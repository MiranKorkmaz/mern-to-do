import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import todoRoute from "./routes/todo.js"
import userRoute from "./routes/user.js"

const app = express()
const port = 3001

// middlewares 
app.use(cors())
// tells express to pass anything from body to json
app.use(express.json())



app.use("/todos", todoRoute)
app.use("/user", userRoute)


// connect app to mongoose
mongoose
  .connect("mongodb://localhost/todo", {})
  .then(console.log("mongoDB connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
    console.log(`Express started on port ${port}`)
})