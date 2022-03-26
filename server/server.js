const express = require("express")
const app = express()
const port = 3001 
const cors = require("cors")

app.use(cors())
app.use(express.json())

app.get("/api", (req, res) => {
    res.json({message: "hello from server!"})
})

app.listen(port, () => {
    console.log(`Express started on port ${port}`)
})