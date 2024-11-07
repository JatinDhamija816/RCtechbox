import mongoose, { Schema } from 'mongoose';
import { ITask } from '../types/types';

const taskSchema: Schema = new Schema({
    task: {
        type: String,
        required: true
    },
});

const Task = mongoose.model<ITask>('Task', taskSchema);

export default Task;