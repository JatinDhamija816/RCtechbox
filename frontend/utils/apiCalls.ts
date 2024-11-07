import axios from 'axios'

const API_URL = 'http://localhost:8000/api/v1/task'

export const createTask = async (task: string) => {
    try {
        const res = await axios.post(`${API_URL}/create`, { task })
        return res
    } catch (error) {
        return error
    }
}

export const readTask = async () => {
    try {
        const res = await axios.get(`${API_URL}/read`)

        return res.data
    } catch (error) {
        console.log(error)
        return error
    }
}

export const updateTask = async (id: string, updatedTask: string) => {
    try {
        const response = await axios.put(`${API_URL}/update/${id}`, { task: updatedTask });
        return response.data;
    } catch (error) {
        console.error("Error updating task", error);
        throw error;
    }
};

export const deleteTask = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/delete/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting task", error);
        throw error;
    }
};