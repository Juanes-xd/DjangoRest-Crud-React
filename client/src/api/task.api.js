import axios from 'axios'

const taskApi = axios.create({
    baseURL: "http://localhost:8000/tasks/api/v1/tasks"
})


export const getAllTask = async () => {
    try {
        const response = await taskApi.get("/");
        return response.data;
    } catch (error) {
        console.error("Error fetching tasks:", error);
        throw error;
    }
}


export const createTask = async (task) => {
    try {
        const response = await taskApi.post("/", task);
        return response.data;
    } catch (error) {
        console.error("Error creating task:", error);
        throw error;
    }
}

export const deleteTask = async (id) => {
    try {
        const response = await taskApi.delete(`/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting task:", error);
        throw error;
    }
}