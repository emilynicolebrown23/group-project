const express = require('express')
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")


// Middlewares:
app.use(express.json()) // gives access to req.body
app.use(morgan('dev'))


// Reference to our Shelter Routes
app.use("/shelterList", require('./routes/shelterRoutes.js'))

// Database Connection
mongoose.connect("mongodb://localhost:27017/first-db", {useNewUrlParser: true}, () => {
    console.log('[o] Connected to Database')
} )

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err)
    res.send({errMsg: err.message})
})


// Server Setup
app.listen(5700, () => {
    console.log('Server is running on port 5700')
})