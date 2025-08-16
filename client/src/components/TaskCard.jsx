import { useNavigate } from "react-router-dom"


export function TaskCard({ task }) {
    const navigate = useNavigate()
    const handleEdit = () => {
        navigate(`/task/edit/${task.id}`)
    }

    return (
        <div onClick={handleEdit} className="bg-gray-800 p-4 rounded-md cursor-pointer hover:bg-gray-700">
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <p className="text-gray-400">{task.description}</p>

        </div>
    )
}
