const express = require("express")
const { getAllTasks , getTask , createTask , editTask , deleteTask } = require('../controllers/task.controller');
const router = express.Router()


router.route("/").get(getAllTasks).post(createTask)

router.route("/:id").get(getTask).patch(editTask).delete(deleteTask)

module.exports = router ; 