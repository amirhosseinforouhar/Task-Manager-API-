const express = require('express');
const dotenv = require("dotenv");
const connectDB = require('./db/connectDB');
const tasksRouter = require("./Routes/tasks");
const errorHandler = require('./MiddleWares/errorHandler');

const app = express ()
dotenv.config({path : `${__dirname}/Configs/config.env`})

// middlewares 
app.use(express.json())

// Routes 
app.use("/tasks" , tasksRouter)


// error handler middleware  
app.use(errorHandler)

const PORT = process.env.PORT || 3000 ; 
const start = async () => {
    try {
        await connectDB ()
        app.listen(PORT , () => {
            console.log(`server running on port ${PORT}...`)
        })
    } catch (error) {
        console.log(error);
    }
}

start()

