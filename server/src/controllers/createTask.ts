import { Request, Response } from "express";

import Task from "../models/taskModel";

export const createTask = async (req: Request, res: Response): Promise<any> => {
    try {
        const { task } = req.body
        const newTask = new Task({ task: task })
        await newTask.save()

        return res.status(201).json({
            success: true,
            message: 'Task Created Successfully',
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error instanceof Error ? error.message : 'An unknown error occurred',
        });
    }
}