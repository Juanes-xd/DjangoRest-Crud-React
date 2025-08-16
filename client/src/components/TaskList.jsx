import { useEffect, useState } from "react"
import { getAllTask } from "../api/task.api"
import { TaskCard } from "./TaskCard";

export default function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await getAllTask();
                console.log("Fetched tasks2:", response.data);
                setTasks(response.data);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };

        fetchTasks();
    }, [])


    return (
        <div className="grid grid-cols-3 gap-3">
            {Array.isArray(tasks) ? (
                tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))
            ) : (
                <p>No tasks available</p>
            )}
        </div>
    )
}
