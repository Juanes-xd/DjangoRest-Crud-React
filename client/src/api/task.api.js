import axios from 'axios'

const taskApi = axios.create({
    baseURL: "http://localhost:8000/tasks/api/v1/tasks"
})


export const getAllTask = async () => {
    try {
        const response = await taskApi.get("/");

        return response;

    } catch (error) {
        console.error("Error fetching tasks:", error);
        throw error;
    }
}



export const createTask = async (task) => {
    try {
        const response = await taskApi.post("/", task);
        return response;
    } catch (error) {
        console.error("Error creating task:", error);
        throw error;
    }
}

export const deleteTask = async (id) => {
    try {
        const response = await taskApi.delete(`/${id}`);
        return response;
    } catch (error) {
        console.error("Error deleting task:", error);
        throw error;
    }
}


export const updateTask = async (id, updatedTask) => {
    try {
        const response = await taskApi.put(`/${id}/`, updatedTask);
        return response;
    } catch (error) {
        console.error("Error updating task:", error);
        throw error;
    }
}

export const getTask = async (id) => {
    try {
        const response = await taskApi.get(`/${id}/`);
        return response;
    } catch (error) {
        console.error("Error fetching task:", error);
        throw error;
    }
}