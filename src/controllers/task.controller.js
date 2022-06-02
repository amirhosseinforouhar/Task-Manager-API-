const asyncWrapper = require("../utils/asyncWrapper")
const Task = require("../models/Task")
const { StatusCodes } = require("http-status-codes")
const notFoundError = require("../errors/notFoundError")

const getAllTasks = asyncWrapper(async (req , res) => {
    const tasks = await Task.find({})
    res.json({tasks})
})


const getTask = asyncWrapper(async (req , res) => {
    const {id : taskID} = req.params

    const task = await Task.findById(taskID)
    if(!task) throw new notFoundError("Task not found")

    res.json({task})
})


const createTask = asyncWrapper(async (req , res) => {
    const task = await Task.create({...req.body})
    res.status(StatusCodes.CREATED).json({task})
})



const editTask = asyncWrapper(async (req , res) => {
    const {id : taskID}  = req.params
    const update = {...req.body}

    const task = await Task.findByIdAndUpdate(taskID , update , {
        runValidators : true , new : true 
    })

    if(!task) throw new notFoundError("Task not found")

    res.json({task})
})



const deleteTask = asyncWrapper(async (req , res) => {
    const {id : taskID}  = req.params
    const task = await Task.findByIdAndDelete(taskID)

    if(!task) throw new notFoundError("Task not found")
    
    res.json({task})
})

module.exports = {
    getAllTasks , 
    getTask , 
    createTask , 
    editTask , 
    deleteTask 
}