const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db")


app.use(cors())
app.use(express.json())

app.post("/todos", async (req,res) => {
  try {
    console.log(req.body)
  } catch (err) {
    console.log(err.message)
  }
})

app.listen(5000, () => {
  console.log("Server Has Started")
})

