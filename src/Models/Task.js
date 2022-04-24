const mongoose = require('mongoose');
const Schema = mongoose.Schema

const taskSchema = new Schema({
    description: {
        type: String,
        required: true,
        trim : true 
      },
      completed: {
        type: Boolean,
        default: false,
      },
})


const Task = mongoose.model("tasks" , taskSchema)

module.exports = Task ; 