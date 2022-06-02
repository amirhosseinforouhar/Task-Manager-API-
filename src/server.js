const express = require('express');
const dotenv = require("dotenv");
const connectToMongoDB = require("./db/connectDB")
const errorHandlerMiddleWare = require('./middleWares/errorHandler.middleware');

const app = express ()
dotenv.config({path : `${__dirname}/configs/config.env`})

app.use(express.json())


app.use("/tasks" , require("./routes/tasks.routes"))


app.use(errorHandlerMiddleWare)

connectToMongoDB()


const PORT = process.env.PORT || 3000 
app.listen(PORT , () => console.log(`http://localhost:${PORT}`))

