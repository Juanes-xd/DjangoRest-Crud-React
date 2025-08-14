import { useNavigate } from "react-router-dom"


export function TaskCard({ task }) {
    const navigate = useNavigate()
    const handleEdit = () => {
        navigate(`/task/edit/${task.id}`)
    }

    return (
        <div onClick={handleEdit}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <hr />
        </div>
    )
}
