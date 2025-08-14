import { useEffect, useState } from "react"
import { getAllTask } from "../api/task.api"
import { TaskCard } from "./TaskCard";

export default function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await getAllTask();
                setTasks(response.data);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };

        fetchTasks();
    }, [])


    return (
        <div>
            {tasks.map(task => (<TaskCard key={task.id} task={task} />
            ))}
        </div>
    )
}
