import { Request, Response } from "express";
import Task from "../models/taskModel";

export const updateTask = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const { task } = req.body;

        const updatedTask = await Task.findByIdAndUpdate(id, { task }, { new: true });

        if (!updatedTask) {
            return res.status(404).json({
                success: false,
                message: "Task not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Task updated successfully",
            data: updatedTask,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error instanceof Error ? error.message : "An unknown error occurred",
        });
    }
};
