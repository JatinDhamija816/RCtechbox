import { Request, Response } from "express";
import Task from "../models/taskModel";

export const readTask = async (req: Request, res: Response): Promise<any> => {
    try {
        const tasks = await Task.find();

        return res.status(200).json({
            success: true,
            message: 'Tasks retrieved successfully',
            data: tasks,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error instanceof Error ? error.message : 'An unknown error occurred',
        });
    }
};
