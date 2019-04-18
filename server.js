const express = require('express')
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")
const path = require("path")
const PORT = process.env.PORT || 5700

// Middlewares:
app.use(express.json()) // gives access to req.body
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "client", "build")))


// Reference to our Shelter Routes
app.use("/shelterList", require('./routes/shelterRoutes.js'))


// Database Connection
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost:27017/shelter-db", {useNewUrlParser: true}, () => {
    console.log('[o] Connected to Database')
} )

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err)
    res.send({errMsg: err.message})
})


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Server Setup
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})