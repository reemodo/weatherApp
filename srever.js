const express = require("express")
const path = require("path")
const Database = require("./server/utilities/DatabaseManager")
// Setting up express, serving client files, configuring bodyParser
//TODO: need to add it to the .env file
const port = 3000
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '.', 'dist')))
app.use(express.static(path.join(__dirname, '.', 'node_modules')))


// Internal Modules Imports
const api = require('./server/routes/weatherApi')

// Connecting to "api", i.e our routes
app.use('/cities', api)

// Running the server
app.listen(port, function(){
    console.log(`Node server created at port ${port}`)
})

Database.connectDB()