import express, { Router } from 'express'
import { createTask } from '../controllers/createTask'
import { readTask } from '../controllers/readTask'
import { updateTask } from '../controllers/updateTask'
import { deleteTask } from '../controllers/deleteTask'

const taskRoute: Router = express.Router()

taskRoute.post('/create', createTask)
taskRoute.get('/read', readTask)
taskRoute.put("/update/:id", updateTask);
taskRoute.delete("/delete/:id", deleteTask);

export default taskRoute