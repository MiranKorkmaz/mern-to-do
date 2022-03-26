const express = require("express")
const app = express()
const port = 3001 
const cors = require("cors")
const mongoose = require("mongoose")

app.use(cors())
app.use(express.json())

app.get("/api", (req, res) => {
    res.json({message: "hello from server!"})
})
















mongoose
  .connect("mongodb://localhost/users", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(console.log("mongoDB connected"))
  .catch((err) => console.log(err));

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
app.listen(port, () => {
    console.log(`Express started on port ${port}`)
})