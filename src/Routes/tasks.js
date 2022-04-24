const {Router} = require('express');
const { getAllTasks , getTask , createTask , editTask , deleteTask } = require('../Controllers/taskController');
const router = Router()


router.route("/").get(getAllTasks).post(createTask)
router.route("/:id").get(getTask).patch(editTask).delete(deleteTask)

module.exports = router ; 