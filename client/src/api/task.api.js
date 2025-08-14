import axios from 'axios'

export const getAllTask = async () => {
    try {
        const response = await axios.get("http://localhost:8000/tasks");
        return response.data;
    } catch (error) {
        console.error("Error fetching tasks:", error);
        throw error;
    }
}