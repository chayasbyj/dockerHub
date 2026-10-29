
const express = require("express")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 7100
const app = express()

//middlewares
app.use(express.json())

//routes
app.get("/", (req, res) => {
    res.send("this is the home page")
})


app.listen(PORT, () => console.log(`Server running on port
${PORT}`))


mongoose.connection.on('error', err => {
    console.log(err)
})






